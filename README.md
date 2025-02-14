# Personal Portfolio - Chaitanya Thombare

A modern, responsive personal portfolio website showcasing my professional skills, education, and achievements with enhanced interactive design.

## 🚀 Features

- React.js frontend with TypeScript
- Tailwind CSS styling
- Dark/light mode toggle
- Responsive design
- Education timeline section
- Dynamic section animations
- PostgreSQL database integration
- Contact form with email notifications

## 🛠️ Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Drizzle
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form, Zod

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ChaituThombare/Personal-Portfolio.git
cd Personal-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
# Create a PostgreSQL database
createdb portfolio_db

# Create .env file in root directory with:
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_db"
GMAIL_APP_PASSWORD="your_gmail_app_password"  # Optional for email functionality
```

4. Initialize the database schema:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:5000](http://localhost:5000) in your browser.

## 🎨 Project Structure

```
├── client/              # Frontend React application
│   ├── public/         # Static assets
│   └── src/            # Source files
│       ├── components/ # React components
│       ├── pages/      # Page components
│       └── lib/        # Utility functions
├── server/             # Backend Express server
│   ├── services/       # Business logic
│   └── routes/         # API routes
└── shared/             # Shared types and schemas
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/ChaituThombare/Personal-Portfolio/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👤 Contact

- GitHub: [@ChaituThombare](https://github.com/ChaituThombare)
- LinkedIn: [Chaitanya Thombare](https://www.linkedin.com/in/chaitannya-thombare-438b92253)
- Email: chaitannyathombare@gmail.com
