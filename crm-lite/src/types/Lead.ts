export type LeadStatus = "Interested" | "Inprogress" | "Rejected";

export interface Lead {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  status: LeadStatus;
  lastContact: string;
}
