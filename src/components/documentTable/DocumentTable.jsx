import React from 'react';
import './DocumentTable.css';

const documentData = [
  { name: 'Emma, Watson T', docType: 'Questionnaire Result', queue: 'Doctorslump', date: '09/29/2025' },
  { name: 'Emma, Watson T', docType: 'Patient Sign Header', queue: 'Doctorslump', date: '09/29/2025' },
  { name: 'Emma, Watson T', docType: 'U1 with sign', queue: 'Doctorslump', date: '09/29/2025' },
  { name: 'Emma, Watson T', docType: 'U2', queue: 'Doctorslump', date: '09/29/2025' },
  { name: 'Duderino, E', docType: 'MM11', queue: 'Doctorslump', date: '09/29/2025' }
];

const DocumentTable = () => {
  return (
    <div className="document-container">
      <h2 className="document-title text-white">Documents</h2>
      <div className="table-responsive">
      <table className="document-table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Doc Type</th>
            <th>Queue</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {documentData.map((doc, index) => (
            <tr key={index}>
              <td>{doc.name}</td>
              <td>{doc.docType}</td>
              <td>{doc.queue}</td>
              <td>{doc.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    </div>
  );
};

export default DocumentTable;
