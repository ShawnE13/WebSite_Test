# Website Project

This project is a web application consisting of an admin site and a client site, designed to manage and display employment positions, news articles, and staff information. The application connects to a SQL Server database for data storage and management.

## Project Structure

The project is organized into the following main directories:

- **admin**: Contains the admin site for managing employment positions, news, and staff information.
  - **src**: Source code for the admin site.
    - **components**: Reusable components for the admin site.
    - **pages**: Pages for the admin site.
    - **styles**: CSS styles for the admin site.
    - **utils**: Utility functions for API calls.
    - **index.tsx**: Entry point for the admin application.
  - **package.json**: NPM configuration for the admin site.
  - **tsconfig.json**: TypeScript configuration for the admin site.
  - **README.md**: Documentation for the admin site.

- **client**: Contains the client site for displaying information to users.
  - **src**: Source code for the client site.
    - **components**: Reusable components for the client site.
    - **pages**: Pages for the client site.
    - **styles**: CSS styles for the client site.
    - **utils**: Utility functions for API calls.
    - **index.tsx**: Entry point for the client application.
  - **package.json**: NPM configuration for the client site.
  - **tsconfig.json**: TypeScript configuration for the client site.
  - **README.md**: Documentation for the client site.

- **server**: Contains the backend server for handling API requests and database interactions.
  - **src**: Source code for the server.
    - **controllers**: Functions for handling requests related to positions, news, and staff.
    - **models**: Data models for positions, news, and staff.
    - **routes**: API routes for handling requests.
    - **utils**: Database connection and utility functions.
    - **index.ts**: Entry point for the server application.
  - **package.json**: NPM configuration for the server.
  - **tsconfig.json**: TypeScript configuration for the server.
  - **README.md**: Documentation for the server.

- **shared**: Contains shared types used across the application.
  - **types**: Type definitions for positions, news, and staff.
  - **README.md**: Documentation for shared types.

## Features

- Admin site for managing employment positions, news articles, and staff information.
- Client site for displaying employment positions, news articles, and staff information to users.
- SQL Server database integration for data storage.
- Web accessibility standards compliance (WCAG) for inclusivity.

## Deployment

The application is designed to be deployable on the GoDaddy Windows Hosting platform. Ensure that the hosting environment supports Node.js and SQL Server.

## Getting Started

1. Clone the repository.
2. Navigate to the `admin`, `client`, and `server` directories and run `npm install` to install dependencies.
3. Configure the database connection in the server's `utils/db.ts` file.
4. Start the server and client applications.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.