"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = exports.logger = exports.logDocumentChange = exports.firestore = void 0;
// common.ts
const firebase_1 = require("./firebase");
const firestore_1 = require("firebase-admin/firestore");
Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function () { return firestore_1.Timestamp; } });
const logger = require("firebase-functions/logger");
exports.logger = logger;
// For convenience, re-export Firestore or other references here if needed
exports.firestore = (0, firebase_1.getFirestore)();
/**
 * Utility function to log document changes with field count information
 * @param {string} docId - The document ID
 * @param {any} oldData - The previous document data
 * @param {any} newData - The new document data
 * @param {string} operation - The operation type (created, updated, deleted)
 */
const logDocumentChange = (docId, oldData, newData, operation) => {
    const oldFieldCount = oldData ? Object.keys(oldData).length : 0;
    const newFieldCount = newData ? Object.keys(newData).length : 0;
    console.log(`VAIA Task Document ${operation.toUpperCase()} - docId: ${docId}`);
    console.log(`Field count - Old: ${oldFieldCount}, New: ${newFieldCount}`);
    logger.info(`VAIA Task Document ${operation.toUpperCase()}`, {
        docId,
        oldFieldCount,
        newFieldCount,
        documentName: `vaia_tasks/${docId}`,
    });
};
exports.logDocumentChange = logDocumentChange;
//# sourceMappingURL=common.js.map