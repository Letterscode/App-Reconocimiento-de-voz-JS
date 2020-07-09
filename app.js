const boton = document.querySelector('.hablar');
const conten = document.querySelector('.contenido');

const ReconocerVoz = window.SpeechRecognition || window.webkitSpeechRecognition;
const reconocimiento = new ReconocerVoz();
reconocimiento.onstart = function(){
    console.log('El Microfono esta activo');
}

reconocimiento.onresult = function(event){
    const current = event.resultIndex;

    const transcribir = event.results[current][0].transcript;

    conten.textContent = transcribir;

};


boton.addEventListener('click',()=>{
    reconocimiento.start();


});

