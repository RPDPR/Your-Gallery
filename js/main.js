
const card_img = document.querySelectorAll('.card-img')
const popup = document.querySelector('.popup')
const popup_area = popup.querySelector('.popup-area')
const popup_body = popup.querySelector('.popup-body')
const img = popup_body.querySelector('img')
const left_arrow = popup.querySelector('.left-arrow')
const right_arrow = popup.querySelector('.right-arrow')
let check = 0
const arr = 
['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg',
'img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg',
'img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg',
'img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg']


card_img.forEach((el) => {
    el.addEventListener('click', (e) => {
        const src = el.getAttribute('src')
        img.src = src
        popup.style.display = 'block';
    })
})


left_arrow.addEventListener('click', (e) => {
    for(let el of arr){
        if (img.src.endsWith(el) && arr.indexOf(el) > 0){
            img.src = img.src.replace(el, arr[arr.indexOf(el)-1])
            break
        }
    }
})

right_arrow.addEventListener('click', (e) => {
    for(let el of arr){
        if (img.src.endsWith(el) && arr.indexOf(el) < 15){
            img.src = img.src.replace(el, arr[arr.indexOf(el)+1])
            break
        }
    }
})

popup_area.addEventListener('click', (el) => {

    if(window.innerWidth >= 1280){
        popup_body.style.position = 'static'
        popup_body.style.width = '900px'
        popup_body.style.height = '700px'
        popup_body.style.top = '0'
        popup_body.style.left = '0'
        popup_body.style.transform = 'translate(0%, 0%)'

        popup_body.style.cursor = 'zoom-in'
    }

    popup.style.display = 'none';

    left_arrow.style.display = 'block'
    right_arrow.style.display = 'block'
})

popup_body.addEventListener('click', (el) => {

    if(check == 0 && window.innerWidth >= 1280){
        console.log(window.innerWidth)
        popup_body.style.position = 'absolute'
        popup_body.style.width = '1200px'
        popup_body.style.height = '800px'
        popup_body.style.top = '50%'
        popup_body.style.left = '50%'
        popup_body.style.transform = 'translate(-50%, -50%)'

        popup_body.style.cursor = 'zoom-out'

        left_arrow.style.display = 'none'
        right_arrow.style.display = 'none'

        check = 1
    }
    else if(window.innerWidth >= 1280){

        popup_body.style.position = 'static'
        popup_body.style.width = '900px'
        popup_body.style.height = '700px'
        popup_body.style.top = '0'
        popup_body.style.left = '0'
        popup_body.style.transform = 'translate(0%, 0%)'

        popup_body.style.cursor = 'zoom-in'

        left_arrow.style.display = 'block'
        right_arrow.style.display = 'block'

        check = 0
    }

})

