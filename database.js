// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//     // Nếu có biến môi trường DATABASE_URL (trên Render/Neon) thì dùng
//     connectionString: process.env.DATABASE_URL,

//     // Cấu hình SSL: Bắt buộc phải có khi kết nối với Neon
//     // Nếu đang chạy trên Cloud (có DATABASE_URL) thì bật SSL, ngược lại (localhost) thì tắt
//     ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
// });

// module.exports = pool;

const { Pool } = require('pg');
require('dotenv').config();

// Kiểm tra xem có phải môi trường Production (Render) không
const isProduction = process.env.NODE_ENV === 'production';

// Nếu là Production thì MẶC ĐỊNH BẬT SSL.
// Nếu là Local thì MẶC ĐỊNH TẮT SSL (trừ khi bạn cấu hình khác).
const connectionConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: isProduction ? { rejectUnauthorized: false } : false
};

const pool = new Pool(connectionConfig);

module.exports = pool;