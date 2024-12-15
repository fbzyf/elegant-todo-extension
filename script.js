// 获取DOM元素
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// 从本地存储加载任务
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 渲染任务列表
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
                 onclick="toggleTask(${index})">
                ${task.completed ? '<svg width="16" height="16" viewBox="0 0 16 16"><path fill="white" d="M6.5 12.5l-4-4 1.5-1.5 2.5 2.5 6-6 1.5 1.5z"/></svg>' : ''}
            </div>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M12 4h-1V3c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v1H4c-.6 0-1 .4-1 1v1h10V5c0-.6-.4-1-1-1zM6 3h4v1H6V3z"/>
                    <path d="M12 6H4v7c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V6z"/>
                </svg>
            </button>
        `;
        
        taskList.appendChild(li);
    });
    
    // 保存到本地存储
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 添加新任务
function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({
            text: text,
            completed: false
        });
        taskInput.value = '';
        renderTasks();
    }
}

// 切换任务状态
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// 删除任务
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// 事件监听
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// 初始化渲染
renderTasks(); 