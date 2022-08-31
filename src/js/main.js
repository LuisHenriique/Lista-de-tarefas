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
  button.innerText = 'Delete'
  button.setAttribute('class', 'deleteTask')
  li.appendChild(button)

};


const clearInput = () => {
  inputNewTaks.value = ''
  inputNewTaks.focus()
}

const saveTasks = () => {

}