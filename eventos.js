const div = document.querySelector(".div-button")
const boton = document.querySelector(".button-saludar")

div.addEventListener('click', function(e) {
    if(e.target === div){
    alert('Hola! Soy el div')
 }
});

boton.addEventListener('click', function(){
    alert('Hola!');
})
