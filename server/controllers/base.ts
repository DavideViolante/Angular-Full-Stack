import { Request, Response } from 'express';
import { Model } from 'mongoose';

abstract class BaseCtrl<T> {

  abstract model:Model<T>

  // Get all
  getAll = async (req: Request, res: Response) => {
    try {
      const docs = await this.model.find({});
      return res.status(200).json(docs);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  };

  // Count all
  count = async (req: Request, res: Response) => {
    try {
      const count = await this.model.countDocuments();
      return res.status(200).json(count);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  };

  // Insert
  insert = async (req: Request, res: Response) => {
    try {
      const obj = await new this.model(req.body).save();
      return res.status(201).json(obj);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  };

  // Get by id
  get = async (req: Request, res: Response) => {
    try {
      const obj = await this.model.findOne({ _id: req.params.id });
      return res.status(200).json(obj);
    } catch (err) {
      return res.status(500).json({ error: (err as Error).message });
    }
  };

  // Update by id
  update = async (req: Request, res: Response) => {
    try {
      await this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  };

  // Delete by id
  delete = async (req: Request, res: Response) => {
    try {
      await this.model.findOneAndDelete({ _id: req.params.id });
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  };

  // Drop collection (for tests)
  deleteAll = async (_req: Request, res: Response) => {
    try {
      await this.model.deleteMany();
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: (err as Error).message });
    }
  };
}

export default BaseCtrl;
