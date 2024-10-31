

const myObserver = new IntersectionObserver( (entries) =>{
 entries.forEach( (entry) => {

    if (entry.isIntersecting === true) {

        entry.target.classList.add('animation')
        
    } else {
        entry.target.classList.remove('animation')
    }

 })

})

const animation2 = document.querySelectorAll('.animation')

animation2.forEach( (Element) => myObserver.observe(Element))