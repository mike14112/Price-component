const checkBox = document.querySelector('.switch-input'),
      basicPrice = document.querySelector('.b-price'),
      professPrice = document.querySelector('.p-price'),
       masterPrice = document.querySelector('.m-price');


checkBox.addEventListener('click', ()=>{
  if(checkBox.checked) {
    basicPrice.textContent = 19.99
    professPrice.textContent = 24.99
     masterPrice.textContent = 39.99
  }else{
    basicPrice.textContent = 199.99 
    professPrice.textContent = 249.99 
     masterPrice.textContent = 399.99
  }
});
