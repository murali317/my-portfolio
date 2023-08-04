let todos = document.querySelector('.todos');
let addForm = document.querySelector('.add');
let search = document.querySelector('.search input');

let generateTodo = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                  </li>`
                  todos.innerHTML+=html
}

// ADDING TODOS ----------------------------

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const val = addForm.add_name.value.trim();
    // console.log(val);
    if (val.length){
        generateTodo(val);
        addForm.reset()
    }
})

// DELETING TODOS ------------------------

todos.addEventListener('click',e=>{
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

// SEARCHING TODOS ------------------------------

const filteredTodos = (term) => {
    Array.from(todos.children)
        .filter(todo=>!todo.textContent.toLowerCase().includes(term))
        .forEach(todo=>todo.classList.add('filtered'))

    Array.from(todos.children)
        .filter(todo=> todo.textContent.toLowerCase().includes(term))
        .forEach(todo=> todo.classList.remove('filtered'))
}

search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filteredTodos(term);
})