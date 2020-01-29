const usuarios = [
    { nome: 'Dimas', tecnologias: ['HTML', 'CSS']},
    { nome: 'Carlos', tecnologias: ['Python', 'CSS']},
    { nome: 'Sara', tecnologias: ['Ruby', 'Node.js']}
]

    for (let usuario of usuarios) {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(',')}`)
    }
    


