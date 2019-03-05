function timer() {
				let elem = document.getElementById('timer');
				if(elem.innerHTML!=0) {
					elem.innerHTML--;
					setTimeout(timer, 1000);
				}
				else alert("Вы победили в конкурсе!");
			}
			setTimeout(timer, 1000);