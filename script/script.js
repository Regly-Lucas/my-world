let select = document.querySelector('#select');
let btn = document.querySelector('#btn')
select.addEventListener('change', () => {
    let img = document.querySelector('#img')
    if (select.value === '144p') {
        img.src = './assets/earth-144p.webp'
    } else if (select.value === '480p') {
        img.src = './assets/earth-480p.png'
    } else if (select.value === '720p') {
        img.src = './assets/earth-720p.png'
    } else if (select.value === '1080p') {
        img.src = './assets/earth-1080p.png'
    } else {
        img.src = './assets/earth-4K.jpg'
    }
})

btn.addEventListener('click', () => {
    document.querySelector('.modal').classList.toggle('none')
    document.querySelector('h1').classList.toggle('none')
})