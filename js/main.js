let deadLine = 60
let timer = document.querySelector('.timer')
let install = document.querySelector('.install-btn')

function countdown() {
	let min = 0
	let sec = 0

	if (deadLine > 0) {
		if (install.classList.contains('install-btn-disable')) {
			install.classList.remove('install-btn-disable')
			timer.classList.remove('timer-end')
		}
		deadLine = deadLine - 1
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