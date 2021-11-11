import * as mongoose from 'mongoose';

const setMongo = async (): Promise<any> => {
  let mongodbURI;
  if (process.env.NODE_ENV === 'test') {
    mongodbURI = process.env.MONGODB_TEST_URI;
  } else {
    mongodbURI = process.env.MONGODB_URI;
  }
  await mongoose.connect(mongodbURI);
  console.log('Connected to MongoDB');
};

export default setMongo;
