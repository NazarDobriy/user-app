# Instructions for launching the project

- add configuration .env file with data

```bash
PORT=5000
POSTGRES_HOST=postgres
POSTGRES_USER=postgres
POSTGRES_DB=user
POSTGRES_PASSWORD=root
POSTGRES_PORT=5432
SECRET="just-secret-key"
EXPIRE_JWT=86400
```

- run the application with docker

```bash
$ docker-compose up --build
```

- access the application at the following link

```bash
http://localhost:5000/api
```
