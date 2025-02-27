import { useState } from "react";
import { Lead, LeadStatus, LeadElemet } from "../types/Lead"

// Props: Lead 구조의 객체를 입력 받아서 처리하는 함수를 원소로 갖는 객체
interface Props {
  onAddLead: (lead: Lead) => void;
}

const statuses: LeadStatus[] = ["Interested", "Inprogress", "Rejected"];


const AddLeadForm = ({ onAddLead }: Props) => {// Destructuring Assignmen
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<LeadStatus>("Interested");

  // React.FormEvent: React에서 폼 이벤트(onSubmit, onReset) 처리할 때 사용하는 타입
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 기본 동작(페이지 새로고침)을 막음
    const newLead: Lead = {
      id: Date.now().toString(),
      companyName,
      contactName,
      email,
      phone,
      status,
      lastContact: new Date().toISOString().split("T")[0],
    };
    onAddLead(newLead);
    setCompanyName("");
    setContactName("");
    setEmail("");
    setPhone("");
    setStatus("Interested");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">Add Lead</h3>
        <LeadElemet val={companyName} placeholder="Company Name" setVal={setCompanyName} />
        <LeadElemet val={contactName} placeholder="Contact Name" setVal={setContactName} />
        <LeadElemet val={email} placeholder="Email" setVal={setEmail} />
        <LeadElemet val={phone} placeholder="Phone" setVal={setPhone} />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as LeadStatus)}
          className="border p-2 w-full mt-2"
          required
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
                {s}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
          Add
        </button>
    </form>
  );

};

export default AddLeadForm;
