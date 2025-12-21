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

const updateTask = async (id, data) => {
    // 1. Xử lý checkbox (Nếu tick là 'on' -> true, không thì false)
    const is_important = data.is_important === 'on' ? true : false;

    // 2. Câu lệnh SQL
    // Chú ý đoạn: updated_at = NOW() -> Tự động cập nhật giờ sửa
    const query = `
        UPDATE tasks 
        SET title = $1, description = $2, is_important = $3, updated_at = NOW()
        WHERE id = $4
        RETURNING *
    `;
    
    // Thứ tự biến phải khớp với $1, $2, $3, $4
    const values = [data.title, data.description, is_important, id];
    
    const result = await pool.query(query, values);
    return result.rows[0];
};

const getTaskById = async (id) => {
    const query = "SELECT * FROM tasks WHERE id = $1 AND status = 'pending'";
    const result = await pool.query(query, [id]);
    return result.rows[0]; // Chỉ lấy dòng đầu tiên (vì id là duy nhất)
};

module.exports = { getAllTasks, createTask, getTaskById, updateTask };