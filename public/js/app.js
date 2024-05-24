// ############ COLOR DEFINITION ############
const primaryColor = '#EE8A9B'

// ############ VARIABLE DEFINITION ###########

const card = document.getElementsByClassName('card');
const abano = document.getElementsByClassName('abano')
const lenco = document.getElementsByClassName('lenco')

const btn_todos = document.getElementById('todos')
const btn_lencos = document.getElementById('lencos')
const btn_abanos = document.getElementById('abanos')

const news = document.getElementById('news')
const newsContainer = document.getElementsByClassName('news-container')[0];

const theme = document.getElementById('theme')
var tema = 0;
// ############### EVENTS DEFINITION #################



// ************ FILTER START *******************

btn_todos.addEventListener('click', () => {

    btn_todos.style.color = '#EE8A9B';
    btn_lencos.style.color = '#000';
    btn_abanos.style.color = '#000';


    for (var i = 0; i <= card.length; i++) {
        card[i].style.transition = '0.5s ';
        card[i].style.display = "block";

        setTimeout(() => {

            for (var i = 0; i <= card.length; i++) {
                card[i].style.opacity = 1;
                card[i].style.transform = "scale(1)";
            }

        }, 750);

    }
})

btn_lencos.addEventListener('click', () => {

    btn_todos.style.color = '#000'
    btn_lencos.style.color = '#EE8A9B'
    btn_abanos.style.color = '#000'

    for (let i = 0; i < lenco.length; i++) {
        lenco[i].style.transition = '0.5s';
        lenco[i].style.display = 'block';

        setTimeout(() => {
            lenco[i].style.opacity = 1;
            lenco[i].style.transform = "scale(1)";

        }, 750);

    }

    for (let i = 0; i < abano.length; i++) {
        abano[i].style.transform = "scale(0.6)";
        abano[i].style.opacity = 0;

        setTimeout(() => {
            abano[i].style.display = 'none'
        }, 500);
    }
})

btn_abanos.addEventListener('click', () => {

    btn_todos.style.color = '#000'
    btn_lencos.style.color = '#000'
    btn_abanos.style.color = '#EE8A9B'

    for (let i = 0; i < abano.length; i++) {
        abano[i].style.transition = '0.5s '
        abano[i].style.display = 'block'

        setTimeout(() => {
            abano[i].style.opacity = 1;
            abano[i].style.transform = "scale(1)";
        }, 750);
    }

    for (let i = 0; i < lenco.length; i++) {
        lenco[i].style.transform = "scale(0.6)";
        lenco[i].style.opacity = 0;

        setTimeout(() => {
            lenco[i].style.display = 'none';
        }, 500);

    }
})

const verticalShow = document.getElementById('vertical-display')

