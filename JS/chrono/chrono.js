import {FuncHorloge} from '../horloge/horloge.js';
import * as module from '../main.js';

function FuncChrono(){
	var bouton_start = document.getElementById('bouton_start');
	bouton_start.style.display = 'initial';

	var bouton_reset = document.getElementById('bouton_reset');
	bouton_reset.style.display = 'initial';

	var div = document.getElementById('menu');
	//div.style.marginTop = '180px'; 

	var canvas = module.canvas;
	var ctx = module.ctx;

	// ------ RESET ------
	// horloge
	var boxFuseaux = document.getElementById('box-fuseaux');
	boxFuseaux.style.display = 'none';
	// minuteur
	var box_minuteur = document.getElementById('minuteur');
	box_minuteur.style.display = 'none';

	// ------ AFFICHAGE PAR DEFAUT ------
	function AffichageDefaut(){
		module.ctx.clearRect(0, 0, canvas.width, canvas.height);
		module.AffichageDefaut();
		module.Text('0', 315, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
		module.Text('0', 190, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
		module.Text('0', 65, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
	}

	AffichageDefaut();
	module.titre.innerHTML = 'CHRONOMETRE';

	//-----------------------------------
	var stop = true;
	var pause = false;
	bouton_start.addEventListener('click', StartChrono);

	function StartChrono(){

		console.log('pause: ' + pause);
		console.log('stop: ' + stop);

		if (stop == false){
			stop = true;
		}
		else if (stop == true && pause == false){
			stop = false;
			var interval = setInterval(Chrono, 1000);
		}
		else if (stop == true && pause == true){
			stop = false;
		}

		var seconde = 0;
		var minute = 0;
		var heure = 0;

		function Chrono(){
			// ----- STOP CHRONO ------
			var bouton_horloge = document.getElementById('bouton_horloge');
			bouton_horloge.addEventListener('click', FinFonction);
			var Bminuteur = document.getElementById('bouton_minuteur');
			Bminuteur.addEventListener('click', FinFonction);

			function FinFonction(){
				clearInterval(interval);
				//pause = true;
				bouton_start.style.backgroundImage = "url('../Icons/play3.png')";
			}

			// ----- RESET CHRONO ------
			bouton_reset.addEventListener('click', ResetChrono);

			function ResetChrono(){
				if (stop == true){
					clearInterval(interval);
					AffichageDefaut();
				}
			}
			//-------------------------

			console.log('pause: ' + pause);
			console.log('stop: ' + stop);

			if (stop == false){
				seconde++;
				bouton_start.style.backgroundImage = "url('../Icons/pause.png')";
			}
			else{
				pause = true;
				console.log('pause: ' + pause);
				bouton_start.style.backgroundImage = "url('../Icons/play3.png')";
			}
			
			if (seconde > 59){
				seconde = 0;
				minute++;
			}
			if (minute > 59){
				minute = 0;
				heure++;
			}

			// Calculs degrés cercle
			var progression_s = seconde * 6;
			var progression_m = minute * 6;
			var progression_h = heure * 6;
			var degInit = -Math.PI/2;
			var degFinal_S = (Math.PI/180)*progression_s;
			var degFinal_M = (Math.PI/180)*progression_m;
			var degFinal_H = (Math.PI/180)*progression_h;

			console.log(heure +' heure: ' + minute + ' minute: ' + seconde + ' seconde');

			// Dessine la progression du cercle
			// ------ SECONDES ------
			if (progression_s != 0){
				module.ctx.clearRect(270, 45, 120, 110);
				module.DrawCircle(325, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
				module.DrawCircle(325, 100, 50, degInit, degFinal_S + degInit, module.lineaire, 4);

				if (seconde < 10){
					module.Text(seconde, 315, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if (seconde > 9 && seconde < 20){
					module.Text(seconde, 310, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if(seconde > 19 && seconde < 30){
					module.Text(seconde, 308, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if(seconde > 29 && seconde < 40){
					module.Text(seconde, 308, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if(seconde > 39 && seconde < 50){
					module.Text(seconde, 305, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if(seconde > 49 && seconde < 60){
					module.Text(seconde, 306, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				
			}
			else{
				module.ctx.clearRect(270, 45, 120, 110);
				module.DrawCircle(325, 100, 50, degInit, degInit + (Math.PI/180)*1, module.lineaire, 4);
				module.DrawCircle(325, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
				module.Text(seconde, 315, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				
			}

			// ------ MINUTES ------
			if (progression_m != 0){
				module.ctx.clearRect(145, 45, 120, 110);
				module.DrawCircle(200, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
				module.DrawCircle(200, 100, 50, degInit, degFinal_M + degInit, module.lineaire, 4);

				if (minute < 10){
					module.Text(minute, 190, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if (minute > 9 && minute < 20){
					module.Text(minute, 186, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if(minute > 19 && minute < 30){
					module.Text(minute, 183, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if(minute > 29 && minute < 40){
					module.Text(minute, 183, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if(minute > 39 && minute < 50){
					module.Text(minute, 180, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if(minute > 49 && minute < 60){
					module.Text(minute, 181, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				
			}
			else{
				module.ctx.clearRect(145, 45, 120, 110);
				module.DrawCircle(200, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
				module.Text(minute, 190, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				
			}

			// ------ HEURES ------
			if (progression_h != 0){
				module.ctx.clearRect(20, 45, 120, 110);
				module.DrawCircle(75, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
				module.DrawCircle(75, 100, 50, degInit, degFinal_H + degInit, module.lineaire, 4);

				if (heure < 10){
					module.Text(heure, 65, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if (heure > 9 && heure < 20){
					module.Text(heure, 62, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
				else if(heure > 19 && heure < 30){
					module.Text(heure, 58, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
				}
			}
			else{
				module.ctx.clearRect(20, 45, 120, 110);
				module.DrawCircle(75, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
				module.Text(heure, 65, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
			}
		}
	}
}
export {FuncChrono};
