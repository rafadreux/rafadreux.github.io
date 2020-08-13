var acad = document.querySelector("#acad-educ");
var item1 = document.querySelector("#item1");
var item3 = document.querySelector("#item3");
var logo = document.querySelector('.logo');
var sci = document.querySelector("#scipub");

item1.addEventListener('click', () => {
    acad.classList.remove("hide");
    sci.classList.add('hide')
})

item3.addEventListener('click',()=>{
    sci.classList.remove('hide');
    acad.classList.add('hide')
})

logo.addEventListener('click',()=>{
    acad.classList.add("hide");
    sci.classList.add('hide')
})

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      acad.classList.add("hide");
      sci.classList.add("hide")
    }
  })