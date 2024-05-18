function escrever() {
    function escrevendo (elemento){
        const text =  elemento.textContent.split('');
        elemento.textContent = "E"
        setTimeout(() => {
            for(let i = 0; i < text.length ;i++){
                setTimeout(() => elemento.textContent += text[i],200 * i)
            }
        },1500);
        setTimeout(() => escrevendo(titulo),14000)
        elemento.textContent = ""
    }
    const titulo = document.querySelector(".name")
    escrevendo(titulo)

    return () => clearInterval();
    
}

escrever()








