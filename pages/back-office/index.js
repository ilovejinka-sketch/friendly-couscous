import React, { useState } from 'react';

// Mock Initial Data representing the unified operational ledger
const INITIAL_INVENTORY = [
  { id: 'p8', name: 'Premium Paste (8 oz)', sku: 'JNK-PST-08', stock: 142, threshold: 50, type: 'Paste' },
  { id: 'p16', name: 'Premium Paste (16 oz)', sku: 'JNK-PST-16', stock: 89, threshold: 30, type: 'Paste' },
  { id: 'c60', name: 'Targeted Capsules (60 ct)', sku: 'JNK-CAP-60', stock: 210, threshold: 75, type: 'Capsule' },
  { id: 'c120', name: 'Targeted Capsules (120 ct)', sku: 'JNK-CAP-120', stock: 95, threshold: 40, type: 'Capsule' },
];

const INITIAL_ORDERS = [
  { id: '1024', customer: 'M. Williams', items: '2x Paste (8 oz)', total: 55.98, destination: 'Pearland, TX', route: 'Local Delivery', status: 'Pending' },
  { id: '1023', customer: 'S. Houston', items: '1x Capsules (120 ct)', total: 75.00, destination: 'Katy, TX', route: 'Local Delivery', status: 'Processing' },
  { id: '1022', customer: 'R. Davis', items: '1x Paste (16 oz), 1x Capsules (60 ct)', total: 85.98, destination: 'Houston, TX', route: 'Local Delivery', status: 'Shipped' },
];

export default function BackOfficeDashboard() {
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [activeTab, setActiveTab] = useState('shipping'); // shipping, inventory

  // Order state handling engine
  const updateOrderStatus = (orderId, nextStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: nextStatus } : order
    ));
  };

  // Stock adjustment logic tracking
  const adjustStock = (itemId, delta) => {
    setInventory(prev => prev.map(item => {
      if (item.id === itemId) {
        const newStock = Math.max(0, item.stock + delta);
        return { ...item, stock: newStock };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans antialiased">
      {/* Structural Header Matrix */}
      <header className="border-b border-neutral-900 bg-neutral-900/30 backdrop-blur-md sticky top-0 z-50 px-8 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-black uppercase tracking-wider text-white">jinka<span className="text-amber-500">.</span></span>
            <span className="bg-amber-500/10 border border-amber-500/20 text-amber-500 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md font-bold">
              Back-Office Node
            </span>
          </div>
          <p className="text-xs text-neutral-500 mt-1">Fulfillment Engine & Molecular Asset Synchronization</p>
        </div>

        {/* View Selection Controls */}
        <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800/80 w-full sm:w-auto">
          <button 
            onClick={() => setActiveTab('shipping')}
            className={`flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${activeTab === 'shipping' ? 'bg-amber-600 text-white shadow-md' : 'text-neutral-400 hover:text-neutral-200'}`}
          >
            Fulfillment Logistics
          </button>
          <button 
            onClick={() => setActiveTab('inventory')}
            className={`flex-1 sm:flex-none px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${activeTab === 'inventory' ? 'bg-amber-600 text-white shadow-md' : 'text-neutral-400 hover:text-neutral-200'}`}
          >
            Inventory Control
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-10">
        {/* SHIPPING & ORDER FULFILLMENT VIEW */}
        {activeTab === 'shipping' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold tracking-tight">Active Fulfillment Queues</h2>
                <p className="text-xs text-neutral-400 mt-1">Localized routing parameters for Houston, Pearland, and Katy loops.</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-neutral-300">
                  <thead className="text-xs text-neutral-500 uppercase bg-neutral-900/60 border-b border-neutral-800">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Order ID</th>
                      <th className="px-6 py-4 font-semibold">Customer Parameters</th>
                      <th className="px-6 py-4 font-semibold">Allocated Formulations</th>
                      <th className="px-6 py-4 font-semibold">Regional Route</th>
                      <th className="px-6 py-4 font-semibold">Fulfillment Status</th>
                      <th className="px-6 py-4 font-semibold text-right">Execution Sequence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/40">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-neutral-900/30 transition-colors">
                        <td className="px-6 py-4 font-mono text-xs font-bold text-neutral-400">#{order.id}</td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-neutral-200 text-sm">{order.customer}</div>
                          <div className="text-xs text-neutral-500 mt-0.5">{order.destination}</div>
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-neutral-300">{order.items}</td>
                        <td className="px-6 py-4">
                          <span className="bg-neutral-800 border border-neutral-700 text-neutral-400 px-2.5 py-1 rounded-md text-[11px] font-medium block w-fit">
                            {order.route}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            order.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                            order.status === 'Processing' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                            'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              order.status === 'Pending' ? 'bg-amber-500' :
                              order.status === 'Processing' ? 'bg-blue-400' : 'bg-emerald-400'
                            }`} />
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            {order.status === 'Pending' && (
                              <button 
                                onClick={() => updateOrderStatus(order.id, 'Processing')}
                                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs uppercase tracking-wide transition shadow"
                              >
                                Process Batch
                              </button>
                            )}
                            {order.status === 'Processing' && (
                              <button 
                                onClick={() => updateOrderStatus(order.id, 'Shipped')}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs uppercase tracking-wide transition shadow"
                              >
                                Dispatch Route
                              </button>
                            )}
                            {order.status === 'Shipped' && (
                              <span className="text-xs text-neutral-500 font-mono italic">Fulfillment Complete</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* INVENTORY CONTROL VIEW */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Molecular Stock Balances</h2>
              <p className="text-xs text-neutral-400 mt-1">Live tracking loops hooked directly into product catalog configurations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {inventory.map(item => {
                const isCritical = item.stock <= item.threshold;
                return (
                  <div key={item.id} className={`p-5 rounded-2xl border transition-all ${isCritical ? 'bg-amber-950/20 border-amber-900/60 shadow-amber-950/10 shadow-lg' : 'bg-neutral-900 border-neutral-800/80'}`}>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">{item.sku}</span>
                      {isCritical && (
                        <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                          Low Stock Alert
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm mt-2 text-neutral-200">{item.name}</h3>
                    
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-3xl font-black tracking-tight">{item.stock}</span>
                      <span className="text-xs text-neutral-500 font-medium">units left</span>
                    </div>

                    <div className="mt-5 flex gap-1.5 border-t border-neutral-800/80 pt-4">
                      <button 
                        onClick={() => adjustStock(item.id, -1)}
                        className="flex-1 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/40 text-neutral-300 py-1.5 rounded-lg text-xs font-bold transition"
                      >
                        -1 Unit
                      </button>
                      <button 
                        onClick={() => adjustStock(item.id, 10)}
                        className="flex-1 bg-neutral-800 hover:bg-amber-600/20 hover:border-amber-600/30 hover:text-amber-400 border border-neutral-700/40 text-neutral-300 py-1.5 rounded-lg text-xs font-bold transition"
                      >
                        +10 Batch
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
