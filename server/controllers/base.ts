import { Request, Response, Router } from 'express';
import { Document, Model } from 'mongoose';

abstract class BaseCtrl<T extends Document> {
  protected model: Model<T>;
  protected baseRouterURI: string;
  protected baseRouterURIPlural: string;
  constructor(schemaModel: Model<T>, baseuri: string) {
    this.model = schemaModel;
    this.baseRouterURI = baseuri;
    this.baseRouterURIPlural = baseuri + 's';
  }

  public setRoutes(router: Router) {
    router.route(`/${this.baseRouterURIPlural}`).get(this.getAll);
    router.route(`/${this.baseRouterURIPlural}/count`).get(this.count);
    router.route(`/${this.baseRouterURI}`).post(this.insert);
    router.route(`/${this.baseRouterURI}/:id`).get(this.get);
    router.route(`/${this.baseRouterURI}/:id`).put(this.update);
    router.route(`/${this.baseRouterURI}/:id`).delete(this.delete);
  }

  // Get all
  getAll = async (req: Request, res: Response) => {
    try {
      const docs = await this.model.find({});
      return res.status(200).json(docs);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };

  // Count all
  count = async (req: Request, res: Response) => {
    try {
      const count = await this.model.count();
      return res.status(200).json(count);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };

  // Insert
  insert = async (req: Request, res: Response) => {
    try {
      const obj = await new this.model(req.body).save();
      return res.status(201).json(obj);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };

  // Get by id
  get = async (req: Request, res: Response) => {
    try {
      const obj = await this.model.findOne({ _id: req.params.id });
      return res.status(200).json(obj);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  };

  // Update by id
  update = async (req: Request, res: Response) => {
    try {
      await this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
      return res.sendStatus(200);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };

  // Delete by id
  delete = async (req: Request, res: Response) => {
    try {
      await this.model.findOneAndRemove({ _id: req.params.id });
      return res.sendStatus(200);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };
}

export default BaseCtrl;
