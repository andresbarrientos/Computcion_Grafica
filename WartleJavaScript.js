window.onload = function () 
{
	// body...
	//alert("monacho")
	//var pasos = ["Der1" "Der2" "Der3" "Der4" "Izq1" "Izq2" "Izq3" "Izq4"];
	var pasos = "Der";
	var paso = 1;
	
	setInterval(function()
	{
		//console.log("Hola"); 
	    nom_div("monaco").setAttribute("class",  "container Der" + paso);

	    console.log("Der" + paso);
	    paso++;
	    if (paso >= 5) 
		{
        	 paso = 1;
		}

	}, 100);

	function nom_div(div)
	{
		return document.getElementById(div);
	}
}

