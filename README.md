# Kitalulus Technical Test

### Installation

Requires [Node.js](https://nodejs.org/) v12+ & PostgreSQL to run.

```sh
$ cd kitalulus-technical-test
$ npm install
$ npm run dev
```

### Docker

- Build Image
```sh
cd kitalulus-technical-test
docker build -t fahmisyaifudin/kitalulus-test-api .
```

- Run Image

```sh
docker run -d -p 8080:8080 fahmisyaifudin/kitalulus-test-api
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8080
```

#### Command
```sh
npm start // Start server
npm run dev // Start server in development
npm run makemigration // Automatically generate migration file based on model
npm run migrate // Migrate into database
npm run undomigrate // Undo last migration
npm run seedall // Run seeder
```

### Environtment Variable

```sh
NODE_ENV=development
PORTS_API=8080

POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=kitalulusdb
POSTGRES_HOST=localhost
PORTS_DB=5432

```

### API Documentation

Visit : [http://localhost:8080/api-docs](http://localhost:8080/api-docs)