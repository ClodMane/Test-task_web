//Обработка кликов
function clickHandler(element) {
    if (element.id === 'current-status') {
        element.innerHTML = element.innerHTML === "Работаю" ? "Не работаю" : "Работаю"
    }
    else if (element.id === 'next') {
        changeDate('next')
    }
    else if (element.id === 'prev') {
        changeDate('prev')
    }
    else {
        console.log(element.id)
    }

}
//Слайдер с датами
function changeDate(type) {
    let dates = ['Январь 2021 г.', 'Февраль 2021 г.', 'Март 2021 г.', 'Апрель 2021 г.',
        'Май 2021 г.', 'Июнь 2021 г.', 'Июль 2021 г.', 'Август 2021 г.',
        'Сентябрь 2021 г.', 'Октябрь 2021 г.', 'Ноябрь 2021 г.', 'Декабрь 2021 г.']

    let currentDate = document.querySelector('.date')

    let currentDateIndex = dates.indexOf(currentDate.innerHTML)

    if (currentDateIndex > 0) {
        currentDate.innerHTML = type === 'next' ? dates[currentDateIndex + 1] : dates[currentDateIndex - 1]
    }

    else if (currentDateIndex === 0) {
        currentDate.innerHTML = type === 'next' ? dates[currentDateIndex + 1] : dates[dates.length - 1]
    }
    else if (currentDateIndex + 1 > dates.length) {
        currentDate.innerHTML = dates[0]
    }
    else {
        currentDate.innerHTML = dates[0]
    }
}
//Смена цвета индикаторов
function changeColor(element) {
    let currentValue = parseInt(element.innerHTML)
    if (currentValue === 100) {
        element.style.color = 'yellow'
    } else if (currentValue < 100) {
        element.style.color = 'red'
    } else {
        element.style.color = '#36C496'
    }
}
// инициализация скриптов
function init() {
    let buttons = document.querySelectorAll(".button")
    buttons.forEach(el => {
        el.addEventListener('click', (e) => {
            clickHandler(e.target)
        })
    })
    changeColor(document.querySelector(".result"))
}











init()

