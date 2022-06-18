const btnHome = document.querySelector('.home');
        const sectionHome = document.querySelector('#home');
        btnHome.addEventListener('click', function() {
            sectionHome.scrollIntoView({behavior:"smooth", blcok:"center"});
        })

const btnAbout = document.querySelector('.about');
        const sectionAbout = document.querySelector('#about');
        btnAbout.addEventListener('click', function() {
            sectionAbout.scrollIntoView({behavior:"smooth", blcok:"center"});
        })

const btnSkills = document.querySelector('.TEAM');
        const sectionSkills = document.querySelector('#TEAM');
        btnSkills.addEventListener('click', function() {
            sectionSkills.scrollIntoView({behavior:"smooth", blcok:"center"});
        })

const btnWorks = document.querySelector('.works');
        const sectionWorks = document.querySelector('#works');
        btnWorks.addEventListener('click', function() {
            sectionWorks.scrollIntoView({behavior:"smooth", blcok:"center"});
        })

const btnContact = document.querySelector('.contact');
        const sectionContact = document.querySelector('#contact');
        btnContact.addEventListener('click', function() {
            sectionContact.scrollIntoView({behavior:"smooth", blcok:"center"});
        })

const arrowUp = document.querySelector('.arrow-up')
        arrowUp.addEventListener('click', function() {
            sectionHome.scrollIntoView({behavior:"smooth", blcok:"center"});
        })

document.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                arrowUp.classList.add('show');
            } else {
                arrowUp.classList.remove('show');
            }
        })
init();
