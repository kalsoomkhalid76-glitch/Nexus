import { useState } from 'react';
import { DollarSign, ArrowUpRight, ArrowDownLeft, RefreshCw } from 'lucide-react';

export default function PaymentPage() {
  const [balance] = useState(25000);
  const transactions = [
    { id: 1, type: 'Deposit', amount: 5000, sender: 'John Smith', receiver: 'Sarah Johnson', status: 'Completed' },
    { id: 2, type: 'Transfer', amount: 2500, sender: 'Sarah Johnson', receiver: 'Mike Davis', status: 'Pending' },
    { id: 3, type: 'Withdraw', amount: 1000, sender: 'Sarah Johnson', receiver: 'Bank', status: 'Completed' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Payment Section</h1>
      <div className="bg-blue-600 text-white rounded-xl p-6 mb-6">
        <p className="text-sm opacity-80">Wallet Balance</p>
        <p className="text-4xl font-bold">${balance.toLocaleString()}</p>
      </div>
      <div className="flex gap-3 mb-6">
        <button className="flex-1 bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
          <ArrowDownLeft size={20} /> Deposit
        </button>
        <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
          <RefreshCw size={20} /> Transfer
        </button>
        <button className="flex-1 bg-red-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
          <ArrowUpRight size={20} /> Withdraw
        </button>
      </div>
      <h2 className="text-lg font-semibold mb-3">Transaction History</h2>
      <div className="space-y-3">
        {transactions.map(tx => (
          <div key={tx.id} className="flex items-center justify-between p-4 bg-white border rounded-lg">
            <div>
              <p className="font-medium">{tx.type}</p>
              <p className="text-sm text-gray-500">{tx.sender} → {tx.receiver}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">${tx.amount.toLocaleString()}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${tx.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}