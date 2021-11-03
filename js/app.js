const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector('section');

const animatedProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = 
    (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight) ) * 100;
    let value = Math.floor(progressWidth)
    console.log(value)
    progressBar.style.width = value + '%'

    if(value < 0) {
        progressBar.style.width = '0%'
    }
}

window.addEventListener('scroll', animatedProgressBar)