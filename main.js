const menu = document.getElementById('menu')
const menuButtons = document.getElementById('menuButtons')
const visible = document.querySelector('.visible')


// menu buttton
menu.addEventListener('click', () => {
    setTimeout(() => {
        menuButtons.classList.toggle('visible')

    }, 200);

})

// menu.addEventListener('click', () => {
//     if (menuButtons.classList.contains('visible')) {
//         menuButtons.classList.remove('visible')
//     } else {
//         menuButtons.classList.add('visible')
//     }
// })

// buttons for scroll down selected section
const buttonOne = document.getElementById('header__buttons-one')
const buttonTwo = document.getElementById('header__buttons-two')
const buttonThree = document.getElementById('header__buttons-three')


buttonOne.addEventListener('click', () => {
    const southLakesSection = document.getElementById('southLake');
    if (southLakesSection) {
        southLakesSection.scrollIntoView({ behavior: 'smooth' })
    }
})

buttonTwo.addEventListener('click', () => {
    const middleLakeSection = document.getElementById('middleLake')

    if (middleLakeSection) {
        middleLakeSection.scrollIntoView({ behavior: 'smooth' })
    }
})

buttonThree.addEventListener('click', () => {
    const upperLakeSection = document.getElementById('upperLake')

    if (upperLakeSection) {
        upperLakeSection.scrollIntoView({ behavior: 'smooth' })
    }
})
