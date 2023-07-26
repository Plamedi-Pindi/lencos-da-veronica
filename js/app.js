const card = document.getElementsByClassName('card');
const abano = document.getElementsByClassName('abano')
const lenco = document.getElementsByClassName('lenco')

const btn_todos = document.getElementById('todos')
const btn_lencos = document.getElementById('lencos')
const btn_abanos = document.getElementById('abanos')

btn_todos.addEventListener('click',()=>{

    btn_todos.style.color = '#EE8A9B'

    for(var i=0; i<=card.length; i++){
        card[i].style.transition = '1s '
        card[i].style.display= 'block'
    }
})

btn_lencos.addEventListener('click',()=>{

    btn_todos.style.color = '#EE8A9B'
    btn_todos.style.color = '#EE8A9B'
    for(let i=0; i<lenco.length; i++){

        lenco[i].style.translet = '1s '
        lenco[i].style.display = 'block'
    }

    for(let i=0; i<abano.length; i++){
        
        abano[i].style.display = 'none'
    }
})

btn_abanos.addEventListener('click',()=>{
    for(let i=0; i<abano.length; i++){
        abano[i].style.transition = '1s '
        abano[i].style.display = 'block'
    }

    for(let i=0; i<lenco.length; i++){
        lenco[i].style.transition = '1s'
        lenco[i].style.display = 'none'

    }
})


// const pessoas = [
//     {
//         id:1,
//         nome:'plano'
//     },
//     {
//         id:2,
//         nome:'Nzola'
//     },
//     {
//         id:3,
//         nome:'Pindi'
//     }
// ]

// const pessoa = pessoas.map((registro)=>{
//     var {id,nome} = registro
//     return (id)
// })
// const filter = pessoa.filter((id)=>{
//     return id == 1
// })
// console.log(filter)


