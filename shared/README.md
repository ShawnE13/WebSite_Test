# Shared Types Documentation

This directory contains TypeScript interfaces that define the structure of data used across the project. These interfaces ensure type safety and consistency when handling data related to employment positions, news articles, and staff information.

## Types Overview

- **Position**: Defines the structure for employment position data.
- **News**: Defines the structure for news article data.
- **Staff**: Defines the structure for staff information data.

## Usage

These types can be imported into other parts of the application to enforce type checking and improve code quality. For example:

```typescript
import { Position } from '../shared/types/Position';
```

## Contribution

When adding new types or modifying existing ones, please ensure to update the relevant documentation and maintain consistency across the project.