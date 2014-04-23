AB

window.onload = function()
{

	var color = "#0ff";
	var dibujar = SVG("divising").size("100%", 300);



	var posOrg = [[0,0], [0, 200], [200, 200], [200, 0], [0,0], [200, 200]];
	var posDestino = [[0, 300], [500, 300], [100, 100]];
	var continua = dibujar.polyline(posOrg).fill("none").stroke({width : 4});
	var animo = false;
	nom_div("posLinea").addEventListener('click', function(event)



{

	if(!animo)
	{
		continua.animate(5000).plot(posDestino);

	}
	else
	{
		continua.animate(1000).plot(posOrg);
	}	
	animo = !animo;
});
	function nom_div(div)

	{

		return document.getElementsById(div);
	}
} 	