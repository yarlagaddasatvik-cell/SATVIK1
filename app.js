/**
 * TaskPulse — Modern Task Management Application
 * Pure Vanilla JavaScript (ES6+)
 */

// ==========================================
// Application State & Storage
// ==========================================
const STORAGE_KEY = 'taskpulse_tasks_v1';
const THEME_KEY = 'taskpulse_theme_v1';

const DEFAULT_TASKS = [
  {
    id: 'task-1',
    title: '✨ Welcome to TaskPulse! Try checking this off',
    category: 'Personal',
    priority: 'High',
    dueDate: new Date().toISOString().split('T')[0],
    completed: false,
    createdAt: Date.now() - 3600000 * 2
  },
  {
    id: 'task-2',
    title: '🚀 Build a stunning web app with HTML & CSS',
    category: 'Work',
    priority: 'High',
    dueDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    completed: true,
    createdAt: Date.now() - 3600000 * 24
  },
  {
    id: 'task-3',
    title: '📚 Read 20 pages of clean code principles',
    category: 'Study',
    priority: 'Medium',
    dueDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    completed: false,
    createdAt: Date.now() - 3600000 * 5
  },
  {
    id: 'task-4',
    title: '💧 Hydrate & do a 15-minute afternoon stretch',
    category: 'Health',
    priority: 'Low',
    dueDate: '',
    completed: false,
    createdAt: Date.now() - 3600000 * 1
  }
];

const MOTIVATIONAL_QUOTES = [
  "Small daily improvements over time lead to stunning results.",
  "Focus on being productive instead of busy.",
  "Your future is created by what you do today.",
  "One task at a time. You've got this!",
  "Great things are done by a series of small things brought together.",
  "Done is better than perfect. Keep up the momentum!"
];

let tasks = loadTasks();
let currentFilter = 'all';
let currentCategory = 'all';
let currentPriority = 'all';
let currentSort = 'created-desc';
let searchQuery = '';
let recentlyDeletedTask = null;
let undoTimeout = null;

// ==========================================
// DOM Elements
// ==========================================
const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title-input');
const taskCategorySelect = document.getElementById('task-category-select');
const taskPrioritySelect = document.getElementById('task-priority-select');
const taskDueDateInput = document.getElementById('task-due-date-input');

const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const emptyStateTitle = document.getElementById('empty-state-title');
const emptyStateSubtitle = document.getElementById('empty-state-subtitle');

const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const tabButtons = document.querySelectorAll('.tab-btn');
const filterCategory = document.getElementById('filter-category');
const filterPriority = document.getElementById('filter-priority');
const sortSelect = document.getElementById('sort-select');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

const statTotal = document.getElementById('stat-total');
const statPending = document.getElementById('stat-pending');
const statCompleted = document.getElementById('stat-completed');
const progressCircle = document.getElementById('progress-circle');
const progressPercentage = document.getElementById('progress-percentage');
const progressBar = document.getElementById('progress-bar');
const quoteText = document.getElementById('quote-text');
const currentDateEl = document.getElementById('current-date');
const themeToggleBtn = document.getElementById('theme-toggle');

const badgeAll = document.getElementById('badge-all');
const badgeActive = document.getElementById('badge-active');
const badgeCompleted = document.getElementById('badge-completed');

// Edit Modal
const editModal = document.getElementById('edit-modal');
const editForm = document.getElementById('edit-form');
const editTaskId = document.getElementById('edit-task-id');
const editTitleInput = document.getElementById('edit-title-input');
const editCategorySelect = document.getElementById('edit-category-select');
const editPrioritySelect = document.getElementById('edit-priority-select');
const editDueDateInput = document.getElementById('edit-due-date-input');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCancelBtn = document.getElementById('modal-cancel-btn');

const toastContainer = document.getElementById('toast-container');
const confettiCanvas = document.getElementById('confetti-canvas');

// ==========================================
// Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDateDisplay();
  setupEventListeners();
  render();
});

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function initDateDisplay() {
  const now = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
  if (currentDateEl) {
    currentDateEl.textContent = now.toLocaleDateString(undefined, options);
  }
}

// ==========================================
// Storage Functions
// ==========================================
function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_TASKS));
      return DEFAULT_TASKS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse tasks from localStorage', e);
    return DEFAULT_TASKS;
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Failed to save tasks to localStorage', e);
  }
}

// ==========================================
// Event Listeners
// ==========================================
function setupEventListeners() {
  // Add Task Form
  taskForm.addEventListener('submit', handleAddTask);

  // Theme Toggle
  themeToggleBtn.addEventListener('click', toggleTheme);

  // Status Tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    render();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    render();
  });

  // Dropdown Filters & Sorting
  filterCategory.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    render();
  });

  filterPriority.addEventListener('change', (e) => {
    currentPriority = e.target.value;
    render();
  });

  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    render();
  });

  // Clear Completed
  clearCompletedBtn.addEventListener('click', handleClearCompleted);

  // Edit Modal
  editForm.addEventListener('submit', handleSaveEdit);
  modalCloseBtn.addEventListener('click', closeModal);
  modalCancelBtn.addEventListener('click', closeModal);
  editModal.addEventListener('click', (e) => {
    if (e.target === editModal) closeModal();
  });

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && editModal.classList.contains('active')) {
      closeModal();
    }
  });
}

