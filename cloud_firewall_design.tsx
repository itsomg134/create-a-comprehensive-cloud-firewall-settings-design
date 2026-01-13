import React, { useState } from 'react';
import { Shield, Plus, Trash2, Edit2, Save, X, AlertTriangle, Check } from 'lucide-react';

export default function CloudFirewallDesign() {
  const [activeTab, setActiveTab] = useState('rules');
  const [rules, setRules] = useState([
    { id: 1, name: 'Allow HTTP', protocol: 'TCP', port: '80', source: '0.0.0.0/0', action: 'allow', enabled: true },
    { id: 2, name: 'Allow HTTPS', protocol: 'TCP', port: '443', source: '0.0.0.0/0', action: 'allow', enabled: true },
    { id: 3, name: 'Allow SSH', protocol: 'TCP', port: '22', source: '10.0.0.0/8', action: 'allow', enabled: true },
    { id: 4, name: 'Block Telnet', protocol: 'TCP', port: '23', source: '0.0.0.0/0', action: 'deny', enabled: true }
  ]);
  const [editingRule, setEditingRule] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newRule, setNewRule] = useState({
    name: '', protocol: 'TCP', port: '', source: '', action: 'allow'
  });

  const toggleRule = (id) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  const deleteRule = (id) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  const addRule = () => {
    if (newRule.name && newRule.port && newRule.source) {
      setRules([...rules, { ...newRule, id: Date.now(), enabled: true }]);
      setNewRule({ name: '', protocol: 'TCP', port: '', source: '', action: 'allow' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Cloud Firewall</h1>
                <p className="text-blue-200">Network Security & Access Control</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-blue-200">Status</div>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <Check className="w-4 h-4" />
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <div className="text-blue-200 text-sm mb-1">Total Rules</div>
            <div className="text-3xl font-bold text-white">{rules.length}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <div className="text-blue-200 text-sm mb-1">Active Rules</div>
            <div className="text-3xl font-bold text-green-400">{rules.filter(r => r.enabled).length}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <div className="text-blue-200 text-sm mb-1">Allow Rules</div>
            <div className="text-3xl font-bold text-blue-400">{rules.filter(r => r.action === 'allow').length}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <div className="text-blue-200 text-sm mb-1">Deny Rules</div>
            <div className="text-3xl font-bold text-red-400">{rules.filter(r => r.action === 'deny').length}</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/20">
            {['rules', 'settings', 'logs'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-200 hover:bg-white/5'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Rules Tab */}
          {activeTab === 'rules' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Firewall Rules</h2>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add Rule
                </button>
              </div>

              {/* Add Rule Form */}
              {showAddForm && (
                <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/20">
                  <h3 className="text-white font-semibold mb-3">New Firewall Rule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <input
                      type="text"
                      placeholder="Rule Name"
                      value={newRule.name}
                      onChange={(e) => setNewRule({...newRule, name: e.target.value})}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-blue-300"
                    />
                    <select
                      value={newRule.protocol}
                      onChange={(e) => setNewRule({...newRule, protocol: e.target.value})}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                    >
                      <option value="TCP">TCP</option>
                      <option value="UDP">UDP</option>
                      <option value="ICMP">ICMP</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Port"
                      value={newRule.port}
                      onChange={(e) => setNewRule({...newRule, port: e.target.value})}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-blue-300"
                    />
                    <input
                      type="text"
                      placeholder="Source IP/CIDR"
                      value={newRule.source}
                      onChange={(e) => setNewRule({...newRule, source: e.target.value})}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-blue-300"
                    />
                    <select
                      value={newRule.action}
                      onChange={(e) => setNewRule({...newRule, action: e.target.value})}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                    >
                      <option value="allow">Allow</option>
                      <option value="deny">Deny</option>
                    </select>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={addRule}
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Save Rule
                    </button>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Rules Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-blue-200 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 text-blue-200 font-semibold">Rule Name</th>
                      <th className="text-left py-3 px-4 text-blue-200 font-semibold">Protocol</th>
                      <th className="text-left py-3 px-4 text-blue-200 font-semibold">Port</th>
                      <th className="text-left py-3 px-4 text-blue-200 font-semibold">Source</th>
                      <th className="text-left py-3 px-4 text-blue-200 font-semibold">Action</th>
                      <th className="text-left py-3 px-4 text-blue-200 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rules.map(rule => (
                      <tr key={rule.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4">
                          <button
                            onClick={() => toggleRule(rule.id)}
                            className={`w-12 h-6 rounded-full transition-colors ${
                              rule.enabled ? 'bg-green-500' : 'bg-gray-600'
                            }`}
                          >
                            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              rule.enabled ? 'translate-x-6' : 'translate-x-1'
                            }`} />
                          </button>
                        </td>
                        <td className="py-3 px-4 text-white font-medium">{rule.name}</td>
                        <td className="py-3 px-4 text-blue-200">{rule.protocol}</td>
                        <td className="py-3 px-4 text-blue-200">{rule.port}</td>
                        <td className="py-3 px-4 text-blue-200">{rule.source}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            rule.action === 'allow' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {rule.action.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                              <Edit2 className="w-4 h-4 text-blue-400" />
                            </button>
                            <button 
                              onClick={() => deleteRule(rule.id)}
                              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-6">Firewall Settings</h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">Default Policy</h3>
                      <p className="text-blue-200 text-sm">Action for unmatched traffic</p>
                    </div>
                    <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white">
                      <option>Deny All</option>
                      <option>Allow All</option>
                    </select>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">Logging Level</h3>
                      <p className="text-blue-200 text-sm">Detail level for firewall logs</p>
                    </div>
                    <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white">
                      <option>Minimal</option>
                      <option>Standard</option>
                      <option>Verbose</option>
                    </select>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">DDoS Protection</h3>
                      <p className="text-blue-200 text-sm">Enable automatic DDoS mitigation</p>
                    </div>
                    <button className="w-12 h-6 rounded-full bg-green-500">
                      <div className="w-5 h-5 bg-white rounded-full translate-x-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Logs Tab */}
          {activeTab === 'logs' && (
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-2">
                {[
                  { time: '14:32:15', action: 'ALLOW', ip: '192.168.1.100', port: '443', protocol: 'TCP' },
                  { time: '14:31:52', action: 'DENY', ip: '203.0.113.45', port: '23', protocol: 'TCP' },
                  { time: '14:30:33', action: 'ALLOW', ip: '10.0.0.25', port: '22', protocol: 'TCP' },
                  { time: '14:29:18', action: 'ALLOW', ip: '192.168.1.50', port: '80', protocol: 'TCP' }
                ].map((log, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center gap-4">
                    <div className="text-blue-300 text-sm font-mono">{log.time}</div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      log.action === 'ALLOW' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {log.action}
                    </span>
                    <div className="text-white text-sm">{log.ip}</div>
                    <div className="text-blue-200 text-sm">Port {log.port}</div>
                    <div className="text-blue-200 text-sm">{log.protocol}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}