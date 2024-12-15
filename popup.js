// 获取DOM元素
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// 从Chrome存储加载任务
let tasks = [];

// 加载任务
chrome.storage.sync.get(['tasks'], function(result) {
    tasks = result.tasks || [];
    renderTasks();
});

// 渲染任务列表
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
                 data-index="${index}">
                ${task.completed ? '<svg width="16" height="16" viewBox="0 0 16 16"><path fill="white" d="M6.5 12.5l-4-4 1.5-1.5 2.5 2.5 6-6 1.5 1.5z"/></svg>' : ''}
            </div>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" data-index="${index}">
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M12 4h-1V3c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v1H4c-.6 0-1 .4-1 1v1h10V5c0-.6-.4-1-1-1zM6 3h4v1H6V3z"/>
                    <path d="M12 6H4v7c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V6z"/>
                </svg>
            </button>
        `;
        
        taskList.appendChild(li);
    });
    
    // 保存到Chrome存储
    chrome.storage.sync.set({ tasks: tasks });
}

// 添加新任务
function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({
            text: text,
            completed: false,
            created: new Date().getTime()
        });
        taskInput.value = '';
        renderTasks();
    }
}

// 事件委托处理点击事件
document.addEventListener('click', function(e) {
    // 处理复选框点击
    if (e.target.closest('.task-checkbox')) {
        const index = parseInt(e.target.closest('.task-checkbox').dataset.index);
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }
    
    // 处理删除按钮点击
    if (e.target.closest('.delete-btn')) {
        const index = parseInt(e.target.closest('.delete-btn').dataset.index);
        tasks.splice(index, 1);
        renderTasks();
    }
});

// 事件监听
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
}); 