const listUl = document.querySelector('.list-container');
const inputEl = document.getElementById('todo-input');
function addTodo(){

if(inputEl.value === ''){
  alert('Please Enter to-do...')
}else{
  let listItems = document.createElement('li');
  listItems.innerHTML = inputEl.value;
  listUl.appendChild(listItems);
  let span = document.createElement('span');
  span.innerHTML = '\u00d7';
  listItems.appendChild(span);
}
inputEl.value = '';
saveData()
}


function saveData(){
  localStorage.setItem('data', listUl.innerHTML)
}
function showData(){
  listUl.innerHTML = localStorage.getItem('data')
}
showData()

listUl.addEventListener('click', (event) =>{
  if(event.target.tagName === 'LI'){
    event.target.classList.toggle('checked');
    saveData()
  }else if(event.target.tagName === 'SPAN'){
    event.target.parentElement.remove();
    saveData()
  }
})

