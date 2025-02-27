import { Dispatch, SetStateAction } from "react";

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

interface InputProps {
  val: string;
  placeholder: string;
  setVal: Dispatch<SetStateAction<string>>
}
export const LeadElemet = ({val, placeholder, setVal} : InputProps) => {
  return (
    <input
      type="text"
      value={val}
      placeholder={placeholder}
      onChange={(e) => setVal(e.target.value)}
      className="border p-2 w-full mt-2"
      required
    />
  )
}