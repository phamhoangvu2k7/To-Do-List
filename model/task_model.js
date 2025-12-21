const pool = require("../database");

const getAllTasks = async () => {
  const query = 'SELECT * FROM tasks ORDER BY created_at DESC';
  const result = await pool.query(query);
  return result.rows; // Trả về danh sách các dòng dữ liệu
};

const createTask = async (data) => {
    const query = `
        INSERT INTO tasks (title, description, is_important) 
        VALUES ($1, $2, $3)
        RETURNING *
    `;
    // $1, $2, $3 sẽ lấy giá trị từ mảng values bên dưới
    const values = [data.title, data.description, data.is_important];
    
    return await pool.query(query, values);
};

const getTaskById = async (id) => {
    const query = "SELECT * FROM tasks WHERE id = $1 AND status = 'pending'";
    const result = await pool.query(query, [id]);
    return result.rows[0]; // Chỉ lấy dòng đầu tiên (vì id là duy nhất)
};

module.exports = { getAllTasks, createTask, getTaskById };