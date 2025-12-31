# Mime Tech-Collective (MTC)

> **Digital infrastructure for the preservation, protection, and transmission of Bangladesh's theatre heritage.**

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://fnziad.github.io/mime-tech/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-prototype-yellow)](https://github.com/fnziad/mime-tech)

## 🎭 Overview

The **Mime Tech-Collective (MTC)** is a comprehensive digital platform designed to address the critical challenges facing Bangladesh's mime theatre community. This project serves as a prototype for a three-pillar solution:

1. **Active Documentation & Archival Service** - Preserving performances, techniques, and cultural heritage
2. **Digital Professionalization Platform (Virtual Impresario)** - Connecting artists with opportunities
3. **Academic & Institutional Pipeline (Living Academy)** - Training the next generation

## ✨ Features

### 🗃️ Resistance Archive
- **847+ Documents** cataloging Bangladesh's theatre of resistance
- YouTube video integration for performance documentation
- Advanced search and filtering by artist, technique, era, and location
- DOI-ready archival system for academic citation

### 👥 Artists Directory
- Professional profiles for 23+ mime artists
- Portfolio galleries with performance images
- Booking inquiry system
- Skills and specialization tags

### 🏛️ Organizations Directory
- Cultural institutions and mime troupes
- Academy and federation listings
- Contact information and affiliations

### 🎓 Living Academy
- Structured curriculum based on Dr. Fr. Tapon De Rozario's "Echoes of Silence"
- Video lessons and technique demonstrations
- Modules covering corporeal mime, Huda Yoga breathing, and indigenous fusion

### 💼 Virtual Impresario
- Artist representation and booking management
- Professional profiles with availability status
- Tech rider downloads
- Contact forms for event organizers

## 🚀 Quick Start

### Prerequisites
- Node.js (for development server)
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/fnziad/mime-tech.git
cd mime-tech

# Serve locally (using any static server)
npx serve .

# Or use Python's built-in server
python -m http.server 8000
```

Visit `http://localhost:8000` (or the port shown) to view the site.

## 📁 Project Structure

```
mtc-project/
├── index.html              # Resistance Archive (main page)
├── artists.html            # Artists Directory
├── organizations.html      # Organizations Directory
├── impresario.html         # Virtual Impresario
├── academy.html            # Living Academy
├── artist-profile.html     # Dynamic artist profile template
├── css/
│   └── styles.css          # Unified stylesheet
├── js/
│   └── main.js             # Core JavaScript functionality
└── dist/                   # Generated images and assets
    ├── artist_portrait.png
    ├── mime_performance.png
    ├── student_performance.png
    ├── duma_performance.png
    ├── community_map.png
    └── mtc_service_ecosystem.png
```

## 🎨 Design System

- **Typography**: Playfair Display (headings), Inter (body)
- **Color Palette**: Dark theme with red accent (#dc2626)
- **Layout**: Responsive grid system with mobile-first approach
- **Components**: Glassmorphic cards, magazine-style hero sections

## 🔧 Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Media**: YouTube iframe API for video playback
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Inline SVG icons

## 📊 Key Statistics

- **847** archived documents
- **23** registered artists
- **5** cultural organizations
- **12** curriculum modules
- **4** featured video performances

## 🎯 Prototype Status

This is a **functional prototype** demonstrating the core features of the MTC platform. Current implementation includes:

✅ Full responsive design  
✅ YouTube video integration  
✅ Dynamic artist profiles  
✅ Search and filter functionality  
✅ Magazine-style layouts  
✅ Modal-based video player  

### Future Enhancements
- Backend integration for user authentication
- Database for dynamic content management
- Booking system with calendar integration
- Payment processing for academy courses
- Multi-language support (Bengali/English)
- Advanced analytics dashboard

## 📖 Documentation

This project is based on the engaged research paper:
> **"Mime Tech-Collective (MTC): Digital Infrastructure for Bangladesh's Theatre of Resistance"**

Key research areas addressed:
- **Epistemic Void**: Lack of academic legitimacy for mime in Bangladesh
- **Documentation Crisis**: Ephemeral nature of performance art
- **Economic Precarity**: Limited professional opportunities for artists
- **Knowledge Vacuum**: Absence of structured pedagogical resources

## 🤝 Contributing

This is a research prototype. For inquiries about the project or collaboration opportunities, please contact:

**Developer**: Fahad Nadim Ziad  
- GitHub: [@fnziad](https://github.com/fnziad)
- LinkedIn: [fahadnadimziad](https://linkedin.com/in/fahadnadimziad)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Master Shariar Shawon** - Founder, Shawon Mime Academy
- **DUMA (Dhaka University Mime Action)** - Student collective
- **Dr. Fr. Tapon De Rozario** - Author of "Echoes of Silence"
- All contributing artists and organizations in Bangladesh's mime community

## 📞 Contact

For booking inquiries, partnership opportunities, or general questions:
- Email: contact@mtc-archive.org (prototype)
- Website: [https://fnziad.github.io/mime-tech/](https://fnziad.github.io/mime-tech/)

---

**© 2026 Mime Tech-Collective (MTC)** | Built with ❤️ for Bangladesh's theatre heritage
