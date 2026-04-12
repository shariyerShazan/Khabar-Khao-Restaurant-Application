import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

const googleClientId = process.env.GOOGLE_CLIENT_ID!;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
export const oath2client = new google.auth.OAuth2(
  googleClientId,
  googleClientSecret,
  'authmessage',
);
