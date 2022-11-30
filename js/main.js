const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const allNavItems = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')
const slides = document.querySelectorAll('.slide')

const counterItems  = document.querySelectorAll('.cards__card-counter')
const counterBox = document.querySelector('.cards__box')

const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', ()=> {
            navMobile.classList.remove('nav-mobile--active')
        })
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear()
    footerYear.innerText = year
}

function showSlides() {
    slides.forEach(slides => {
        slides.classList.remove('active')
        this.classList.add('active')
    })
}



const options = {
    rootMargin: '-100px'
}

const startCounting = entry => {

    if (entry[0].isIntersecting) {
        counterItems.forEach(counter => {

            const updateCounter = () => {
                const finalNumber = counter.getAttribute('data-number')
                const value = parseInt(counter.textContent)

                const speed = finalNumber / 200

                if(value < finalNumber) {
                    counter.textContent = `${Math.floor(value + speed)}`
                    setTimeout(updateCounter, 1)
                } else {
                    counter.textContent = finalNumber
                }
            }

            updateCounter();
        })
    }
}

const observer = new IntersectionObserver(startCounting, options)
observer.observe(counterBox)



const sectionToObserve = document.querySelector('.info')
const iconToShow = document.querySelector('.info__bg-icon')
const opt = {
    rootMargin: '-50px',
    threshold: 0.5
}

const showAnimation = entry => {
    entry.forEach(entry => { 
        if (entry.isIntersecting) {iconToShow.classList.add('info__bg-icon--show')}
    })
}

const obs = new IntersectionObserver(showAnimation, opt)
obs.observe(sectionToObserve)




navBtn.addEventListener('click', handleNav)
handleCurrentYear()
slides.forEach(slides => slides.addEventListener('click', showSlides))



