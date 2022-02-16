import * as module from '../main.js';

function FuncHorloge(){

	// ------ RESET -------
	var bouton_start = document.getElementById('bouton_start');
	bouton_start.style.display = 'none';

	var bouton_reset = document.getElementById('bouton_reset');
	bouton_reset.style.display = 'none';

	// minuteur
	var box_minuteur = document.getElementById('minuteur');
	box_minuteur.style.display = 'none';

	//-------------------------------------------

	// Fonctions delay
	var tmpReelSeconde = setInterval(Seconde, 1000);
	var tmpReelMinute = setInterval(Minute, 1000);
	var tmpReelHeure = setInterval(Heure, 1000);
	
	// STOP FONCTIONS
	var Bchrono = document.getElementById('bouton_chrono');
	Bchrono.addEventListener('click', FinFonctions);
	var Bminuteur = document.getElementById('bouton_minuteur');
	Bminuteur.addEventListener('click', FinFonctions);

	function FinFonctions(){
		clearInterval(tmpReelSeconde);
		clearInterval(tmpReelMinute);
		clearInterval(tmpReelHeure);
	}

	// AFFICHAGE
	module.titre.innerHTML = 'HORLOGE';

	var boxFuseaux = document.getElementById('box-fuseaux');
	boxFuseaux.style.display = 'initial';


	// ------ FUSEAUX -------

	var HNewyork = document.querySelector('.Hnewyork');
	var HLondres = document.querySelector('.Hlondres');
	var HPekin = document.querySelector('.Hpekin');
	var HChicago = document.querySelector('.Hchicago');

	var TextNewyork = document.querySelector('.Newyork p');
	var TextLondres = document.querySelector('.Londres p');
	var TextPekin = document.querySelector('.Pekin p');
	var TextChicago = document.querySelector('.Chicago p');

	var tabJour = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];

	var intervalNewyork = setInterval(NewYork, 1000);
	var intervalLondres = setInterval(Londres, 1000);
	var intervalPekin = setInterval(Pekin, 1000);
	var intervalChicago = setInterval(Chicago, 1000);
	
	function NewYork(){
		var date = new Date();
		var heure = date.getHours() - 6;
		var minute = date.getMinutes();
		var jour = date.getDay();
		var Njour = date.getDate();
		var mois = date.getMonth() + 1;

		if (heure < 0){
			heure += 24;
			jour -= 1;
			Njour -= 1;
		}

		if (heure > 23){
			heure -= 24;
			jour += 1;
			Njour +=1;
			if (mois % 2 == 0 && Njour > 30){
				Njour = '01';
				mois += 1;
			}
			else if (mois % 2 != 0 && Njour > 31){
				Njour = '01';
				mois += 1;
			}
		}

		if (heure < 10)
			heure = '0' + heure;
		if (minute < 10)
			minute = '0' + minute;
		if (Njour < 10)
			Njour = '0' + Njour;
		if (mois < 10)
			mois = '0' + mois;

		HNewyork.innerHTML = heure + ':' + minute;
		TextNewyork.innerHTML = tabJour[jour] + ',  ' + Njour + '/' + mois;
		
	}

	function Londres(){
		var date = new Date();
		var heure = date.getHours() - 1;
		var minute = date.getMinutes();
		var jour = date.getDay();
		var Njour = date.getDate();
		var mois = date.getMonth() + 1;

		if (heure < 0){
			heure += 24;
			jour -= 1;
			Njour -= 1;
		}

		if (heure > 23){
			heure -= 24;
			jour += 1;
			Njour +=1;
			if (mois % 2 == 0 && Njour > 30){
				Njour = '01';
				mois += 1;
			}
			else if (mois % 2 != 0 && Njour > 31){
				Njour = '01';
				mois += 1;
			}
		}

		if (heure < 10)
			heure = '0' + heure;
		if (minute < 10)
			minute = '0' + minute;
		if (Njour < 10)
			Njour = '0' + Njour;
		if (mois < 10)
			mois = '0' + mois;

		HLondres.innerHTML = heure + ':' + minute;
		TextLondres.innerHTML = tabJour[jour] + ',  ' + Njour + '/' + mois;
	}

	function Pekin(){
		var date = new Date();
		var heure = date.getHours() + 6;
		var minute = date.getMinutes();
		var jour = date.getDay();
		var Njour = date.getDate();
		var mois = date.getMonth() + 1;

		if (heure < 0){
			heure += 24;
			jour -= 1;
			Njour -= 1;
		}

		if (heure > 23){
			heure -= 24;
			jour += 1;
			Njour +=1;
			if (mois % 2 == 0 && Njour > 30){
				Njour = '01';
				mois += 1;
			}
			else if (mois % 2 != 0 && Njour > 31){
				Njour = '01';
				mois += 1;
			}
		}

		if (heure < 10)
			heure = '0' + heure;
		if (minute < 10)
			minute = '0' + minute;
		if (Njour < 10)
			Njour = '0' + Njour;
		if (mois < 10)
			mois = '0' + mois;

		HPekin.innerHTML = heure + ':' + minute;
		TextPekin.innerHTML = tabJour[jour] + ',  ' + Njour + '/'+ mois;
	}

	function Chicago(){
		var date = new Date();
		var heure = date.getHours() - 7;
		var minute = date.getMinutes();
		var jour = date.getDay();
		var Njour = date.getDate();
		var mois = date.getMonth() + 1;

		if (heure < 0){
			heure += 24;
			jour -= 1;
			Njour -= 1;
		}

		if (heure > 23){
			heure -= 24;
			jour += 1;
			Njour +=1;
			if (mois % 2 == 0 && Njour > 30){
				Njour = '01';
				mois += 1;
			}
			else if (mois % 2 != 0 && Njour > 31){
				Njour = '01';
				mois += 1;
			}
		}

		if (heure < 10)
			heure = '0' + heure;
		if (minute < 10)
			minute = '0' + minute;
		if (Njour < 10)
			Njour = '0' + Njour;
		if (mois < 10)
			mois = '0' + mois;

		HChicago.innerHTML = heure + ':' + minute;
		TextChicago.innerHTML = tabJour[jour] + ',  ' + Njour + '/' + mois;
	}

	// ----SECONDE----

	function Seconde(){
		// Récupère heure
		var date = new Date();
		var seconde = date.getSeconds();

		// Calculs degrés cercle
		var progression = seconde * 6;
		var degInit = -Math.PI/2;
		var degFinal = (Math.PI/180)*progression;

		// Dessine la progression du cercle
		if (progression != 0){
			module.ctx.clearRect(270, 45, 120, 110);
			module.DrawCircle(325, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
			module.DrawCircle(325, 100, 50, degInit, degFinal + degInit, module.lineaire, 4);

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
	}

	// ----MINUTE----

	function Minute(){
		// Récupère heure
		var date = new Date();
		var minute = date.getMinutes();

		// Calculs degrés cercle
		var progression = minute * 6;
		var degInit = -Math.PI/2;
		var degFinal = (Math.PI/180)*progression;

		// Dessine la progression du cercle
		if (progression != 0){
			module.ctx.clearRect(145, 45, 120, 110);
			module.DrawCircle(200, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
			module.DrawCircle(200, 100, 50, degInit, degFinal + degInit, module.lineaire, 4);

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
			module.DrawCircle(200, 100, 50, degInit, degInit + (Math.PI/180)*1, module.lineaire, 4);
			module.DrawCircle(200, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
			module.Text(minute, 190, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
		}
	}

	// ----HEURE----

	function Heure(){
		// Récupère heure
		var date = new Date();
		var heure = date.getHours();

		// Calculs degrés cercle
		var progression = heure * 15;
		var degInit = -Math.PI/2;
		var degFinal = (Math.PI/180)*progression;

		// Dessine la progression du cercle
		if (progression != 0){
			module.ctx.clearRect(20, 45, 120, 110);
			module.DrawCircle(75, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
			module.DrawCircle(75, 100, 50, degInit, degFinal + degInit, module.lineaire, 4);

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
			module.DrawCircle(75, 100, 50, degInit, degInit + (Math.PI/180)*1, module.lineaire, 4);
			module.DrawCircle(75, 100, 50, 0, 2*Math.PI, module.lineaire2, 2);
			module.Text(heure, 65, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
		}
	}
}
		

export {FuncHorloge};
