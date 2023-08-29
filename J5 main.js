const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(nome) {
    console.log('Oi ' + nome)
    console.log('Bem-vindo ao Robotron 2000')
}

dizOi("Pedro") 
function mudaCores(elementos){
    var cores = elementos.getAttribute("[data-cor]");
    var tipoElemento = elementos.getAttribute("[data-tipo]");
  }
  var livros = [
    {titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco:31.92
},
    {titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco:21.89},

    {titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco:31.92},
]