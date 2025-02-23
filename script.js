let menu = document.querySelector('.menu')
let listNav = document.querySelector('.listNav')

menu.addEventListener('click',() => {
    if(listNav.style.display === 'none'){
        listNav.style.display = 'block'
    } else {
        listNav.style.display = 'none'
    }
})


let sliderContainer = document.querySelector('.slider-container')
let next = document.querySelector('.next')
let back = document.querySelector('.back')



let position = 0; 


back.addEventListener('click', () => {
    if (position >= -41){
        position -= 41;
        sliderContainer.style.transition = 'transform 1s'
        sliderContainer.style.transform = `translateX(${position}vw)`
    }else{
        return;
    }
    
})

next.addEventListener('click', () => {
    if(position <= +41){
        position += 41;
        sliderContainer.style.transition = 'transform 1s'
        sliderContainer.style.transform = `translateX(${position}vw)`
    }else{
        return;
    }
    
})