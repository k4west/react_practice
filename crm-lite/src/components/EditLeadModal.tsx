import { useState } from "react";
import { Lead, LeadStatus, LeadElemet } from "../types/Lead";

interface Props {
  lead: Lead;
  onClose: () => void;
  onSave: (updatedLead: Lead) => void;
}

const statuses: LeadStatus[] = ["Interested", "Inprogress", "Rejected"];

const EditLeadModal = ({ lead, onClose, onSave }: Props) => {
  const [companyName, setCompanyName] = useState(lead.companyName);
  const [contactName, setContactName] = useState(lead.contactName);
  const [email, setEmail] = useState(lead.email);
  const [phone, setPhone] = useState(lead.phone);
  const [status, setStatus] = useState<LeadStatus>(lead.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...lead, companyName, contactName, email, phone, status });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold">Edit Lead</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <LeadElemet val={companyName} placeholder="Company Name" setVal={setCompanyName} />
          <LeadElemet val={contactName} placeholder="Contact Name" setVal={setContactName} />
          <LeadElemet val={email} placeholder="Email" setVal={setEmail} />
          <LeadElemet val={phone} placeholder="Phone" setVal={setPhone} />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as LeadStatus)}
            className="border p-2 w-full mt-2"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">
              취소
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLeadModal;
