   let numeroTotalDeAlunos = Math.floor(Math.random()*100)
    // conferir o número de alunos
      console.log("O número total de alunos é: " + numeroTotalDeAlunos)
    // let listaDeAlunos = ["joãozinho", "jorginho", "jacanzinho"] caso eu fosse fazer através da lista e verifica-la no for através do .length

 for(let i = 0;i<=numeroTotalDeAlunos;i++){
    if(i == 0) {
        console.log(" ZERO " + i)
    }
    else if(i % 2 == 0) {
        console.log(" PAR " + i)
    }
    else
    {
        console.log(" ÍMPAR " + i) 
    }
}