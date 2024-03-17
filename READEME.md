# 기본구조 설정
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
npm install cors
npm install -g nodemon

npx create-react-app client
cd client
npm start


# REST API 구조
```
GET /todos              show all todos
POST / todo             create a new todo
PATCH /todo/:todoId     edit a specific todo
DELETE /todo/:todoId    remove a specific todo
```

git remote set-url origin https://kimyena01@github.com/kimyena01/todo-app.git