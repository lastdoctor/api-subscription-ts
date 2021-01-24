import { RequestHandler } from 'express';
import { User } from '../common/auth.interface';
import { Injectable } from '../decorators';
// import { Injectable } from '../decorators';
import admin from '../providers/firebase/admin';

@Injectable()
export class AuthService {
  async createCustomToken(uid: string): Promise<string> {
    try {
      const token = await admin.auth().createCustomToken(uid);
      return token;
    } catch (e) {
      throw Error(e.message);
    }
  }

  async verifyIdToken(token: string) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      return decodedToken;
    } catch (e) {
      throw Error(e.message);
    }
  }

  async createUser(data: User) {
    try {
      const newUserData = {
        ...data,
        emailVerified: false,
        disabled: false,
      };

      const isExistUser = await admin.auth().getUserByEmail(newUserData.email);
      if (!isExistUser) {
        throw Error('User already exists.');
      }

      const user = await admin.auth().createUser(newUserData);
      return user;
    } catch (e) {
      throw Error(e.message);
    }
  }
}