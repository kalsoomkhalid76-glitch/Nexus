import { useState } from 'react';
import { Upload, FileText, CheckCircle, Clock, Edit } from 'lucide-react';

export default function DocumentChamber() {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Investment Agreement.pdf', status: 'Draft' },
    { id: 2, name: 'NDA Contract.pdf', status: 'In Review' },
    { id: 3, name: 'Term Sheet.pdf', status: 'Signed' },
  ]);

  const getStatusColor = (status: string) => {
    if (status === 'Draft') return 'bg-gray-100 text-gray-600';
    if (status === 'In Review') return 'bg-yellow-100 text-yellow-600';
    return 'bg-green-100 text-green-600';
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Document Chamber</h1>
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6">
        <Upload size={40} className="mx-auto text-gray-400 mb-3" />
        <p className="text-gray-600">Upload PDF or Document</p>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Choose File
        </button>
      </div>
      <div className="space-y-3">
        {documents.map(doc => (
          <div key={doc.id} className="flex items-center justify-between p-4 bg-white border rounded-lg">
            <div className="flex items-center gap-3">
              <FileText size={24} className="text-blue-600" />
              <span className="font-medium">{doc.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(doc.status)}`}>
                {doc.status}
              </span>
              <button className="text-gray-500 hover:text-gray-700">
                <Edit size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}