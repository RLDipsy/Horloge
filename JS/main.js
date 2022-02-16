import {FuncHorloge} from './horloge/horloge.js';
import {FuncChrono} from './chrono/chrono.js';
import {FuncMinuteur} from './minuteur/minuteur.js';
	
var Bhorloge = document.getElementById('bouton_horloge');
var Bchrono = document.getElementById('bouton_chrono');
var Bminuteur = document.getElementById('bouton_minuteur');

var titre = document.getElementById('titre');

Bhorloge.addEventListener('click', FuncHorloge);
Bchrono.addEventListener('click', FuncChrono);
Bminuteur.addEventListener('click', FuncMinuteur);

// CANVAS
var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

// Couleur Canvas
ctx.fillStyle = '#050D2C';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ----DEGRADES----
var lineaire = ctx.createLinearGradient(400,50,400,300);
lineaire.addColorStop(0, '#2BF199');
lineaire.addColorStop(0.5, '#099FFE');

var lineaire2 = ctx.createLinearGradient(400,50,400,300);
lineaire2.addColorStop(0, 'RGBa(43, 241, 153, 0.3)');
lineaire2.addColorStop(0.5, 'RGBa(9, 159, 254, 0.3)');

var lineaire3 = ctx.createLinearGradient(400,50,400,300);
lineaire3.addColorStop(0, 'RGBa(43, 241, 153, 0.6)');
lineaire3.addColorStop(0.5, 'RGBa(9, 159, 254, 0.6)');

// Draw circle
function DrawCircle(x, y, r, i, f, color, lineW){
	ctx.beginPath();
	ctx.lineWidth = lineW;
	ctx.lineCap = 'round';
	ctx.strokeStyle = color;
	ctx.arc(x, y, r, i, f);
	ctx.stroke();
}
// Text
function Text(text, x, y, style){
	ctx.font = style;
	ctx.fillStyle = 'white';
	ctx.fillText(text, x, y)
}

// Sous titres
function AffichageDefaut(){
	Text('HEURES', 55, 180, "normal 10px Montserrat-Thin, sans-serif");
	Text('MINUTES', 175, 180, "normal 10px Montserrat-Thin, sans-serif");
	Text('SECONDES', 295, 180, "normal 10px Montserrat-Thin, sans-serif");

	DrawCircle(325, 100, 50, 0, 2*Math.PI, lineaire2, 2);
	DrawCircle(200, 100, 50, 0, 2*Math.PI, lineaire2, 2);
	DrawCircle(75, 100, 50, 0, 2*Math.PI, lineaire2, 2);
}

AffichageDefaut();
FuncHorloge();

export {ctx, canvas, lineaire, lineaire2, lineaire3, DrawCircle, Text, AffichageDefaut, titre, Bhorloge};
