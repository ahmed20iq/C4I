let slide_btn = document.querySelector('.btn-slide');
let list = document.querySelector('.navbar ul');

slide_btn.addEventListener('click', ()=>{
    list.classList.toggle('active')
})