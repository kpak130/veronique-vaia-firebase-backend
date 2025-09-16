// common.ts
import { getFirestore } from "./firebase";
import { Timestamp } from "firebase-admin/firestore";
import * as logger from "firebase-functions/logger";

// For convenience, re-export Firestore or other references here if needed
export const firestore = getFirestore();

/**
 * Utility function to log document changes with field count information
 * @param {string} docId - The document ID
 * @param {any} oldData - The previous document data
 * @param {any} newData - The new document data
 * @param {string} operation - The operation type (created, updated, deleted)
 */
export const logDocumentChange = (
  docId: string,
  oldData: any,
  newData: any,
  operation: string
): void => {
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

// Re-export commonly used items
export { logger, Timestamp };