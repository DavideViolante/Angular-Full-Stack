import * as mongoose from 'mongoose';

const setMongo = async (): Promise<any> => {
  let mongodbURI: string;
  if (process.env.NODE_ENV === 'test') {
    mongodbURI = process.env.MONGODB_TEST_URI as string;
  } else {
    mongodbURI = process.env.MONGODB_URI as string;
  }
  await mongoose.connect(mongodbURI);
  console.log('Connected to MongoDB');
};

export default setMongo;
