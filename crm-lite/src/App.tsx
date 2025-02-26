import './App.css'
import { useState } from 'react';
import { Lead } from './types/Lead.ts'
import LeadList from './components/LeadList.tsx'
import AddLeadForm from './components/AddLeadForm.tsx'


function App() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const handleAddLead = (newLead: Lead) => {
    setLeads((prevLeads) => [...prevLeads, newLead]);
  };

  return (
    <>
      <h1>CRM Lead</h1>
      <AddLeadForm onAddLead={handleAddLead} />
      <div></div>
      <LeadList/>
    </>
  )
};

export default App
