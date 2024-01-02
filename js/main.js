let deadLine = 601
let timer = document.querySelector('.timer')
let install = document.querySelector('.install-btn')
let manual = document.querySelector('.main-manual')

install.addEventListener('click', () => {
	install.classList.add('install-btn-disable')
	timer.classList.add('timer-end')
	manual.style.display = "block"
})

function countdown() {
	let min = 0
	let sec = 0

	if (deadLine > 0) {
		if (install.classList.contains('install-btn-disable')) {
			deadLine = 0
		} else {
			deadLine = deadLine - 1
		}
		min = Math.floor(deadLine / 60)
		sec = Math.floor(deadLine - min * 60)
		timer.innerHTML = `${min} min ${sec} sec`
	} else {
		install.classList.add('install-btn-disable')
		timer.classList.add('timer-end')
	}
}
document.addEventListener('DOMContentLoaded', () => {
	setInterval(countdown, 1000)
})
