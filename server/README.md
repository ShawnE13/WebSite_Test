# Website Project

This project is a web application consisting of an admin site and a client site, both of which connect to a SQL Server database to manage employment positions, news articles, and staff information. The project is designed to be deployed on the GoDaddy Windows Hosting platform and adheres to web accessibility standards (WCAG).

## Project Structure

- **admin/**: Contains the source code and assets for the admin site.
- **client/**: Contains the source code and assets for the client site.
- **server/**: Contains the backend code, including controllers, models, and routes for handling API requests.
- **shared/**: Contains shared types/interfaces used across the admin and client sites.

## Getting Started

### Prerequisites

- Node.js
- TypeScript
- SQL Server

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the server directory and install dependencies:
   ```
   cd server
   npm install
   ```

3. Navigate to the admin directory and install dependencies:
   ```
   cd ../admin
   npm install
   ```

4. Navigate to the client directory and install dependencies:
   ```
   cd ../client
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the admin site:
   ```
   cd ../admin
   npm start
   ```

3. Start the client site:
   ```
   cd ../client
   npm start
   ```

### Database Configuration

Ensure that the SQL Server database is set up and configured correctly. Update the database connection settings in `server/src/utils/db.ts` as needed.

### Accessibility

This project follows WCAG guidelines to ensure inclusivity. Please refer to the documentation for specific accessibility features implemented.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.