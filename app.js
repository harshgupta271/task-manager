const addtasks=document.queryselector('.add');
const list=document.queryselector('tasks');
const search=document.querySelector('.search input');

const generate=todo=>{
  const html=
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${tasks}</span>
       <i class="far fa-trash-alt delete"></i>;
  list.innerHTML+=html;
};
addtasks.addEventListener('submit',e=>{
  e,preventdefault();
  const task=addtask.add.value.trim();
  generate(task);
  addtasks.reset();
};
    list.addEventListener('click',e=>{
                         if(e.target.classList.contains('delete')){
e.target.parentElement.remove();
});
const filter= (term)=>{
Array.from(list.children)
.filter((container)=>!container.textContent.toLowerCase().includes(term))
.forEach((container)=>container.classList.add('filtered'));

Array.from(list.children)
.filter((container)=>container.textContent.toLowerCase().includes(term))
.forEach((container)=>container.classList.remove('filtered'));  

};
search.addEventListener('keyup',()=>{
    const term =search.value.trim().toLowerCase();
    filter(term);
});
