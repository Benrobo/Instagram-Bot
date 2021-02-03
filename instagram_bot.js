function bot(){
	let countFollwers = 0;
	let setBotTime = setInterval(function(){
		if(countFollwers == 20){
			clearInterval(setBotTime);
			return false;
		}
		let followbtn = document.querySelectorAll(".sqdOP");
		let realBtn = followbtn[countFollwers];
		realBtn.click();
		countFollwers++;
	}, 5000)
}
bot()
