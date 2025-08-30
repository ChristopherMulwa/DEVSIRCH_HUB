# 🚀 DEVSIRCH HUB

[![GitHub last commit](https://img.shields.io/github/last-commit/ChristopherMulwa/DevSirch-Hub)](https://github.com/ChristopherMulwa/DevSirch-Hub/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/ChristopherMulwa/DevSirch-Hub)](https://github.com/ChristopherMulwa/DevSirch-Hub)
[![GitHub language count](https://img.shields.io/github/languages/count/ChristopherMulwa/DevSirch-Hub)](https://github.com/ChristopherMulwa/DevSirch-Hub)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Empowering Your Digital Future with Secure IT Solutions**

A modern, professional website showcasing comprehensive IT services including cybersecurity, IT consulting, web development, and ICT infrastructure solutions. Built with cutting-edge technologies for optimal performance and user experience.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [📱 Pages & Components](#-pages--components)
- [🚀 Getting Started](#-getting-started)
- [🔧 Development](#-development)
- [📦 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [📊 Performance Features](#-performance-features)
- [🔒 Security Features](#-security-features)
- [📱 Responsive Design](#-responsive-design)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [📞 Contact](#-contact)

## ✨ Features

### 🎯 **Core Functionality**
- **Modern, Responsive Design**: Clean and professional UI built with Tailwind CSS
- **Interactive Contact System**: Functional contact form with email integration
- **Service Showcase**: Comprehensive display of IT services and expertise
- **Dynamic Content**: Fast, server-rendered pages with Next.js
- **Smooth Animations**: Engaging user interactions with Framer Motion

### 🚀 **Advanced Features**
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Performance Optimized**: Image optimization and lazy loading
- **Accessibility**: WCAG compliant design patterns
- **Cross-browser Compatible**: Modern web standards support
- **Mobile-First Design**: Responsive across all device sizes

## 🛠️ Tech Stack

### **Frontend Framework**
- **[Next.js 15.3.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling & UI**
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon system
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library

### **Forms & Validation**
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Hookform Resolvers](https://github.com/react-hook-form/resolvers)** - Form validation integration

### **Additional Libraries**
- **[React Leaflet](https://react-leaflet.js.org/)** - Interactive maps
- **[React Hot Toast](https://react-hot-toast.com/)** - Toast notifications
- **[Resend](https://resend.com/)** - Email service integration

## 🏗️ Architecture

### **App Router Structure**
```
src/app/
├── (routes)/              # Page routes
├── api/                   # API endpoints
├── globals.css            # Global styles
├── layout.tsx             # Root layout
└── page.tsx               # Home page
```

### **Component Architecture**
- **Atomic Design**: Reusable components with clear hierarchy
- **Context Management**: Modal and state management
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized rendering and lazy loading

## 📱 Pages & Components

### **Core Pages**
- **Home** (`/`) - Landing page with hero section and service overview
- **About** (`/about`) - Company information and team details
- **Services** (`/services`) - Comprehensive service offerings
- **Contact** (`/contact`) - Contact form and company information
- **Future Initiatives** (`/future`) - Upcoming projects and vision

### **Service Pages**
- **Cybersecurity Awareness** - Training and threat assessments
- **IT Consulting & Support** - Strategic guidance and support
- **Website & Software Development** - Custom solutions
- **ICT Infrastructure Setup** - Network and system design
- **ICT Equipment Procurement** - Hardware and software sourcing
- **Governance, Risk & Compliance (GRC)** - Regulatory compliance

### **Key Components**
- **Header** - Navigation with dropdown menus
- **ContactModal** - Interactive contact form
- **InteractiveServices** - Service showcase with animations
- **TrustSignals** - Social proof and certifications
- **ModernCTA** - Call-to-action components

## 🚀 Getting Started

### **Prerequisites**
- **Node.js**: Version 18.x or later
- **Package Manager**: npm, yarn, or pnpm
- **Git**: For version control

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChristopherMulwa/DevSirch-Hub.git
   cd DevSirch-Hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### **Available Scripts**
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### **Development Features**
- **Hot Reload**: Instant updates during development
- **TypeScript**: Full type checking and IntelliSense
- **ESLint**: Code quality and consistency
- **Turbopack**: Fast bundling and development

## 📦 Project Structure

```
DevSirch-Hub/
├── public/                 # Static assets
│   ├── images/            # Image files
│   └── leaflet/           # Map assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API routes
│   │   ├── services/      # Service pages
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   │   ├── ui/            # Base UI components
│   │   └── [Component].tsx
│   └── context/           # React context providers
├── .eslintrc.js           # ESLint configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue (#2563eb) - Trust and professionalism
- **Secondary**: Gray (#64748b) - Text and subtle elements
- **Accent**: Various shades for visual hierarchy

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Responsive**: Scalable text sizes across devices
- **Hierarchy**: Clear heading and body text structure

### **Components**
- **Cards**: Elevated design with hover effects
- **Buttons**: Interactive elements with smooth transitions
- **Forms**: Clean, accessible input fields
- **Navigation**: Intuitive menu system

## 📊 Performance Features

### **Optimization Techniques**
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for fast loading
- **Bundle Analysis**: Optimized JavaScript bundles

### **Performance Metrics**
- **Lighthouse Score**: Optimized for Core Web Vitals
- **First Contentful Paint**: Fast initial rendering
- **Time to Interactive**: Quick user interaction readiness

## 🔒 Security Features

### **Security Measures**
- **Input Validation**: Zod schema validation for all forms
- **Environment Variables**: Secure configuration management
- **API Protection**: Rate limiting and error handling
- **HTTPS Ready**: Production-ready security headers

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

### **Responsive Features**
- **Mobile-First**: Designed for mobile devices first
- **Flexible Grid**: CSS Grid and Flexbox layouts
- **Touch-Friendly**: Optimized for touch interactions
- **Adaptive Images**: Responsive image sizing

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **How to Contribute**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Development Guidelines**
- Follow the existing code style and conventions
- Add tests for new functionality
- Ensure all tests pass before submitting
- Update documentation as needed

### **Reporting Issues**
- Use the [GitHub Issues](https://github.com/ChristopherMulwa/DevSirch-Hub/issues) page
- Provide detailed descriptions and reproduction steps
- Include browser and device information

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE.md](LICENSE.md) file for details.

The MIT License is a permissive license that allows for:
- Commercial use
- Modification
- Distribution
- Private use

## 📞 Contact

### **Project Maintainer**
- **Christopher Mulwa** - Lead Developer & Project Owner

### **Project Links**
- **Repository**: [https://github.com/ChristopherMulwa/DevSirch-Hub](https://github.com/ChristopherMulwa/DevSirch-Hub)
- **Issues**: [https://github.com/ChristopherMulwa/DevSirch-Hub/issues](https://github.com/ChristopherMulwa/DevSirch-Hub/issues)
- **Discussions**: [https://github.com/ChristopherMulwa/DevSirch-Hub/discussions](https://github.com/ChristopherMulwa/DevSirch-Hub/discussions)

---

<div align="center">

**Made with ❤️ by the DEVSIRCH HUB Team**

*Empowering Your Digital Future with Secure IT Solutions*

[![GitHub stars](https://img.shields.io/github/stars/ChristopherMulwa/DevSirch-Hub?style=social)](https://github.com/ChristopherMulwa/DevSirch-Hub/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ChristopherMulwa/DevSirch-Hub?style=social)](https://github.com/ChristopherMulwa/DevSirch-Hub/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/ChristopherMulwa/DevSirch-Hub?style=social)](https://github.com/ChristopherMulwa/DevSirch-Hub/watchers)

</div>
