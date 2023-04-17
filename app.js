const addtasks=document.querySelector('.add')
const list=document.querySelector('.tasks');
const search=document.querySelector('.search input');
const generate= task =>
{
  const html= `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
       <i class="far fa-trash-alt delete"></i>
       </li>`
       ;
  list.innerHTML += html
};
addtasks.addEventListener('submit', e=>{
  e.preventDefault();
  const task =addtasks.add.value.trim();
  if(task.length){
  generate(task);
  addtasks.reset();
  }
  
});

list.addEventListener('click',e =>{
 if(e.target.classList.contains('delete')){
e.target.parentElement.remove();
}});
const filter= (term)=>{
Array.from(list.children)
.filter((tasks)=>!tasks.textContent.toLowerCase().includes(term))
.forEach((tasks)=>tasks.classList.add('filtered'));

Array.from(list.children)
.filter((tasks) =>tasks.textContent.toLowerCase().includes(term))
.forEach((tasks) =>tasks.classList.remove('filtered'));  

};
search.addEventListener('keyup',()=>{
    const term =search.value.trim().toLowerCase();
    filter(term);
});
