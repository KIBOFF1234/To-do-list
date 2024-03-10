let todoList = JSON.parse(localStorage.getItem('todoListArray')) || [];
  
  renderTodoList()
  
  
  function addToDo() {
    
    const inputElem = document.querySelector('.js-todo-input');
      const name = inputElem.value;
    
    const inputDateElem = document.querySelector('.js-duedate-input');
      const dueDate = inputDateElem.value;
    
    if(name) {
     
    todoList.push({
      name, 
      dueDate 
    });
    
  
    localStorage.setItem('todoListArray', JSON.stringify(todoList));
  
    inputElem.value = '';
    inputDateElem.value= '';
    
    renderTodoList();
    }
  }
  
  
  function deleteList(i) {
    
    todoList.splice(i, 1);
    
    renderTodoList();
    
    localStorage.removeItem('todoListArray');
    
  }
  function renderTodoList() {
  
    let todoListHTML ='';
    
    todoList.forEach( (todoObject,i) => {
      
       const{name,dueDate} = todoObject
      
      let  html;
      if(name!= '') {
      
        html = `

        
        <div> ${name}</div> 
       <div>${dueDate}</div>
       <button class="del-btn js-delete-btn">delete</button>
       
        `;
       todoListHTML+= html;
     
    } 
    });

   
    
    
  
  document.querySelector('.js-display-result')
   .innerHTML = todoListHTML;
   
   document.querySelectorAll('.js-delete-btn')
    .forEach((deleteBtn,index) => {
       deleteBtn.addEventListener('click', () => {
          deleteList(index);
          console.log(deleteBtn);
       })
    });
    
    
  }