# Country Info App

## Project Installation

### Prerequisites

1. **Node.js:**

- Minimum version: v16.13.0 or higher.
- You can download Node.js from nodejs.org.

2. **npm (Node Package Manager):**

- Comes with Node.js. Make sure you have version v8.1.0 or higher.
- You can check your installed version with:

  npm -v

### Installation Steps

- Clone the repository:

  https://github.com/SantiagoPuertas4/DevelopsTodayTestTask.git

## Frontend

- Navigate to the project directory.

- Install the dependencies:

  npm install

- Create a `.env` file in the root of the project with the following variable:

  VITE_BACKEND_URL=http://127.0.0.1:4000/api/v1

### Development Mode

- To start the server in development mode:

  npm run dev

- The application will be available at http://localhost:3000.

## Backend

- Navigate to the project directory.

- Install the dependencies:

  npm install

- Create a `.env` file in the root of the project with the following variables:

  COUNTRY_NAME_BASE_URL=https://date.nager.at/api/v3
  COUNTRY_INFO_BASE_URL=https://countriesnow.space/api/v0.1/countries

### Development Mode

- To start the server in development mode:

  npm run dev

- The application will be available at http://localhost:4000.

## API Documentation

The table below details the endpoints of each available service:

Authentication:
Main route: `/api/v1/country`

| Method | Endpoint | Description                                                          | Body                                                                                                                                                                                  |
| ------ | -------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/all`   | Returns a list of all registered countries                           | `{countrie: objectsArray, message: string}`                                                                                                                                           |
| GET    | `/:id`   | Returns the information of the country corresponding to the given ID | `{countryInfo: {commonName: string, officialName: string, countryCode: string, region: string, borders: objectsArray}, population: objectsArray, flagImage: string, message: string}` |
