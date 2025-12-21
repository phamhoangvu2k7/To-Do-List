require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const taskRoutes = require("./routes/task_route"); // Gọi file Route vào

const app = express();
const port = process.env.PORT || 3000;

// Cấu hình
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Sử dụng Route
app.use('/', taskRoutes);

app.listen(port, () => {
    console.log(`Server đang chạy tại: http://localhost:${port}`);
});