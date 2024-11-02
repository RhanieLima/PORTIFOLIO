
let modoescuro = false




const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting === true) {

            entry.target.classList.add('animation')

        } else {
            entry.target.classList.remove('animation')
        }

    })

})

const animation2 = document.querySelectorAll('.animation')

animation2.forEach((Element) => myObserver.observe(Element))

atualizarModo()

function atualizarModo() {

    if (modoescuro) {

        const chk = document.getElementById('chk')
        const skills = document.getElementById('Skills')
        const skillbar = document.getElementById('SkillBar')
    
        const barra1 = document.getElementById('Barra1')
        const barra2 = document.getElementById('Barra2')
        const barra3 = document.getElementById('Barra3')
        const barra4 = document.getElementById('Barra4')
        const barra5 = document.getElementById('Barra5')
    
        const text_skill = document.getElementById('skillsText')
    
    
        document.body.classList.toggle('dark')
        skills.classList.toggle('dark2')
        skillbar.classList.toggle('dark')
    
        barra1.classList.toggle('dark')
        barra2.classList.toggle('dark')
        barra3.classList.toggle('dark')
        barra4.classList.toggle('dark')
        barra5.classList.toggle('dark')
    
        document.getElementById('GridProjetos').classList.toggle('dark')
        document.getElementById('ProjetoText').classList.toggle('dark')
    
        text_skill.classList.toggle('dark')
        document.getElementById('linkToTop').classList.toggle('dark')
    
        document.getElementById('about').classList.toggle('dark')
        document.getElementById('contato').classList.toggle('dark')
        document.getElementById('curriculo').classList.toggle('dark')
    
    }
    

}

chk.addEventListener('change', () => {
    modoescuro = true
    atualizarModo()
})