const app = document.getElementById('app')
const format = {weekday:'long',month:'long',day:'numeric', year:'numeric'}



// rendering

function render(){
	return (

		`${date()}
		 ${time()}
		 ${greet()}
		`
	)
}

// Components

function time(){
	return `<span id="time"></span>`
}

function date(){
	return `<span id="date">${new Date().toLocaleDateString('en-US',format)}</span>`
}

function greet(){
	return `<span id="greeting"></span>`
}

function message(){
	const hour = new Date().getHours()
	if (hour >= 6  && hour < 12 ) document.getElementById('greeting').textContent = `Good Morning!`
	if (hour >= 12 && hour < 13 ) document.getElementById('greeting').textContent = `Lunch Break!`
	if (hour >= 13 && hour < 18 ) document.getElementById('greeting').textContent = `Good Afternoon!`
	if (hour >= 18 && hour < 24 ) document.getElementById('greeting').textContent = `Good Evening!`
	if (hour >= 0  && hour < 2 )  document.getElementById('greeting').textContent = `Midnight`
}


// Intervals

setInterval(function(){	
	document.getElementById('time').textContent = new Date().toLocaleTimeString()
	if (new Date().getHours() === 0) {
		document.getElementById('date').textContent = new Date().toLocaleDateString('en-US',format)
	}
	message()
},1000)


// Inserting to HTML

app.insertAdjacentHTML('beforeend',render())