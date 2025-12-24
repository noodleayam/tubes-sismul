# ReadX - Interactive Article Reading Platform

ReadX is a modern web application that transforms traditional article reading into an immersive, comic-book style experience with parallax scrolling and beautiful animations.

## Features

- 🎨 **Comic-Book Style Reading**: Articles are presented in an engaging, visual format
- 🌊 **Parallax Scrolling**: Smooth, multi-layered animations that create depth
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- ✨ **Interactive Navigation**: Panel-based navigation for easy article browsing
- 👤 **User Profiles**: Personalized experience with favorite articles and settings
- ✍️ **Article Creation**: Easy-to-use interface for creating your own articles
- 🎭 **Beautiful UI**: Pixel-perfect design with modern gradients and animations

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **Animations**: Framer Motion & CSS animations
- **UI Components**: Custom components + Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser to the local development URL

### Building for Production

```bash
pnpm build
```

This will create optimized production builds for both client and server.

## Project Structure

```
client/
  ├── components/       # Reusable UI components
  │   ├── Header.tsx   # Global navigation header
  │   └── ui/          # UI primitives (buttons, cards, etc.)
  ├── pages/           # Page components
  │   ├── Index.tsx    # Homepage with hero and features
  │   ├── Articles.tsx # Article listing page
  │   ├── ArticleReader.tsx # Comic-book style article reader
  │   ├── Profile.tsx  # User profile with favorites
  │   ├── CreateArticle.tsx # Article creation form
  │   ├── SignUp.tsx   # User registration
  │   ├── Login.tsx    # User authentication
  │   └── Placeholder.tsx # Placeholder for future pages
  ├── hooks/           # Custom React hooks
  │   └── useParallax.ts # Parallax scrolling utilities
  ├── global.css       # Global styles and design tokens
  └── App.tsx          # Main app component with routing
```

## Design System

### Colors

- **Brand Blue**: `#0084FF` - Primary actions and links
- **Brand Purple**: `#874CF9` - Secondary elements
- **Brand Magenta**: `#FF00CC` - Accent color
- **Brand Pink**: `#FF00E1` - Highlights

### Gradients

- **Hero**: `linear-gradient(253deg, #FF00CC 0%, #5100FF 99.29%)`
- **Secondary**: `linear-gradient(255deg, #FF00E1 0%, #874CF9 101.2%)`
- **Button**: `linear-gradient(90deg, #874CF9 0%, #0084FF 100%)`

### Typography

- **Kokoro**: Headings and brand text
- **Urbanist**: Body text and UI elements
- **Caveat**: Handwritten style for welcoming messages

## Routes

- `/` - Homepage
- `/articles` - Browse all articles
- `/article/:id` - Read a specific article
- `/create` - Create new article
- `/profile` - User profile and settings
- `/signup` - Create account
- `/login` - Sign in
- `/category` - Browse by category (coming soon)
- `/help` - Help center (coming soon)
- `/about` - About ReadX (coming soon)

## Deployment

The app is ready to deploy to platforms like:

- Netlify (recommended) - Connect via MCP
- Vercel
- AWS Amplify
- Any static hosting service

For Netlify deployment, use the Netlify MCP integration available in Builder.io.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ using Builder.io
