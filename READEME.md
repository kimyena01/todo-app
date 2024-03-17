# 기본구조 설정
npx create-react-app client
mkdir server
touch .gitignore
    server/node_modules
    client/node_modules

cd server
npm init -y
npm install express ejs
npm install mysql
npm install sequelize sequelize-cli mysql2
npx sequelize init

# REST API 구조
```
GET /todos              show all todos
POST / todo             create a new todo
PATCH /todo/:todoId     edit a specific todo
DELETE /todo/:todoId    remove a specific todo
```
