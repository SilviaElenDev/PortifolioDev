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
let sliderBox = document.querySelector('.slider-box')
let next = document.querySelector('.next')
let back = document.querySelector('.back')



var position = 0;

back.addEventListener('click', () => {
    
    let width = sliderBox.offsetWidth;
    if (position >= -width){
        position -= width;
        sliderContainer.style.transition = 'transform 1s'
        sliderContainer.style.transform = `translateX(${position}px)`
    }else{
        return;
    }
    
})

next.addEventListener('click', () => {

    let width = sliderBox.offsetWidth;
    if(position <= width){
        position += width;
        sliderContainer.style.transition = 'transform 1s'
        sliderContainer.style.transform = `translateX(${position}px)`
    }else{
        return;
    }
})