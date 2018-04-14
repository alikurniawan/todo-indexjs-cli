function add() {
  const input = objInput.value;
  todoList.push(input);

  setLocalStorage(todoList)

  console.log(todoList);
  //------
  showListed();
  //---
  objInput.value = "";
}

function emptyFilled() {
  let spaceLength = "";
  let spaceValue = spaceLength.length > 0;

  if (objInput.value == "") {
    alert("Please Fill the form")
    exit();
  } else if (objInput.value == spaceValue) {
    alert("Only Space is not permited, Please Fill the form")
    exit();
  } else {
    console.log("Gud");
  }
}

function hapusList(index) {
  // console.log("hapuuuuuuss", index);

  todoList.splice(index, 1);
  //------
  showListed();
  //------
}

function editTodo(index) {
  let result = prompt("Masukkn data");
  todoList[index] = result;
  //------
  showListed();
  //------
}

function searchTodo() {
  console.log(searchInput.value);

  //---------------
  var text = searchInput.value.toLowerCase() // Get the text and set to lowercase
  let find = todoList.filter(todo => todo.toLowerCase().includes(text)); // Filter todo based on textbox
  alert(find.join(', ')) // Alert the result

}

function showListed() {
  //------
  let innerElement = "";
  todoList.map((todo, index) => innerElement = innerElement + `<li class="list-group-item animated headShake">${todo}
  <button onclick="editTodo(${index})" >e</button>
  <button onclick="hapusList(${index})" >x</button></li>`);

  document.getElementById("showList").innerHTML = innerElement;
  //------
}

function getLocalStorage() {
  if (localStorage.todoStorage) {
    todoList = JSON.parse(localStorage.todoStorage); //Merubah String ke Array
    // return todoList;
    console.log(todoList);
  } else {
    localStorage.todoStorage = "[]";
    todoList = [];
  }
}

function setLocalStorage(array) {
  localStorage.todoStorage = JSON.stringify(array);
}

function allProses() {
  emptyFilled();
  add();
}

function clearStorage(){
  localStorage.clear();
  showList.innerHTML = "";
}

btnProses.addEventListener("click", allProses);
btnClear.addEventListener("click", clearStorage);

getLocalStorage();
showListed();
