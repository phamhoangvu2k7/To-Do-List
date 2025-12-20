const Task = require("../model/task_model");

module.exports.index = async (req, res) => {
    try {
        const tasks = await Task.getAllTasks();
        res.render('index', {tasks: tasks});
    } catch (error) {
        console.log("Lỗi rồi:", error);
        res.send("Có lỗi xảy ra khi tải trang web");
    }
}