## CSCE 41333: Web API - CRUD Example (NodeJS/Express/MySQL2)

Create MySQL Database
```
sudo mysql < webapicrud.sql
```
### REST API Endpoints

| HTTP Method | Endpoint | Description | Payload Body (JSON) |
| ----------- | -------- | ----------- | ------------------- |
| GET | /api/users | **R**etrieve all users | None |
| GET | /api/users/:id | **R**etrieve single user | None |
| POST | /api/users | **C**reate user | "{ ""username"", ""lastname"", ""firstname"", ""passwd"", ""email"", ""urole"" }" |
| PUT | /api/users/:id | **U**pdate user | "{ ""username"", ""lastname"", ""firstname"", ""passwd"", ""email"", ""urole"" }" |
| DELETE | /api/users/:id | **D**elete user | None |
