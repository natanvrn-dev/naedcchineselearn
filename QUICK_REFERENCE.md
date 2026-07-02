# 🎓 NAED Chinese Learn - Quick Reference Guide

## 🚀 Getting Started in 5 Minutes

### 1. Clone Repository
```bash
git clone https://github.com/natanvrn-dev/naedcchineselearn.git
cd naedcchineselearn
```

### 2. Install & Setup
```bash
npm install
npm run dev
```

### 3. Open Browser
```
http://localhost:3000
```

### 4. Explore
- **Landing Page:** `/` - Welcome screen
- **Learn HSK:** `/learn` - Choose learning level
- **HSK 1:** `/learn/hsk1` - Start learning
- **History:** `/history` - Chinese language history
- **Writing:** `/writing-system` - How to write characters
- **About:** `/about` - Learn more about the platform
- **Dashboard:** `/dashboard` - Track progress

---

## 📚 HSK Levels at a Glance

| Level | Goal | Time | Use Case |
|-------|------|------|----------|
| **1** 🟢 | Survive conversations | 2-3 weeks | Holiday, basic survival |
| **2** 🟢 | Simple daily chat | 4-6 weeks | Shopping, eating out |
| **3** 🟢 | Casual conversations | 6-8 weeks | Making friends, travel |
| **4** 🟡 | Complex topics | 8-10 weeks | Work discussions |
| **5** 🟡 | Professional talks | 10-12 weeks | Business meetings |
| **6** 🟡 | Read newspapers | 12-16 weeks | Understand media |
| **7** 🔴 | Analyze articles | 16-20 weeks | Specialized work |
| **8** 🔴 | Literature & classics | 20-24 weeks | Academic study |
| **9** 🔴 | Native proficiency | 24-30 weeks | Complete mastery |

---

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production

# Quality
npm run lint             # Check code quality
npm run type-check       # Check TypeScript
npm run format           # Format code

# Deployment
vercel                   # Deploy to Vercel
vercel --prod           # Deploy to production
```

---

## 📁 Important Files

### Pages (User sees these)
```
src/app/
├── page.tsx                 # 🏠 Landing page
├── learn/page.tsx          # 📚 HSK selection
├── learn/hsk1/page.tsx     # 🎓 HSK 1 learning
├── history/page.tsx        # 📖 Chinese history
├── writing-system/page.tsx # ✍️ Writing guide
├── about/page.tsx          # ℹ️ About page
└── dashboard/page.tsx      # 📊 Progress tracking
```

### Components (Reusable)
```
src/components/
├── Flashcard.tsx           # 🎴 Study cards
├── StrokeGuide.tsx         # ✍️ Writing tutorials
├── Quiz.tsx                # ❓ Tests & quizzes
├── VocabularyList.tsx      # 📚 Word lists
└── ProgressTracker.tsx     # 📊 Statistics
```

### Data
```
src/data/
├── hsk1-content.ts         # ✅ HSK 1 (complete)
└── hsk-all-content.ts      # 📋 HSK 2-9 (outline)
```

---

## 🎨 Styling with Tailwind

### Common Classes Used
```css
/* Colors */
bg-red-600          /* Red background */
text-white          /* White text */
border-green-200    /* Green border */

/* Spacing */
p-6                 /* Padding 6 units */
mb-8                /* Margin bottom 8 units */
gap-4               /* Gap between items */

/* Responsive */
md:grid-cols-2      /* 2 columns on medium screens */
lg:px-8             /* Large padding on large screens */

/* Animations */
hover:scale-105     /* Scale on hover */
transition          /* Smooth transition */
```

---

## 💡 Quick Tips

### Learning Order
1. **Start:** HSK 1 (just basics)
2. **Progress:** HSK 2-3 (conversational)
3. **Build:** HSK 4-6 (broader topics)
4. **Master:** HSK 7-9 (professional)

### Daily Practice
- ✍️ Write 10 characters (10 min)
- 🔊 Listen to audio (5 min)
- 🎴 Flashcard review (15 min)
- ❓ Complete 1 quiz (10 min)
- **Total: 40 min/day**

### Learning Tips
1. **Stroke Order:** Follow exact order (top→bottom, left→right)
2. **Tones:** Practice 4 tones - same character, different meaning
3. **Radicals:** Learn 214 radicals to understand character structure
4. **Consistency:** Daily practice beats weekend cramming
5. **Audio:** Listen to native speakers constantly

---

## 🌟 Component Quick Ref

### Using Flashcard
```tsx
<Flashcard
  character="好"
  pinyin="hǎo"
  meaning="Good"
  audio="path/to/audio.mp3"
