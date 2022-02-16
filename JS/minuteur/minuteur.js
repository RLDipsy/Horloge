import {FuncHorloge} from '../horloge/horloge.js';
import * as module from '../main.js';

function FuncMinuteur(){
	var box_minuteur = document.getElementById('minuteur');
	box_minuteur.style.display = 'flex';
	box_minuteur.style.flexWrap = 'wrap';
	box_minuteur.style.flexDirection = 'column';
	var bouton_affichage = document.getElementById('bouton_affichage');
	bouton_affichage.style.display = 'flex';

	// BOUTONS

	var bouton_heure = document.getElementById('btn-heure');
	var bouton_minute = document.getElementById('btn-minute');
	var bouton_seconde = document.getElementById('btn-seconde');

	var btn_0 = document.getElementById('btn-0');
	var btn_1 = document.getElementById('btn-1');
	var btn_2 = document.getElementById('btn-2');
	var btn_3 = document.getElementById('btn-3');
	var btn_4 = document.getElementById('btn-4');
	var btn_5 = document.getElementById('btn-5');
	var btn_6 = document.getElementById('btn-6');
	var btn_7 = document.getElementById('btn-7');
	var btn_8 = document.getElementById('btn-8');
	var btn_9 = document.getElementById('btn-9');
	var btn_effacer = document.getElementById('btn-effacer');
	var btn_supprimer = document.getElementById('btn-supprimer');
	var btn_play = document.getElementById('btn-play');

	// clavier

	var clavier = document.getElementById('clavier');

	var canvas = module.canvas;
	var ctx = module.ctx;


	// ------ RESET ------
	//chrono
	var boxFuseaux = document.getElementById('box-fuseaux');
	boxFuseaux.style.display = 'none';
	// horloge
	var bouton_start = document.getElementById('bouton_start');
	bouton_start.style.display = 'none';

	var bouton_reset = document.getElementById('bouton_reset');
	bouton_reset.style.display = 'none';

	// ------ AFFICHAGE PAR DEFAUT ------
	function AffichageDefaut() {
		module.ctx.clearRect(0, 0, canvas.width, canvas.height);
		module.AffichageDefaut();
		module.Text('0', 315, 110, 'normal 30px Montserrat-ExtraLight, sans-serif');
		module.Text('0', 190, 110, 'normal 30px Montserrat-ExtraLight, sans-serif');
		module.Text('0', 65, 110, 'normal 30px Montserrat-ExtraLight, sans-serif');
	}

	AffichageDefaut();
	module.titre.innerHTML = 'MINUTEUR';

	// ------ AFFICHAGE SECONDES ------
	function AffichageSeconde() {
		module.ctx.clearRect(290, 70, 60, 50);
		if (seconde == '') {
			module.Text(
				'0',
				315,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		}
		if (seconde < 10) {
			module.Text(
				seconde,
				315,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (seconde > 9 && seconde < 20) {
			module.Text(
				seconde,
				310,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (seconde > 19 && seconde < 30) {
			module.Text(
				seconde,
				308,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (seconde > 29 && seconde < 40) {
			module.Text(
				seconde,
				308,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (seconde > 39 && seconde < 50) {
			module.Text(
				seconde,
				305,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (seconde > 49 && seconde < 60) {
			module.Text(
				seconde,
				306,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		}
	}

	function AffichageMinute() {
		module.ctx.clearRect(170, 70, 60, 50);
		if (minute == '') {
			module.Text(
				'0',
				190,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		}
		if (minute < 10) {
			module.Text(
				minute,
				190,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (minute > 9 && minute < 20) {
			module.Text(
				minute,
				186,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (minute > 19 && minute < 30) {
			module.Text(
				minute,
				183,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (minute > 29 && minute < 40) {
			module.Text(
				minute,
				183,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (minute > 39 && minute < 50) {
			module.Text(
				minute,
				180,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (minute > 49 && minute < 60) {
			module.Text(
				minute,
				181,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		}
	}

	function AffichageHeure() {
		module.ctx.clearRect(40, 70, 60, 50);
		if (heure == '') {
			module.Text(
				'0',
				65,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		}
		if (heure < 10) {
			module.Text(
				heure,
				65,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (heure > 9 && heure < 20) {
			module.Text(
				heure,
				62,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (heure > 19 && heure < 30) {
			module.Text(
				heure,
				60,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (heure > 29 && heure < 40) {
			module.Text(
				heure,
				60,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (heure > 39 && heure < 50) {
			module.Text(
				heure,
				58,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (heure > 49 && heure < 60) {
			module.Text(
				heure,
				59,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		}
	}

	var seconde = '';
	var minute = '';
	var heure = '';

	// CHRIFFRES
	btn_0.addEventListener('click', Zero);
	btn_1.addEventListener('click', Un);
	btn_2.addEventListener('click', Deux);
	btn_3.addEventListener('click', Trois);
	btn_4.addEventListener('click', Quatre);
	btn_5.addEventListener('click', Cinq);
	btn_6.addEventListener('click', Six);
	btn_7.addEventListener('click', Sept);
	btn_8.addEventListener('click', Huit);
	btn_9.addEventListener('click', Neuf);
	btn_effacer.addEventListener('click', Effacer);

	function Zero() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '0';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6) {
				minute += '0';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '0';
				AffichageHeure();
			}
			console.log('seconde: ' + seconde);
		}
	}
	function Un() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '1';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6 && minute < 6) {
				minute += '1';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '1';
				AffichageHeure();
			}
			console.log('seconde: ' + seconde);
		}
	}
	function Deux() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '2';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6) {
				minute += '2';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '2';
				AffichageHeure();
			}
			console.log('seconde: ' + seconde);
		}
	}
	function Trois() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '3';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6) {
				minute += '3';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '3';
				AffichageHeure();
			}
			console.log('seconde: ' + seconde);
		}
	}
	function Quatre() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '4';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6) {
				minute += '4';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '4';
				AffichageHeure();
			}
			console.log('seconde: ' + seconde);
		}
	}
	function Cinq() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '5';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6) {
				minute += '5';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '5';
				AffichageHeure();
			}
		}
	}
	function Six() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '6';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6) {
				minute += '6';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '6';
				AffichageHeure();
			}
			console.log('seconde: ' + seconde);
		}
	}
	function Sept() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '7';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6) {
				minute += '7';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '7';
				AffichageHeure();
			}
			console.log('seconde: ' + seconde);
		}
	}
	function Huit() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '8';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6) {
				minute += '8';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '8';
				AffichageHeure();
			}
			console.log('seconde: ' + seconde);
		}
	}
	function Neuf() {
		if (seconde.length < 2 && verif_set == true) {
			if (verif_seconde == true && seconde < 6) {
				seconde += '9';
				AffichageSeconde();
			} else if (verif_minute == true && minute < 6) {
				minute += '9';
				AffichageMinute();
			} else if (verif_heure == true && heure < 6 && heure < 6) {
				heure += '9';
				AffichageHeure();
			}
			console.log('seconde: ' + seconde);
		}
	}

	function Effacer() {
		if (verif_seconde == true) {
			seconde = '';
			AffichageSeconde();
			module.Text(
				'0',
				315,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (verif_minute == true) {
			minute = '';
			AffichageMinute();
			module.Text(
				'0',
				190,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		} else if (verif_heure == true) {
			heure = '';
			AffichageHeure();
			module.Text(
				'0',
				65,
				110,
				'normal 30px Montserrat-ExtraLight, sans-serif',
			);
		}
	}
	/*
	function Reinitialiser(){
		if (verif_seconde == true){
			seconde = '';
			AffichageSeconde();
			module.Text('0', 315, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
		}
		else if (verif_minute == true){
			minute = '';
			AffichageMinute();
			module.Text('0', 190, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
		}
		else if (verif_heure == true){
			heure = '';
			AffichageHeure();
			module.Text('0', 65, 110, "normal 30px Montserrat-ExtraLight, sans-serif");
		}
	}
	*/
	//-------------

	console.log('seconde: ' + seconde);

	var verif_seconde = false;
	var verif_minute = false;
	var verif_heure = false;
	var verif_set = false;

	bouton_seconde.addEventListener('click', SetSeconde);
	bouton_minute.addEventListener('click', SetMinute);
	bouton_heure.addEventListener('click', SetHeure);

	function SetSeconde() {
		verif_seconde = true;
		verif_minute = false;
		verif_heure = false;
		AffichageDefaut();
		module.ctx.clearRect(270, 45, 120, 110);
		module.DrawCircle(325, 100, 50, 0, 2 * Math.PI, module.lineaire3, 2);
		module.Text('0', 315, 110, 'normal 30px Montserrat-ExtraLight, sans-serif');
		module.Text('SECONDES', 295, 180, 'normal 10px Montserrat-Light, sans-serif');
		AffichageSeconde();
		AffichageMinute();
		AffichageHeure();
		verif_set = true;
	}

	function SetMinute() {
		verif_seconde = false;
		verif_minute = true;
		verif_heure = false;
		AffichageDefaut();
		module.ctx.clearRect(145, 45, 120, 110);
		module.DrawCircle(200, 100, 50, 0, 2 * Math.PI, module.lineaire3, 2);
		module.Text('0', 190, 110, 'normal 30px Montserrat-ExtraLight, sans-serif');
		module.Text('MINUTES', 175, 180, 'normal 10px Montserrat-Light, sans-serif');
		AffichageSeconde();
		AffichageMinute();
		AffichageHeure();
		verif_set = true;
	}

	function SetHeure() {
		verif_seconde = false;
		verif_minute = false;
		verif_heure = true;
		AffichageDefaut();
		module.ctx.clearRect(20, 45, 120, 110);
		module.DrawCircle(75, 100, 50, 0, 2 * Math.PI, module.lineaire3, 2);
		module.Text('0', 65, 110, 'normal 30px Montserrat-ExtraLight, sans-serif');
		module.Text('HEURES', 55, 180, 'normal 10px Montserrat-Light, sans-serif');
		AffichageSeconde();
		AffichageMinute();
		AffichageHeure();
		verif_set = true;
	}

	btn_play.addEventListener('click', StartMinuteur);

	var stop = true;
	var pause = false;
	console.log('seconde: ' + seconde);

	function StartMinuteur() {
		console.log('pause: ' + pause);
		console.log('stop: ' + stop);
		if (seconde != ''){
			if (stop == false) {
				stop = true;
			} 
			else if (stop == true && pause == false) {
				stop = false;
				var interval = setInterval(Minuteur, 1000);
			}	 
			else if (stop == true && pause == true) {
				stop = false;
			}

			clavier.style.opacity = '0.4';
			AffichageDefaut();
			bouton_seconde.removeEventListener('click', SetSeconde);
			bouton_minute.removeEventListener('click', SetMinute);
			bouton_heure.removeEventListener('click', SetHeure);
			AffichageSeconde();
			AffichageMinute();
			AffichageHeure();
		}
		else{
			console.log('stop');
			clearInterval(StartMinuteur);
			clearInterval(Minuteur);
		}

		function Minuteur() {
			// STOP FONCTIONS
			var Bchrono = document.getElementById('bouton_chrono');
			Bchrono.addEventListener('click', MFinFonctions);
			var Bhorloge = document.getElementById('bouton_horloge');
			Bhorloge.addEventListener('click', MFinFonctions);
			btn_supprimer.addEventListener('click', Reset);

			function MFinFonctions(){
				clearInterval(interval);
				clavier.style.opacity = '1';
				btn_play.style.backgroundImage = "url('../Icons/play3.png')";
				seconde = 0;
				minute = 0;
				heure = 0;
			}
			function Reset() {
				if (pause == true) {
					clavier.style.opacity = '1';
					btn_play.style.backgroundImage = "url('../Icons/play3.png')";
					seconde = 0;
					minute = 0;
					heure = 0;
					AffichageSeconde();
					AffichageMinute();
					AffichageHeure();
				}
			}
			//--------------------------------------------------
			if (stop == false) {
				seconde--;
				btn_play.style.backgroundImage = "url('../Icons/pause.png')";
			} else {
				pause = true;
				console.log('pause: ' + pause);
				btn_play.style.backgroundImage = "url('../Icons/play3.png')";
			}

			if (seconde == 0 && minute > 0) {
				seconde = 59;
				minute -= 1;
			}
			if (minute == 0 && heure > 0) {
				minute == 59;
				heure -= 1;
			}

			/* Fin minuteur */
			if (seconde == 0 && minute == 0 && heure == 0) {
				console.log('fin');
				clearInterval(interval);
				clavier.style.opacity = '1';
				bouton_seconde.addEventListener('click', SetSeconde);
				bouton_minute.addEventListener('click', SetMinute);
				bouton_heure.addEventListener('click', SetHeure);
				btn_play.style.backgroundImage = "url('../Icons/play3.png')";
				seconde = '';
				minute = '';
				heure = '';
				stop = true;
				pause = false;
			}
			/*--------------------------*/
			AffichageSeconde();
			AffichageMinute();
			AffichageHeure();
		}
	}
}

export {FuncMinuteur};