"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryMethod = exports.Status = exports.Section = void 0;
var Section;
(function (Section) {
    Section["Invoices"] = "invoices";
    Section["IncomingInvoices"] = "incoming_invoices";
    Section["OutgoingInvoices"] = "outgoing_invoices";
})(Section = exports.Section || (exports.Section = {}));
var Status;
(function (Status) {
    Status[Status["Received"] = 1] = "Received";
    Status[Status["Liquidation"] = 2] = "Liquidation";
    Status[Status["Liquidated"] = 3] = "Liquidated";
    Status[Status["Archived"] = 4] = "Archived";
})(Status = exports.Status || (exports.Status = {}));
var DeliveryMethod;
(function (DeliveryMethod) {
    DeliveryMethod[DeliveryMethod["Mail"] = 1] = "Mail";
    DeliveryMethod[DeliveryMethod["Post"] = 2] = "Post";
    DeliveryMethod[DeliveryMethod["Personal"] = 3] = "Personal";
})(DeliveryMethod = exports.DeliveryMethod || (exports.DeliveryMethod = {}));
//# sourceMappingURL=invoices.enum.js.map