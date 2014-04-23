//AB

window.onload = function()
{

    // alert("SVG")

	var dibujar = SVG("cuadroimagen").size("100%", 400);
 
	var LetraA = [[0,200], [100, 0], [140,0],[230,200], [200, 200], [130,30],
	[110,30], [80,90], [155,90], [165,120], [75,120],[30,200], 
	[0,200]];

	

	var letraB =  [[100,100], [100,130], [120,130], [120,300], [100,300],[100,330], [200,330], [220,315],
	 [220,300], [220,250],[200,235],
	 [140,235], [140,255], [170,255], [200,260],[200,300], 
	 [140,300], [140,130], [180,130], [195,145], [195,190], 
	 [190,200], [140,200], [140,235], [200,235], 
	 [220,220], [220,130], [200,100], [100,100]];
	



	var continua = dibujar.polyline(LetraA).fill(color="000000").stroke({width : 6,color:"#FFFFFF"});
	var animo = false;
	nom_div("nuevalinea").addEventListener('click', function(event)



{

	if(!animo)
	{
		continua.animate(1000).plot(letraB);

	}
	else
	{
		continua.animate(1000).plot(LetraA);
	}	
	animo = !animo;
});
	function nom_div(div)

	{

		return document. getElementById(div);
	}
} 	