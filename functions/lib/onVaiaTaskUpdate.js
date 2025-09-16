"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onVaiaTaskUpdate = void 0;
// onVaiaTaskUpdate.ts
const firestore_1 = require("firebase-functions/v2/firestore");
const common_1 = require("./common");
exports.onVaiaTaskUpdate = (0, firestore_1.onDocumentWritten)({
    document: "vaia_tasks/{docId}",
    timeoutSeconds: 540,
}, async (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const beforeExists = ((_b = (_a = event.data) === null || _a === void 0 ? void 0 : _a.before) === null || _b === void 0 ? void 0 : _b.data()) !== undefined;
    const afterExists = ((_d = (_c = event.data) === null || _c === void 0 ? void 0 : _c.after) === null || _d === void 0 ? void 0 : _d.data()) !== undefined;
    const oldData = (_f = (_e = event.data) === null || _e === void 0 ? void 0 : _e.before) === null || _f === void 0 ? void 0 : _f.data();
    const newData = (_h = (_g = event.data) === null || _g === void 0 ? void 0 : _g.after) === null || _h === void 0 ? void 0 : _h.data();
    if (!beforeExists && afterExists) {
        // Document was created
        common_1.logger.info(`Document ${event.params.docId} was created.`, {
            newData,
        });
        (0, common_1.logDocumentChange)(event.params.docId, oldData, newData, "created");
    }
    else if (beforeExists && afterExists) {
        // Document was updated
        common_1.logger.info(`Document ${event.params.docId} was updated.`, {
            oldData,
            newData,
        });
        (0, common_1.logDocumentChange)(event.params.docId, oldData, newData, "updated");
        if (!newData) {
            common_1.logger.error("newData is undefined.");
            return;
        }
        // Additional processing logic can be added here if needed
    }
    else if (beforeExists && !afterExists) {
        // Document was deleted
        common_1.logger.info(`Document ${event.params.docId} was deleted.`, {
            oldData: (_k = (_j = event.data) === null || _j === void 0 ? void 0 : _j.before) === null || _k === void 0 ? void 0 : _k.data(),
        });
        (0, common_1.logDocumentChange)(event.params.docId, oldData, newData, "deleted");
    }
    return;
});
//# sourceMappingURL=onVaiaTaskUpdate.js.map