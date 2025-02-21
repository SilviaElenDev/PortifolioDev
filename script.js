let menu = document.querySelector('.menu')
let listNav = document.querySelector('.listNav')

menu.addEventListener('click',() => {
    if(listNav.style.display === 'none'){
        listNav.style.display = 'block'
    } else {
        listNav.style.display = 'none'
    }
})