/>
```

### Using Quiz
```tsx
<Quiz
  questions={[
    {
      question: "What does 你好 mean?",
      options: ["Goodbye", "Hello", "Thanks"],
      correctAnswer: "Hello",
      explanation: "你好 means hello"
    }
  ]}
/>
```

### Using VocabularyList
```tsx
<VocabularyList
  items={vocabularyData}
  category="Food Vocabulary"
/>
```

---

## 🔑 Key Features Explained

### 📚 Flashcard System
- **Front:** Shows character + pinyin
- **Back:** Shows meaning
- **Click:** Flip to other side
- **Purpose:** Memorize characters fast

### ✍️ Stroke Guide
- **Visual:** Animated stroke order
- **Controls:** Next/Previous/Reset
- **Purpose:** Learn correct writing

### ❓ Quiz System
- **Types:** Multiple choice, fill-in-blank
- **Feedback:** Instant correction
- **Purpose:** Test knowledge

### 📊 Progress Tracker
- **Stats:** Points, streaks, characters
- **Charts:** Visual progress
- **Purpose:** Stay motivated

---

## 🚀 Deployment Steps

### Quick Deploy to Vercel
```bash
npm i -g vercel
vercel login
vercel
```

### Configure Domain (Optional)
1. Go to Vercel Dashboard
2. Select Project → Settings → Domains
3. Add custom domain
4. Update DNS records

---

## 🐛 Troubleshooting

### Port 3000 Already In Use
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Build Fails
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
npm run type-check
# Review errors and fix
```

---

## 📖 Documentation Files

| File | Purpose |
|------|---------|
| **README.md** | Project overview |
| **SETUP.md** | Installation & structure |
| **DEPLOYMENT_GUIDE.md** | Deploy to Vercel |
| **CONTRIBUTING.md** | How to contribute |
| **PROJECT_STATUS.md** | Features & roadmap |
| **quick-reference.md** | This file! |

---

## 🎯 Learning Resources

### Inside Platform
- 📖 `/history` - Chinese language history
- ✍️ `/writing-system` - Character writing rules
- 🔤 `/learn/hsk-levels` - All HSK levels explained
- 📚 `/learn/hsk1` - HSK 1 complete content

### External Resources
- [HSK Official](http://www.chinesetest.cn/) - Official HSK exams
- [Pleco Dictionary](https://www.pleco.com/) - Best Chinese dictionary
- [Forvo](https://forvo.com/) - Pronunciation audio
- [AllSet Learning](https://www.allsetlearning.com/) - Grammar reference

---

## 🔗 Important Links

- **GitHub:** https://github.com/natanvrn-dev/naedcchineselearn
- **Live Demo:** https://naedcchineselearn.vercel.app
- **Report Issues:** https://github.com/natanvrn-dev/naedcchineselearn/issues
- **Contribute:** See CONTRIBUTING.md

---

## 💬 Getting Help

1. **Check Documentation** - SETUP.md, DEPLOYMENT_GUIDE.md
2. **Search Issues** - GitHub Issues might have answer
3. **Create New Issue** - If problem not found
4. **Discussion Board** - For questions/ideas

---

## 🎉 Next Steps

1. ✅ **Setup:** Run `npm install` and `npm run dev`
2. 🎓 **Explore:** Visit `/learn` to start learning
3. 📖 **Learn:** Start with HSK 1
4. 🚀 **Deploy:** Follow DEPLOYMENT_GUIDE.md
5. 🤝 **Contribute:** Add more content via CONTRIBUTING.md

---

**Happy Learning! 学习快乐！**

*Last Updated: 2026-07-02*
*Version: 1.0.0*
