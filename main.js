var canvas
var canvasContext

var ballX = 75

window.onload = function () {
	canvas = document.getElementById('gameCanvas')
	canvasContext = canvas.getContext('2d')

	var framesPerSecond = 30
	setInterval(updateAll, 1000 / framesPerSecond)

}

function updateAll () {

	ballX++

	canvasContext.fillStyle = 'black'
	canvasContext.fillRect(0, 0, canvas.width, canvas.height)

	canvasContext.fillStyle = 'white'
	canvasContext.beginPath()
	canvasContext.arc(100, 100, 10, 0, Math.PI * 2, true)
	canvasContext.fill()

}


