const pool = require("../database");

const getAllTasks = async () => {
  const query = 'SELECT * FROM tasks ORDER BY created_at DESC';
  const result = await pool.query(query);
  return result.rows; // Trả về danh sách các dòng dữ liệu
};

module.exports = { getAllTasks };