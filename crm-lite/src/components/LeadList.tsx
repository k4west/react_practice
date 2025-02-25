import { useState } from "react";
import { Lead } from "../types/Lead";

const initialLeads: Lead[] = [
    {
        id: "1",
        companyName: "ABC Corp",
        contactName: "김철수",
        email: "chulsoo@abc.com",
        phone: "010-1234-5678",
        status: "Interested",
        lastContact: "2025-02-20",
    },
];

const LeadList = () => {
    //  Only showing initialLeads, No need to use setLeads yet.
    const [leads, setLeads] = useState<Lead[]>(initialLeads);

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
                            <span className="bg-blue-200 px-2 py-1 rounded">
                                {lead.status}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeadList;
