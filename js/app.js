const card = document.getElementsByClassName('card');
const abano = document.getElementsByClassName('abano')
const lenco = document.getElementsByClassName('lenco')

const btn_todos = document.getElementById('todos')
const btn_lencos = document.getElementById('lencos')
const btn_abanos = document.getElementById('abanos')

const news = document.getElementById('news')
const newsContainer = document.getElementsByClassName('news-container')[0];

btn_todos.addEventListener('click',()=>{

    btn_todos.style.color = '#EE8A9B'
    btn_lencos.style.color = '#000'
    btn_abanos.style.color = '#000'
    

    for(var i=0; i<=card.length; i++){
        card[i].style.transition = '1s '
        card[i].style.display= 'block'
    }
})

btn_lencos.addEventListener('click',()=>{

    btn_todos.style.color = '#000'
    btn_lencos.style.color = '#EE8A9B'
    btn_abanos.style.color = '#000'

    for(let i=0; i<lenco.length; i++){

        lenco[i].style.translet = '1s '
        lenco[i].style.display = 'block'
    }

    for(let i=0; i<abano.length; i++){
        
        abano[i].style.display = 'none'
    }
})

btn_abanos.addEventListener('click',()=>{

    btn_todos.style.color = '#000'
    btn_lencos.style.color = '#000'
    btn_abanos.style.color = '#EE8A9B'

    for(let i=0; i<abano.length; i++){
        abano[i].style.transition = '1s '
        abano[i].style.display = 'block'
    }

    for(let i=0; i<lenco.length; i++){
        lenco[i].style.transition = '1s'
        lenco[i].style.display = 'none'

    }
})


// ############## NEWS PRODUCT DISPLAY MODE ##################

 const verticalShow = document.getElementById('vertical-display')

 verticalShow.addEventListener('click', ()=>{
    verticalShow.style.color = '#EE8A9B'
    horizontalShow.style.color = '#000'

    news.style.maxHeight = 'auto'

    
    for(let i=0; i< card.length; i++){
        card[i].style.minHeight = ' 360px'
        card[i].style.minWidth = ' 300px'
        card[i].style.marginTop = ' 1rem'
        card[i].style.transition = ' 1s ease-in-out'
    }

    newsContainer.style.flexDirection = 'column'
    newsContainer.style.height = '400px'
    newsContainer.style.width = '90%'
    newsContainer.style.marginTop = '2rem'
    newsContainer.style.margin = '0 auto'
    newsContainer.style.marginBotton = '2rem'


 })

 const horizontalShow = document.getElementById('horizontal-display')

 horizontalShow.addEventListener('click', ()=>{

    verticalShow.style.color = '#000'
    horizontalShow.style.color = '#EE8A9B'

    for(let i=0; i< card.length; i++){
        card[i].style.minHeight = ' 300px'
        card[i].style.minWidth = ' 220px'
        card[i].style.marginTop = ' 0'
        card[i].style.transition = ' 1s ease-in-out'
    }

    newsContainer.style.flexDirection = 'row'
    newsContainer.style.width = '100%'
    newsContainer.style.marginBotton = '0.5rem'

    setTimeout(()=>{
        newsContainer.style.height = '340px'
    }, 900)



 })