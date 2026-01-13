#  Cloud Firewall Settings Dashboard

A modern, intuitive web-based dashboard for managing cloud firewall rules and network security settings. Built with React and styled with a beautiful glassmorphism design.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

## ✨ Features

- **Rule Management** - Create, edit, delete, and toggle firewall rules with ease
- **Real-time Statistics** - Monitor active rules, allow/deny ratios, and overall firewall status
- **Protocol Support** - Full support for TCP, UDP, and ICMP protocols
- **Source IP Control** - Configure allowed/blocked IP addresses with CIDR notation
- **Activity Logging** - View recent firewall events and traffic decisions
- **Modern UI** - Beautiful glassmorphism design with smooth animations
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- **Settings Panel** - Configure default policies, logging levels, and DDoS protection

<img width="1888" height="1061" alt="image" src="https://github.com/user-attachments/assets/1aa12563-2178-4bce-897a-888e95a02bf6" />

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cloud-firewall-dashboard.git
cd cloud-firewall-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Technology Stack

- **React** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **JavaScript (ES6+)** - Programming language

## 📋 Usage

### Adding a Firewall Rule

1. Navigate to the **Rules** tab
2. Click the **Add Rule** button
3. Fill in the rule details:
   - Rule Name (e.g., "Allow HTTP")
   - Protocol (TCP/UDP/ICMP)
   - Port number
   - Source IP/CIDR (e.g., "0.0.0.0/0" or "10.0.0.0/8")
   - Action (Allow/Deny)
4. Click **Save Rule**

### Managing Existing Rules

- **Toggle Rule**: Click the switch to enable/disable a rule
- **Edit Rule**: Click the edit icon to modify rule parameters
- **Delete Rule**: Click the trash icon to remove a rule

### Configuring Settings

Navigate to the **Settings** tab to configure:
- Default policy for unmatched traffic
- Logging level (Minimal/Standard/Verbose)
- DDoS protection toggle

### Viewing Activity Logs

Check the **Logs** tab to see recent firewall events including:
- Timestamp
- Action taken (ALLOW/DENY)
- Source IP address
- Port and protocol information

## 🎨 Screenshots

### Dashboard Overview
The main dashboard displays real-time statistics and firewall status with an elegant glassmorphism design.

### Rules Management
Comprehensive table view of all firewall rules with inline editing and quick actions.

### Activity Logs
Real-time monitoring of firewall decisions and network traffic.

## 🔒 Security Considerations

This is a front-end demonstration application. In a production environment, you should:

- Implement proper authentication and authorization
- Use backend API endpoints for rule management
- Encrypt sensitive data in transit and at rest
- Implement rate limiting and input validation
- Add audit logging for compliance
- Follow the principle of least privilege

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Inspired by modern cloud security platforms
- Icons provided by Lucide React
- Design patterns from contemporary UI/UX trends

## 📧 Contact

Om Gedam

GitHub: @itsomg134

Email: omgedam123098@gmail.com

Twitter (X): @omgedam

LinkedIn: Om Gedam

Portfolio: https://ogworks.lovable.app
