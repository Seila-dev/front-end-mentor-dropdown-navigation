const botaoDoMenuBurguer = document.querySelectorAll('.menu-burguer-btn');
const sessaoMenuBurguer = document.querySelector('.openBurguerSection');
const active = document.querySelector('.aberto');

const featuresBtn = document.querySelectorAll('.features');
const featuresSection = document.querySelectorAll('.features-section');
const companyBtn = document.querySelectorAll('.company');
const companySection = document.querySelectorAll('.company-section');

botaoDoMenuBurguer.forEach(item => {
    item.addEventListener('click', () => {
        if(sessaoMenuBurguer.classList.contains('aberto')){
            sessaoMenuBurguer.classList.remove('aberto');
            lightbox.classList.remove('aberto');
        }else{
            sessaoMenuBurguer.classList.add('aberto');
            lightbox.classList.add('aberto');
        }
    })
})

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

featuresBtn.forEach(item => {
    item.addEventListener('click', () => {
        featuresSection.forEach(featureSec => {
            featureSec.classList.toggle('aberto');
            if(featureSec.classList.contains('aberto')){
                companySection.forEach(section => {
                    section.classList.remove('aberto');
                })
            }
        })
    })
})

companyBtn.forEach(item => {
    item.addEventListener('click', () => {
        companySection.forEach(companySec => {
            companySec.classList.toggle('aberto');
            if(companySec.classList.contains('aberto')){
                featuresSection.forEach(section => {
                    section.classList.remove('aberto');
                })
            }
        })
    })
})