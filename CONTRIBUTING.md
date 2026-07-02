# Contributing to NAED Chinese Learn

Terima kasih telah berminat untuk berkontribusi pada platform pembelajaran Bahasa Mandarin kami!

## Bagaimana Cara Berkontribusi

### 1. Report Bugs

Jika menemukan bug, buat issue dengan detail:
- Deskripsi bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (jika perlu)

### 2. Suggest Features

Ide fitur baru? Buat discussion atau issue dengan:
- Fitur yang diinginkan
- Use case/alasan
- Mockups atau wireframes (opsional)

### 3. Kontribusi Code

#### Setup Development Environment

```bash
# Clone repository
git clone https://github.com/natanvrn-dev/naedcchineselearn.git
cd naedcchineselearn

# Install dependencies
npm install

# Create development branch
git checkout -b feature/your-feature-name

# Start development server
npm run dev
```

#### Code Standards

- **TypeScript:** Gunakan untuk type safety
- **Styling:** Tailwind CSS
- **Components:** Functional components dengan hooks
- **Naming:** camelCase untuk variables/functions, PascalCase untuk components

#### Commit Messages

```bash
# Format: [Type]: Brief description

# Examples:
git commit -m "feat: Add new vocabulary search feature"
git commit -m "fix: Fix flashcard animation bug"
git commit -m "docs: Update HSK 1 content"
git commit -m "refactor: Improve ProgressTracker component"
git commit -m "test: Add unit tests for Quiz component"

# Types: feat, fix, docs, refactor, test, style, perf
```

#### Pull Request Process

1. **Update main branch:**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push to GitHub:**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request:**
   - Provide clear description
   - Link related issues
   - Add screenshots untuk UI changes
   - Ensure all tests pass

4. **Code Review:**
   - Respond to feedback
   - Make requested changes
   - Re-request review

## Development Guidelines

### Project Structure

```
src/
├── app/              # Next.js pages
├── components/       # React components
├── data/             # Content data
├── lib/              # Utilities
├── styles/           # Global styles
└── types/            # TypeScript definitions
```

### Adding New HSK Level

1. **Create data file:**
   ```typescript
   src/data/hsk{N}-content.ts
   ```

2. **Add to constants:**
   ```typescript
   src/lib/constants.ts
   ```

3. **Create page:**
   ```typescript
   src/app/learn/hsk{N}/page.tsx
   ```

4. **Add tests**

### Component Best Practices

```typescript
// Use TypeScript interfaces
interface ComponentProps {
  title: string;
  onComplete?: () => void;
}

// Use functional components
export const MyComponent: React.FC<ComponentProps> = ({
  title,
  onComplete,
}) => {
  // Component logic
};
```

### Performance

- Lazy load components dengan `dynamic()`
- Optimize images dengan `next/image`
- Use `React.memo()` untuk expensive components
- Implement code splitting

### Testing

```bash
# Run tests
npm test

# Add tests for new features
# File: __tests__/MyComponent.test.tsx
```

## Content Guidelines

### Kosakata Baru

1. Verifikasi pronunciation
2. Tambahkan contoh kalimat (minimal 2)
3. Include stroke count dan radical
4. Add translations yang accurate

### Contoh Kalimat

- Natural dan practical
- Sesuai dengan level HSK
- Include English translation

## Code Review Checklist

- [ ] Code follows style guidelines
- [ ] No console errors/warnings
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No hardcoded values
- [ ] Performance optimized
- [ ] Mobile responsive

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion)

## Questions?

Buat discussion atau tanya di GitHub Issues dengan tag `question`.

---

**Thank you for contributing! 🙏**
