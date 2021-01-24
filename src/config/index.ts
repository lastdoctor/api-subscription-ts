import dotenv from 'dotenv-safe';

dotenv.config({
  allowEmptyValues: true,
});

export const {
  PORT,
  FIREBASE_DATABASE_URL,
  SUBSCRIPTION_COLLECTION_NAME,
  PAYMENTS_COLLECTION_NAME,
} = process.env;