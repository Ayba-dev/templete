# Modular React TypeScript Project with Vite

A modern, modular React application built with TypeScript, Vite, Redux Toolkit, and Ant Design.

## 🚀 Features

- ⚡️ **Fast Development**: Built with Vite for optimal development experience
- 🛠 **TypeScript**: Full TypeScript support for better type safety
- 📱 **Responsive Design**: Mobile-first approach with Ant Design
- 🔄 **State Management**: Redux Toolkit for predictable state management
- 🌐 **Internationalization**: i18n support for multiple languages
- 🧪 **Testing**: Vitest and Testing Library for comprehensive testing
- 🎨 **Styling**: Tailwind CSS and Ant Design for beautiful UI
- 🔒 **Security**: Built-in security features and best practices
- 🐳 **Docker Support**: Containerized deployment
- 📦 **Modular Architecture**: Clean and maintainable code structure

## 📁 Project Structure

```
├── src/
│   ├── app/           # Application entry point and routing
│   ├── modules/       # Feature modules
│   ├── pages/         # Page components
│   ├── shared/        # Shared components and utilities
│   └── @types/        # TypeScript type definitions
├── config/            # Configuration files
├── public/            # Static assets
├── tests/             # Test files
├── scripts/           # Build and utility scripts
└── infra/             # Infrastructure and deployment files
```

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **UI Library**: Ant Design
- **State Management**: Redux Toolkit
- **Testing**: Vitest, Testing Library
- **Styling**: Tailwind CSS, Ant Design
- **Internationalization**: i18next
- **Code Quality**: ESLint, Prettier, Husky
- **Containerization**: Docker

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd modular-antd-vite-rtk
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
```

### Building for Production

```bash
yarn build
# or
npm run build
```

### Running Tests

```bash
yarn test
# or
npm run test
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=your_api_url
VITE_APP_TITLE=your_app_title
```

### Vite Configuration

The project uses a modular configuration approach in the `config/` directory:

- `buildOptions.ts`: Build configuration
- `buildDefine.ts`: Global variables
- `buildPlugins.ts`: Vite plugins
- `buildResolve.ts`: Path aliases
- `buildServer.ts`: Development server configuration

## 🧪 Testing

The project uses Vitest and Testing Library for testing. Test files are located in the `tests/` directory.

### Running Tests

```bash
yarn test
# or
npm run test
```

### Test Coverage

```bash
yarn test:coverage
# or
npm run test:coverage
```

## 🐳 Docker Deployment

The project includes a Dockerfile for containerized deployment.

### Building Docker Image

```bash
docker build -t your-image-name .
```

### Running Docker Container

```bash
docker run -p 3000:3000 your-image-name
```

## 📚 Documentation

- [Project Structure](./readme/PROJECT_STRUCTURE.md)
- [Architecture](./readme/ARCHITECTURE.md)
- [Testing](./readme/TESTING.md)
- [Deployment](./readme/DEPLOYMENT.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vitest](https://vitest.dev/)
