const inputNewTaks = document.querySelector('.newTaks')
const addTasks = document.querySelector('.addTasks')
const ulToDoList = document.querySelector('.toDoList')



addTasks.addEventListener('click', () => {

  const tasks = inputNewTaks.value
  if (!tasks) return
  createTask(tasks)
})

inputNewTaks.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    const tasks = inputNewTaks.value
    if (!tasks) return
    createTask(tasks)
  }
})

document.addEventListener('click', (e) => {
  const el = e.target
  if (el.classList.contains('deleteTask')) {
    el.parentElement.remove()
    saveTasks()

  }
})


const createTask = text => {
  const li = createLi()
  li.innerText += text
  createButton(li)
  ulToDoList.appendChild(li)
  clearInput()
  saveTasks()
};


const createLi = () => {
  const li = document.createElement('li')
  return li
};


const createButton = (li) => {
  li.innerText += ' '
  const button = document.createElement('button')
  button.innerText = 'Deletar'
  button.setAttribute('class', 'deleteTask')
  li.appendChild(button)

};


const clearInput = () => {
  inputNewTaks.value = ''
  inputNewTaks.focus()
}

const saveTasks = () => {
  const liTasks = ulToDoList.querySelectorAll('li')
  const listInTasks = []


  for (let text of liTasks) {
    let textLiTask = text.innerText
    textLiTask = textLiTask.replace('Deletar', '').trim()
    listInTasks.push(textLiTask)
  }


  transformJSONString(listInTasks)

};


const transformJSONString = listTasks => {

  const tasksJSON = JSON.stringify(listTasks)
  localStorage.setItem('tasks', tasksJSON)
};

const addTasksSaves = () => {
  const tasks = localStorage.getItem('tasks')
  const listInTasks = JSON.parse(tasks)

  for (let valueTasks of listInTasks) {
    createTask(valueTasks)
  }
};

addTasksSaves()