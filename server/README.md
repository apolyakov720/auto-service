Сервер:
- Node.js
- Mongo database

Необходимо установить MongoDB и желательно клиент для него.
Настройки для подключения к БД берутся из config/default.json.

Пример запроса для авторизации:
curl -X POST http://localhost:9090/api/v1/login -H "Content-type: application/json" -d "{\"login\": \"client\", \"password\": 12345}"