// Исправление кода

// const image = new Image();
// image.src = 'https://placehold.co/600x400'
// console.log(image.width)

// Изображение асинхронно загружается по ссылке с placehold.co
// В изначальном коде изображение не успевало загрузиться
// Чтобы исправить код, нужно выполнить вывод ширины в консоль после того, как сработает событие загрузки
// Для этого можно, например, навесить слушатель на событие load

const image = new Image();
image.src = 'https://placehold.co/600x400'
image.addEventListener('load', () => {
    console.log(image.width)
})

// Код, при запуске которого на www.psu.ru в консоль выводятся названия факультетов из меню факультетов

const faculties = document.querySelectorAll('.item-235 > ul > li > a')
faculties.forEach(faculty => console.log(faculty.innerHTML))

// Код, при запуске которого на www.psu.ru формируется список названий факультетов из меню факультетов

const faculties = document.querySelectorAll('.item-235 > ul > li > a')
const list = [];
faculties.forEach(faculty => list.push(faculty.innerHTML))