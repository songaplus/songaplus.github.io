const loginForm = document.getElementById('login-form');
const loginId = document.querySelector('#login-form input');
const greeTing = document.querySelector("#greeting");
const HIDDEN_CLASSNAME= "hidden";
const NAME_KEY = 'username';
//const savedName = localStorage.getItem(NAME_KEY);
let username ='';

const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');
const TODOS_KEY = 'todos';
const savedTodos = localStorage.getItem(TODOS_KEY);
let todos = [];

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginId.value;
  localStorage.setItem(NAME_KEY, username);
  console.log('NAME_KEY : ', loginId.value);
  console.log('username : ', username);
  //loginName = loginId.value;
  paintGreetings(username);
}
function paintGreetings(username){
  greeting.innerText =`HELLO, ${username}!`;//span에 txt로 넣고 loginId 삭제하기
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
function handleTodoSumit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj ={
    text: newTodo,
    id:Date.now(),
  }
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}
function paintTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.innerText = newTodo.text;
  li.id = newTodo.id;
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}
function deleteTodo(event) {
  //const li = event.target;
  const li = event.target.parentElement;
  todos = todos.filter((todo) => todo.id !== parseInt(li.id) );
  li.remove();
  console.log("after deleteTodo() todos: ", todos);
  saveTodos();
}
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); //뭐든 string으로 변경하기 위한 함수
}
loginForm.addEventListener('submit', onLoginSubmit);
todoForm.addEventListener('submit', handleTodoSumit);
console.log(savedTodos);
if (savedTodos!==null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

const savedName = localStorage.getItem(NAME_KEY);
console.log("savedName : ", savedName);
if (savedName===null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  console.log("null savedName: ", savedName);
  console.log("null NAME_KEY: ", NAME_KEY);
}else{
  // show the greeting
  console.log("savedName is not null!!! ");
  greeting.classList.remove(HIDDEN_CLASSNAME);
  console.log("$$savedName: ", savedName);
  console.log("$$NAME_KEY: ", NAME_KEY);
  paintGreetings(savedName);
}