verticalShow.addEventListener('click', () => {
    verticalShow.style.color = '#EE8A9B'
    horizontalShow.style.color = '#000'

    news.style.maxHeight = 'auto'


    for (let i = 0; i < card.length; i++) {
        card[i].style.minHeight = ' 360px'
        card[i].style.minWidth = ' 280px'
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

horizontalShow.addEventListener('click', () => {

    verticalShow.style.color = '#000'
    horizontalShow.style.color = '#EE8A9B'

    for (let i = 0; i < card.length; i++) {
        card[i].style.minHeight = ' 300px'
        card[i].style.minWidth = ' 220px'
        card[i].style.marginTop = ' 0'
        card[i].style.transition = ' 1s ease-in-out'
    }

    newsContainer.style.flexDirection = 'row'
    newsContainer.style.width = '100%'
    newsContainer.style.marginBotton = '0.5rem'

    setTimeout(() => {
        newsContainer.style.height = '340px'
    }, 750)

})

// ************ FILTER END *******************


// ************ PRELOADER *******************

const preloader = document.getElementsByClassName('preloader')

window.addEventListener('load', () => {

    setTimeout(() => {
        for (preload of preloader) {
            preload.style.display = 'none'
        }
    }, 2000)

})


// ************ THEME DEFINITION START *******************



theme.addEventListener('click', tehme1)


// ************ THEME DEFINITION END *******************



// ########## FUNCTIONS  ################

function tehme1() {
    const body = document.getElementsByTagName('body')[0];
    const headerH1 = document.querySelector('.hdr-content h1');
    const logoTheme = document.querySelector('.logo-theme');
    const filter = document.querySelectorAll('.filter button');
    const filterContainer = document.querySelectorAll('.filter')[0];
    const lencoShowCaer = document.querySelectorAll('.lencos-card img');

    body.style.background = 'linear-gradient(60deg, #31002b, #240120)';
    headerH1.style.color = '#fff';
    logoTheme.style.background = 'linear-gradient(60deg, #31002b, #240120)';
    logoTheme.style.boxShadow = 'none';

    for (let i = 0; i < filter.length; i++) {
        filter[i].style.color = 'white';
    }

    filterContainer.style.boxShadow = "1px 1px 10px #222";

    for (let i = 0; i < card.length; i++) {
        card[i].style.boxShadow = '3px 4px 10px #333';
    }






} // THEME1 End


function addHorizontalShow(verticalColor, horizontalColor) {
    verticalShow.style.color = verticalColor
    horizontalShow.style.color = horizontalColor

    for (let i = 0; i < card.length; i++) {
        card[i].style.minHeight = ' 300px'
        card[i].style.minWidth = ' 220px'
        card[i].style.marginTop = ' 0'
        card[i].style.transition = ' 1s ease-in-out'
    }

    newsContainer.style.flexDirection = 'row'
    newsContainer.style.width = '100%'
    newsContainer.style.marginBotton = '0.5rem'

    setTimeout(() => {
        newsContainer.style.height = '340px'
    }, 900)
}

// ########## PRELOADER  ################




/****** SLIDE BUNNER *****/
const banner_img1 = document.getElementById("banne_img1")
const banner_img2 = document.getElementById("banne_img2")

/**
 * Define o intervalo de tempo para a troca de imagens
 * neste caso esta com um intervalo de **/
setInterval(() => {

    if (banner_img1.style.display === "none") {

        banner_img2.style.opacity = 0  // Elimina a opacidade da imagem 2

        //Define um compasso de tempo de 8,1 segundos antes de comecar com a estilizacao
        setTimeout(() => {
            banner_img2.style.display = "none"      // Retira a renderizacao da imagem 2
            banner_img1.style.display = "block"     // Renderiza a imagem 1
        }, 810);

        //Define um compasso de tempo de 8,2 segundos antes de comecar com a estilizacao
        setTimeout(() => {
            banner_img1.style.opacity = 1       //Torna visivel a opacidade da imagem 2
        }, 820);


    } else {

        banner_img1.style.opacity = 0
        //Define um compasso de tempo de 8,1 segundos antes de comecar com a estilizacao
        setTimeout(() => {
            banner_img1.style.display = "none"      //Retira a renderizacao da imagem 1
            banner_img2.style.display = "block"     //Renderiza a imagem 2
        }, 810);

        //Define um compasso de tempo de 8,2 segundos antes de comecar com a estilizacao
        setTimeout(() => {
            banner_img2.style.opacity = 1       //Torna visivel a opacidade da imagem 2
        }, 820);
    }
}, 6000)


/**################# SWIPER SLIDE LENCOS ######################**/
var swiper = new Swiper(".abanoShow", {  
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        495: {
            slidesPerView: 3,
        },
        750: {
            slidesPerView: 4,
        },
    
    },
});


/**################# SWIPER SLIDE LENCOS ######################**/
var swiper = new Swiper(".lencoShow", {  
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        495: {
            slidesPerView: 3,
        },
        750: {
            slidesPerView: 4,
        },
      
    
    },
});




