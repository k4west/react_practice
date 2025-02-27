import { useState } from 'react';
import { Lead } from '../types/Lead.ts'
import LeadList from '../components/LeadList.tsx'
import AddLeadForm from '../components/AddLeadForm.tsx'


const LeadsPage = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  const handleAddLead = (newLead: Lead) => {
    setLeads((prevLeads) => [...prevLeads, newLead]);
  };

  const handleUpdateLead = (updatedLead: Lead) => {
    setLeads((prevLeads) => prevLeads.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead))
    );
  };

  // Leave Leads with different ids with the id to be got rid of
  const handleDeleteLead = (id: string) => {
    setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== id));
  };

  return (
    <div>
      <h1>CRM Lead</h1>
      <AddLeadForm onAddLead={handleAddLead} />
      <LeadList leads={leads} onUpdateLead={handleUpdateLead} onDeleteLead={handleDeleteLead} />
    </div>
  )
};

export default LeadsPage
