import { compare, genSalt, hash } from 'bcryptjs';
import { Document, model, Schema} from 'mongoose';

const userSchema = new Schema<IUser>({
  username: String,
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: String,
  role: String
});

// Before saving the user, hash the password
userSchema.pre<IUser>('save', function(next): void {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    hash(user.password, salt, (error, hashedPassword) => {
      if (error) { return next(error); }
      user.password = hashedPassword;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword: string, callback: any): void {
  compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

// Omit the password when returning a user
userSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  }
});

interface IUser extends Document {
  _id: any;
  username: string;
  email: string;
  password: string;
  role: string;
  isModified(password: string): boolean;
  comparePassword(password: string, callback: (err: any, isMatch: boolean) => void): boolean;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const User = model<IUser>('User', userSchema);

export default User;
