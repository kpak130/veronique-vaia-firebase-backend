"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBucket = exports.getFirestore = void 0;
const admin = require("firebase-admin");
if (!admin.apps.length) {
    admin.initializeApp();
    console.log("Firebase Admin SDK initialized");
}
const getFirestore = () => admin.firestore();
exports.getFirestore = getFirestore;
const getBucket = () => {
    return admin.storage().bucket();
};
exports.getBucket = getBucket;
exports.default = admin;
//# sourceMappingURL=firebase.js.map