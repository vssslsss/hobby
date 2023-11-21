document.addEventListener(
    'DOMContentLoaded', 
    () => {
        initBurger()
    }
)

document.addEventListener(
    'scroll', 
    () => {
        const $header = document.querySelector('.header')
        if (document.documentElement.scrollTop >= 69) {
            $header.classList.add('scrolled')
        } else {
            $header.classList.remove('scrolled')
        }
    }
)

const $dimer = document.querySelector('.js-dimer')

function initBurger () {
    const $burger = document.querySelector('.js-burger')
    if (!$burger) return
    $burger.onclick = () => {
        const $target = document.querySelector(`.${$burger.dataset.target}`)
        $burger.classList.toggle('open')
        $target.classList.toggle('open')
        $burger.classList.contains('open') ? dimerOpen() : dimerClose ()
    }
}

function dimerOpen () {
    if ($dimer.classList.contains('open')) return
    $dimer.classList.add('open')
}

function dimerClose () {
    if (!$dimer.classList.contains('open')) return
    $dimer.classList.remove('open')
}

$dimer.onclick = () => {
    const $opened = document.querySelectorAll('.open')
    $opened.forEach($elem => $elem.classList.remove('open'))
}