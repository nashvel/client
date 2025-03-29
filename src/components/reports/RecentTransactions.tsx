import React from "react";

interface Transaction {
  id: string;
  item: string;
  amount: string;
}

const recentTransactions: Transaction[] = [
  { id: "#001", item: "Beef Bulgogi", amount: "₱699" },
  { id: "#002", item: "Kimbap", amount: "₱899" },
  { id: "#003", item: "Kimchi", amount: "₱199" },
];

const RecentTransactions: React.FC = () => (
  <div className="p-4 bg-white shadow rounded-lg">
    <h3 className="text-lg font-bold mb-3">Recent Transactions</h3>
    <ul>
      {recentTransactions.map((tx, index) => (
        <li key={index} className="flex justify-between">
          <span>{tx.id}</span>
          <span>{tx.item}</span>
          <span>{tx.amount}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentTransactions;
