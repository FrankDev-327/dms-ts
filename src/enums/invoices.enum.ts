export enum Section {
  Invoices = 'invoices',
  IncomingInvoices = 'incoming_invoices',
  OutgoingInvoices = 'outgoing_invoices',
}

export enum Status {
  Received = 1,
  Liquidation = 2,
  Liquidated = 3,
  Archived = 4,
}

export enum DeliveryMethod {
  Mail = 1,
  Post = 2,
  Personal = 3,
}
