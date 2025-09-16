// onVaiaTaskUpdate.ts
import { onDocumentWritten } from "firebase-functions/v2/firestore";
import { logger, logDocumentChange } from "./common";

export const onVaiaTaskUpdate = onDocumentWritten(
  {
    document: "vaia_tasks/{docId}",
    timeoutSeconds: 540,
  },
  async (event) => {
    const beforeExists = event.data?.before?.data() !== undefined;
    const afterExists = event.data?.after?.data() !== undefined;

    const oldData = event.data?.before?.data();
    const newData = event.data?.after?.data();

    if (!beforeExists && afterExists) {
      // Document was created
      logger.info(`Document ${event.params.docId} was created.`, {
        newData,
      });
      logDocumentChange(event.params.docId, oldData, newData, "created");
    } else if (beforeExists && afterExists) {
      // Document was updated
      logger.info(`Document ${event.params.docId} was updated.`, {
        oldData,
        newData,
      });
      logDocumentChange(event.params.docId, oldData, newData, "updated");

      if (!newData) {
        logger.error("newData is undefined.");
        return;
      }

      // Additional processing logic can be added here if needed
    } else if (beforeExists && !afterExists) {
      // Document was deleted
      logger.info(`Document ${event.params.docId} was deleted.`, {
        oldData: event.data?.before?.data(),
      });
      logDocumentChange(event.params.docId, oldData, newData, "deleted");
    }

    return;
  }
);