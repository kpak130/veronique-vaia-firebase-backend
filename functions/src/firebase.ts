import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
  console.log("Firebase Admin SDK initialized");
}

export const getFirestore = () => admin.firestore();

export const getBucket = () => {
  return admin.storage().bucket();
};

export default admin;