// ==========================================
// Core Operations: Add, Toggle, Edit, Delete
// ==========================================
function handleAddTask(e) {
  e.preventDefault();
  const title = taskTitleInput.value.trim();
  if (!title) return;

  const newTask = {
    id: 'task-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
    title: title,
    category: taskCategorySelect.value,
    priority: taskPrioritySelect.value,
    dueDate: taskDueDateInput.value,
    completed: false,
    createdAt: Date.now()
  };

  tasks.unshift(newTask);
  saveTasks();

  // Reset form
  taskTitleInput.value = '';
  taskDueDateInput.value = '';
  taskTitleInput.focus();

  showToast('Task added successfully!');
  render();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  task.completed = !task.completed;
  saveTasks();

  if (task.completed) {
    triggerConfettiBurst();
    showToast('Task completed! 🎉');
  }

  render();
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex(t => t.id === id);
  if (taskIndex === -1) return;

  recentlyDeletedTask = { task: tasks[taskIndex], index: taskIndex };
  tasks.splice(taskIndex, 1);
  saveTasks();

  showUndoToast('Task deleted', () => {
    if (recentlyDeletedTask) {
      tasks.splice(recentlyDeletedTask.index, 0, recentlyDeletedTask.task);
      saveTasks();
      recentlyDeletedTask = null;
      render();
      showToast('Task restored');
    }
  });

  render();
}

function openEditModal(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  editTaskId.value = task.id;
  editTitleInput.value = task.title;
  editCategorySelect.value = task.category;
  editPrioritySelect.value = task.priority;
  editDueDateInput.value = task.dueDate || '';

  editModal.classList.add('active');
  editModal.setAttribute('aria-hidden', 'false');
  editTitleInput.focus();
}

function closeModal() {
  editModal.classList.remove('active');
  editModal.setAttribute('aria-hidden', 'true');
}

function handleSaveEdit(e) {
  e.preventDefault();
  const id = editTaskId.value;
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  const title = editTitleInput.value.trim();
  if (!title) return;

  task.title = title;
  task.category = editCategorySelect.value;
  task.priority = editPrioritySelect.value;
  task.dueDate = editDueDateInput.value;

  saveTasks();
  closeModal();
  showToast('Task updated');
  render();
}

function handleClearCompleted() {
  const completedCount = tasks.filter(t => t.completed).length;
  if (completedCount === 0) {
    showToast('No completed tasks to clear');
    return;
  }

  if (confirm(`Are you sure you want to remove ${completedCount} completed task(s)?`)) {
    tasks = tasks.filter(t => !t.completed);
    saveTasks();
    showToast(`Removed ${completedCount} completed task(s)`);
    render();
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
}

// ==========================================
// Rendering & Filtering
// ==========================================
function getFilteredAndSortedTasks() {
  return tasks
    .filter(task => {
      // Status Filter
      if (currentFilter === 'active' && task.completed) return false;
      if (currentFilter === 'completed' && !task.completed) return false;

      // Category Filter
      if (currentCategory !== 'all' && task.category !== currentCategory) return false;

      // Priority Filter
      if (currentPriority !== 'all' && task.priority !== currentPriority) return false;

      // Search Query
      if (searchQuery && !task.title.toLowerCase().includes(searchQuery)) return false;

      return true;
    })
    .sort((a, b) => {
      if (currentSort === 'created-desc') return b.createdAt - a.createdAt;
      if (currentSort === 'created-asc') return a.createdAt - b.createdAt;
      if (currentSort === 'title-asc') return a.title.localeCompare(b.title);
      if (currentSort === 'due-asc') {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      if (currentSort === 'priority-desc') {
        const pMap = { High: 3, Medium: 2, Low: 1 };
        return (pMap[b.priority] || 0) - (pMap[a.priority] || 0);
      }
      return 0;
    });
}

function render() {
  const filteredTasks = getFilteredAndSortedTasks();
  updateStats();
  renderBadges();

  if (filteredTasks.length === 0) {
    taskList.innerHTML = '';
    emptyState.style.display = 'flex';
    if (searchQuery) {
      emptyStateTitle.textContent = 'No matching tasks found';
      emptyStateSubtitle.textContent = `No results found for "${searchQuery}". Try a different keyword.`;
    } else if (currentFilter === 'completed') {
      emptyStateTitle.textContent = 'No completed tasks yet';
      emptyStateSubtitle.textContent = 'Check off your tasks as you complete them!';
    } else if (currentFilter === 'active') {
      emptyStateTitle.textContent = 'All caught up!';
      emptyStateSubtitle.textContent = 'Awesome job! You have no active pending tasks.';
    } else {
      emptyStateTitle.textContent = 'No tasks in this view';
      emptyStateSubtitle.textContent = 'Add a new task above to get started!';
    }
  } else {
    emptyState.style.display = 'none';
    taskList.innerHTML = filteredTasks.map(task => createTaskHTML(task)).join('');
    bindTaskEvents();
  }
}

function createTaskHTML(task) {
  const dueBadgeHTML = formatDueDateBadge(task.dueDate);

  return `
    <li class="task-item priority-${escapeHTML(task.priority)} ${task.completed ? 'completed' : ''}" data-id="${task.id}">
      <label class="checkbox-container" title="${task.completed ? 'Mark as active' : 'Mark as completed'}">
        <div class="custom-checkbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </label>

      <div class="task-info">
        <span class="task-title">${escapeHTML(task.title)}</span>
        <div class="task-meta">
          <span class="badge-tag category-badge category-${escapeHTML(task.category)}">${escapeHTML(task.category)}</span>
          <span class="badge-tag priority-badge ${escapeHTML(task.priority)}">${escapeHTML(task.priority)}</span>
          ${dueBadgeHTML}
        </div>
      </div>

      <div class="task-actions">
        <button class="action-btn edit-btn" title="Edit Task" aria-label="Edit task">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
        <button class="action-btn delete-btn" title="Delete Task" aria-label="Delete task">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </li>
  `;
}

function bindTaskEvents() {
  document.querySelectorAll('.task-item').forEach(item => {
    const id = item.dataset.id;
    const checkbox = item.querySelector('.checkbox-container');
    const editBtn = item.querySelector('.edit-btn');
    const deleteBtn = item.querySelector('.delete-btn');

    checkbox.addEventListener('click', () => toggleTask(id));
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEditModal(id);
    });
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(id);
    });
  });
}

