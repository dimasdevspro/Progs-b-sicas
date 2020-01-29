const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// E a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

if (sexo == 'F', idade >= 30 || sexo == 'M', idade >= 35) {
    if (sexo == 'F', idade+contribuicao >= 85 || sexo == 'M', idade+contribuicao >= 95 ) {
        console.log (`${nome}, você pode se aposentar.`)
    }else {
        console.log (`${nome}, você ainda não pode se aposentar.`)
    }
} else {
        console.log (`${nome}, você ainda não pode se aposentar`)
    }

