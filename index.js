const alunosDaTurmaA = [

    {
        nome:"Mayk",
        nota: 9.8
    
    },
    
    {
        nome: "Dimas",
        nota: 2
    
    },
    
    {
        nome: "Fulano",
        nota: 2
    
    }
]

const alunosDaTurmaB = [

    {
        nome:"Cleiton",
        nota: 10
    
    },
    
    {
        nome: "Robson",
        nota: 8.8
    
    },
    
    {
        nome: "Siclano",
        nota: 10
    
    }
]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log (`A Media das turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log (`A média da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')
