
import React from 'react';
import DoctorConsultationRequests from '../DoctorConsultationRequests';
import DoctorActiveConsultations from '../DoctorActiveConsultations';
import DoctorHistory from '../DoctorHistory';
import DoctorSettings from '../DoctorSettings';

interface DoctorContentProps {
  activeSection: string;
}

const DoctorContent: React.FC<DoctorContentProps> = ({ activeSection }) => {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {activeSection === "requests" && <DoctorConsultationRequests />}
        {activeSection === "active" && <DoctorActiveConsultations />}
        {activeSection === "history" && <DoctorHistory />}
        {activeSection === "settings" && <DoctorSettings />}
      </div>
    </main>
  );
};

export default DoctorContent;
