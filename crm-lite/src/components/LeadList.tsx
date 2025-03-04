import { useState } from "react";
import { Lead } from "../types/Lead";
import EditLeadModal from "./EditLeadModal";
import EmailGenerator from "./EmailGenerator";

interface Props {
  leads: Lead[];
  onUpdateLead: (updatedLead: Lead) => void;
  onDeleteLead: (id: string) => void;
}

const LeadList = ({ leads, onUpdateLead, onDeleteLead }: Props) => {
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [emailLead, setEmailLead] = useState<Lead | null>(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Lead List</h2>
      <ul className="mt-4">
        {leads.map((lead) => (
          <li key={lead.id} className="border p-4 mb-2 rounded-lg">
            <div className="font-semibold">{lead.companyName}</div>
            <div>{lead.contactName} ({lead.email})</div>
            <div>📞 {lead.phone}</div>
            <div className="text-sm">📅 Last Contact: {lead.lastContact}</div>
            <div className="mt-2">
              <span className="bg-blue-200 px-2 py-1 rounded">{lead.status}</span>
            </div>
            <div className="mt-3 flex gap-2">
              <button onClick={() => setEditingLead(lead)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                Edit
              </button>
              <button onClick={() => onDeleteLead(lead.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
              <button onClick={() => setEmailLead(lead)} className="bg-green-500 text-white px-3 py-1 rounded">
                Create Email
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingLead && (
        <EditLeadModal
          lead={editingLead}
          onClose={() => setEditingLead(null)}
          onSave={(updatedLead) => {
            onUpdateLead(updatedLead);
            setEditingLead(null);
          }}
        />
      )}
      {emailLead && (
        <EmailGenerator
          companyName={emailLead.companyName}
          contactName={emailLead.contactName}
          interest="CRM solution"
        />
      )}
    </div>
  );
};

export default LeadList;
