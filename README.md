# Challenge-NestJs

## Database

This project uses PostgreSQL, you need to install and create a database and run the file called dbSQL.sql which is in the root of the project to create those tables.

## Docker

To run the database you need to have docker and execute the next command at cmd/bash to create the image of PostgreSQL

```cmd
docker compose up
```

## Installation

To install de dependencies of node you have to run the next command at cmd/bash.

```cmd
npm i
```

## Running the app

To run the app you have to execute one of the next command at cmd/bash.

```bash
# development
npm run start

# watch mode
$ npm run start:dev
```

The APP will run at http://localhost:3002

Here are some wallet addresses to check out the app, I took from the Transactions API because I couldn't find the API to get wallets, so if you use some of these you should try the full app.

- 0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a
- 0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae
- 0x63a9975ba31b0b9626b34300f7f627147df1f526
- 0x198ef1ec325a96cc354c7266a038be8b5c558f67
