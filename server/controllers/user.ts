import { sign, Secret } from 'jsonwebtoken';
import { Request, Response } from 'express';

import User, { IUser } from '../models/user';
import BaseCtrl from './base';

const secret: Secret = process.env.SECRET_TOKEN as string;

class UserCtrl extends BaseCtrl<IUser> {
  model = User;

  login = async (req: Request, res: Response) => {
    try {
      const user = await this.model.findOne({ email: req.body.email });
      if (!user) {
        return res.sendStatus(403);
      }
      return user.comparePassword(req.body.password, (error, isMatch: boolean) => {
        if (error || !isMatch) {
          return res.sendStatus(403);
        }
        const token = sign({ user }, secret, { expiresIn: '24h' });
        return res.status(200).json({ token });
      });
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  };

}

export default UserCtrl;
