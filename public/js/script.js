document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const logo = document.getElementById('logo');
    const close = document.getElementById('close-icon');
    const infoBtn = document.getElementById('info-btn');
    const servicesBtn = document.getElementById('services-btn');
    const dateBtn = document.getElementById('date-btn');



    menuIcon.addEventListener('click', () => {
        menu.classList.add('flex');
        menu.classList.remove('hidden');
        menuIcon.classList.remove('flex');
        menuIcon.classList.add('hidden');
        logo.classList.remove('flex');
        logo.classList.add('hidden')
    })

    close.addEventListener('click', () => {
        menu.classList.remove('flex');
        menu.classList.add('hidden');
        logo.classList.add('flex');
        logo.classList.remove('hidden')
        menuIcon.classList.add('flex')
        menuIcon.classList.remove('hidden')
    })

    infoBtn.addEventListener('click', () => {
        menu.classList.remove('flex');
        menu.classList.add('hidden');
        logo.classList.add('flex');
        logo.classList.remove('hidden')
        menuIcon.classList.add('flex')
        menuIcon.classList.remove('hidden')
    })

    servicesBtn.addEventListener('click', () => {
        menu.classList.remove('flex');
        menu.classList.add('hidden');
        logo.classList.add('flex');
        logo.classList.remove('hidden')
        menuIcon.classList.add('flex')
        menuIcon.classList.remove('hidden')
    })

    dateBtn.addEventListener('click', () => {
        menu.classList.remove('flex');
        menu.classList.add('hidden');
        logo.classList.add('flex');
        logo.classList.remove('hidden')
        menuIcon.classList.add('flex')
        menuIcon.classList.remove('hidden')
    })
})


