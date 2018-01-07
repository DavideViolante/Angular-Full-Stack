import * as dotenv from 'dotenv';
import * as jwt from 'express-jwt';

// Important: setAuth() must be called before setRoutes(), order is important in express
export default function setAuth(app) {

  // entries in ./routes that do not require authentication (ie: login, register user)
  const unsecuredRoutes = [
    /\/cats$/,
    /\/cats\/count$/,
    { url: /\/cat\/:id$/, methods: ['GET'] },
    /\/login$/,
    /\/user$/,
  ];

  // send auth token on http requests excluding unsecure routes
  app.use(jwt({ secret: process.env.SECRET_TOKEN, requestProperty: 'payload' }).unless({ path: unsecuredRoutes }));

}

// middleware for doing role-based permissions
export function roleGuard(required) {
  // return a middleware
  return (req, res, next) => {
    // the guard requires a secure route to verify
    if (!req.payload) {
      res.status(403).json({ message: 'Permission denied - insecure route'});
    }
    if (req.payload.user.role === required) {
      next(); // role is allowed, so continue on the next middleware
    } else {
      res.status(403).json({ message: 'Permission denied - insufficient privileges' });
    }
  };
}
