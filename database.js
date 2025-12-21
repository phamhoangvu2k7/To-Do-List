const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    // Nếu có biến môi trường DATABASE_URL (trên Render/Neon) thì dùng
    connectionString: process.env.DATABASE_URL,

    // Cấu hình SSL: Bắt buộc phải có khi kết nối với Neon
    // Nếu đang chạy trên Cloud (có DATABASE_URL) thì bật SSL, ngược lại (localhost) thì tắt
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

module.exports = pool;