function formatDueDateBadge(dateString) {
  if (!dateString) return '';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [y, m, d] = dateString.split('-').map(Number);
  const dueDate = new Date(y, m - 1, d);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

  let label = '';
  let badgeClass = '';

  if (diffDays < 0) {
    label = `Overdue (${Math.abs(diffDays)}d)`;
    badgeClass = 'overdue';
  } else if (diffDays === 0) {
    label = 'Due Today';
    badgeClass = 'due-today';
  } else if (diffDays === 1) {
    label = 'Due Tomorrow';
  } else {
    const formatted = dueDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    label = `Due ${formatted}`;
  }

  return `
    <span class="badge-tag due-badge ${badgeClass}" title="Due date: ${dateString}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      ${label}
    </span>
  `;
}

function renderBadges() {
  const total = tasks.length;
  const active = tasks.filter(t => !t.completed).length;
  const completed = tasks.filter(t => t.completed).length;

  badgeAll.textContent = total;
  badgeActive.textContent = active;
  badgeCompleted.textContent = completed;
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  statTotal.textContent = total;
  statPending.textContent = pending;
  statCompleted.textContent = completed;

  // Percentage & Circular Progress
  progressPercentage.textContent = `${percentage}%`;
  progressBar.style.width = `${percentage}%`;

  // Circumference = 2 * PI * 40 ≈ 251.2
  const circumference = 251.2;
  const offset = circumference - (percentage / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;

  // Dynamic Quote
  if (total > 0 && percentage === 100) {
    quoteText.textContent = "🏆 Masterful! All tasks completed today!";
  } else if (percentage >= 50) {
    quoteText.textContent = "🔥 Over halfway there! Keep crushing your goals!";
  } else {
    const randomQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
    quoteText.textContent = randomQuote;
  }
}

// ==========================================
// Toast Notification System
// ==========================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${escapeHTML(message)}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 2500);
}

function showUndoToast(message, onUndo) {
  if (undoTimeout) clearTimeout(undoTimeout);

  const existingToasts = toastContainer.querySelectorAll('.toast');
  existingToasts.forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span>${escapeHTML(message)}</span>
    <button class="btn btn-secondary-sm" id="undo-btn" style="margin-left: 0.5rem; padding: 0.2rem 0.6rem;">Undo</button>
  `;
  toastContainer.appendChild(toast);

  const undoBtn = toast.querySelector('#undo-btn');
  undoBtn.addEventListener('click', () => {
    onUndo();
    toast.remove();
  });

  undoTimeout = setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 4500);
}

// ==========================================
// Confetti Burst System (HTML5 Canvas)
// ==========================================
function triggerConfettiBurst() {
  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#6366f1', '#a855f7', '#ec4899', '#22c55e', '#eab308', '#06b6d4', '#f97316'];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
      y: window.innerHeight * 0.4 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.8) * 10 - 2,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  let animationFrame;
  function updateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vRot;
      p.opacity -= 0.016;

      if (p.opacity > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  updateConfetti();
}

// ==========================================
// Utilities
// ==========================================
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
