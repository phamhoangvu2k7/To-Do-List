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

module.exports.create = async (req, res) => {
    res.render('create');
}

module.exports.createPost = async (req, res) => {
    try {
        const { title, description, is_important } = req.body;
        const isImportantValue = is_important === 'on' ? true : false;

        await Task.createTask({
            title: title,
            description: description,
            is_important: isImportantValue
        });

        res.redirect('/');
        
    } catch (error) {
        console.log("Lỗi khi lưu:", error);
        res.send("Lỗi không lưu được!");
    }
}

module.exports.detail = async (req, res) => {
    const task = await Task.getTaskById(req.params.taskId, req.params.status);
    res.render("detail", {
        task: task
    })
}