import { compare, genSalt, hash } from 'bcryptjs';
import { model, Schema } from 'mongoose';

interface IUser {
  username: string;
  email: string;
  password: string;
  role: string;
  isModified(password: string): boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comparePassword(password: string, callback: (err: any, isMatch: boolean) => void): boolean;
}

const userSchema = new Schema<IUser>({
  email: { type: String, unique: true, lowercase: true, trim: true },
  username: String,
  password: String,
  role: String
});

// Before saving the user, hash the password
userSchema.pre<IUser>('save', function(next): void {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
userSchema.methods.comparePassword = function(candidatePassword: string, callback: any): void {
  compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

// Omit the password when returning a user
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  }
});

const User = model<IUser>('User', userSchema);

export type { IUser };
export default User;
