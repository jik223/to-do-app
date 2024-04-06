const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.keycode === 13 ? addList(e) : null);
})

function addList(e){
    const notComplete = document.querySelector('.notComplete');
    const complete = document.querySelector('.Complete');

    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');


    const newLi = document.createElement('li');
    checkBtn.innerHTML = '<i class="fas fa-check-square"></i';
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        notComplete.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        complete.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });
}