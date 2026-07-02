# NAED Chinese Learn - Project Setup & Quick Start

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org))
- npm atau yarn
- Git

### Installation

#### Option 1: Automatic Setup (Recommended)

```bash
# Clone repository
git clone https://github.com/natanvrn-dev/naedcchineselearn.git
cd naedcchineselearn

# Run setup script
chmod +x setup.sh
./setup.sh
```

#### Option 2: Manual Setup

```bash
# Clone repository
git clone https://github.com/natanvrn-dev/naedcchineselearn.git
cd naedcchineselearn

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Build project
npm run build
```

### Running Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
naedcchineselearn/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── learn/             # Learning pages
│   │   │   ├── page.tsx       # HSK level selection
│   │   │   ├── hsk1/          # HSK 1 specific
│   │   │   ├── hsk-levels/    # All HSK levels overview
│   │   ├── history/           # Chinese history
│   │   ├── writing-system/    # Writing guide
│   │   ├── about/             # About page
│   │   └── dashboard/         # User dashboard
│   │
│   ├── components/            # Reusable React components
│   │   ├── Flashcard.tsx      # Flashcard component
│   │   ├── StrokeGuide.tsx    # Stroke writing guide
│   │   ├── Quiz.tsx           # Quiz/test component
│   │   ├── VocabularyList.tsx # Vocabulary display
│   │   └── ProgressTracker.tsx # Progress tracking
│   │
│   ├── data/                  # Content data
│   │   ├── hsk1-content.ts    # HSK 1 characters & vocabulary
│   │   └── hsk-all-content.ts # HSK 2-9 overview
│   │
│   ├── lib/                   # Utilities & helpers
│   │   └── constants.ts       # App constants
│   │
│   ├── styles/                # Global styles
│   │   └── globals.css        # Global CSS with Tailwind
│   │
│   └── types/                 # TypeScript definitions
│       └── index.ts           # All types & interfaces
│
├── public/                    # Static assets
├── .github/                   # GitHub configuration
├── .env.example              # Environment variables template
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── next.config.js            # Next.js configuration
├── DEPLOYMENT_GUIDE.md       # Vercel deployment guide
├── CONTRIBUTING.md           # Contributing guidelines
├── setup.sh                  # Automatic setup script
└── README.md                 # Project overview
```

## 🎯 Key Features

### 1. **Comprehensive Learning Content**
- HSK 1-9 complete curriculum
- 5000+ vocabulary words
- Detailed explanations and examples
- Interactive lessons

### 2. **Interactive Learning Tools**
- 🎴 **Flashcards** - Learn with flip cards
- ✍️ **Stroke Guide** - Interactive stroke order visualization
- ❓ **Quiz System** - Test your knowledge
- 📊 **Progress Tracker** - Monitor your learning journey

### 3. **Educational Resources**
- 📖 Chinese history and culture
- ✍️ Writing system guide with stroke rules
- 🔤 Radicals and character structure
- 🎵 Pinyin and tone explanations

### 4. **Beginner-Friendly Design**
- Clean, intuitive interface
- Dark/Light mode support
- Responsive design (mobile, tablet, desktop)
- Accessible for all users
- Smooth animations and transitions

## 📚 Content Breakdown

### HSK Levels

| Level | Characters | Vocabulary | Duration | Focus |
|-------|-----------|-----------|----------|-------|
| **1** | 150 | 150 | 2-3 weeks | Basics |
| **2** | 300 | 300 | 4-6 weeks | Elementary |
| **3** | 600 | 600 | 6-8 weeks | Daily conversation |
| **4** | 1,200 | 1,200 | 8-10 weeks | Complex topics |
| **5** | 2,500 | 2,500 | 10-12 weeks | Upper-intermediate |
| **6** | 5,000 | 5,000 | 12-16 weeks | Advanced |
| **7** | 8,000 | 8,000 | 16-20 weeks | Professional |
| **8** | 10,000 | 10,000 | 20-24 weeks | Master level |
| **9** | 12,000 | 12,000 | 24-30 weeks | Mastery |

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server

# Production
npm run build            # Build for production
npm start                # Start production server

# Quality checks
npm run lint             # Run linter
npm run type-check       # Run TypeScript check
npm run format           # Format code with Prettier

# Testing
npm test                 # Run tests
```

## 🎨 Technology Stack

- **Frontend:** Next.js 14 with React 18
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Language:** TypeScript
- **UI/UX:** Modern, responsive design
- **Deployment:** Vercel

## 🌐 Deployment

### Deploy to Vercel (Recommended)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

**Quick deploy:**
```bash
npm i -g vercel
vercel
```

### Environment Variables

Create `.env.local` with:
```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_ENV=development
```

For production on Vercel, add in project settings:
```
NEXT_PUBLIC_API_URL=https://your-domain.vercel.app/api
NEXT_PUBLIC_ENV=production
```

## 📖 Documentation

- **[README.md](./README.md)** - Project overview
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - How to deploy to Vercel
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute

## 🚀 Next Steps

1. **Explore the project:**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

2. **Start learning:**
   - Go to `/learn` to choose HSK level
   - Start with HSK 1 if beginner
   - Explore `/history` and `/writing-system` for context

3. **Customize content:**
   - Edit files in `src/data/` to add/modify content
   - Add new components in `src/components/`
   - Create new pages in `src/app/`

4. **Deploy:**
   - Follow [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
   - Deploy to Vercel for free hosting

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📝 License

MIT License - Feel free to use this project for educational purposes.

## 🎓 Author

**NAED** - Making Mandarin Chinese learning accessible to everyone.

---

**Happy Learning! 学习快乐！** 🎉

For questions or support, please open an issue on GitHub.
