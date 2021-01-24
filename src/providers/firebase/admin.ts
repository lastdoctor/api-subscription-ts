import admin from 'firebase-admin';
import serviceAccount from '../../config/subscription-api.json';
import { FIREBASE_DATABASE_URL } from '../../config';

export default admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
  // @ts-ignore
  FIREBASE_DATABASE_URL,
});