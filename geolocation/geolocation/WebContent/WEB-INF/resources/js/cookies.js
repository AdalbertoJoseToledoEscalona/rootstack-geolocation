/**
 * 
 */
function getCookie(nombreCookie){
	var data=document.cookie;
	var completo=data.split(";");
	var bandera=false;
	var partes=new Array();
	for(var i=0;i<completo.length;i++){
		partes[i]=completo[i].split("=");
	}
	for(i=0;i<partes.length;i++){
		if(partes[i][0].indexOf(nombreCookie)!=-1){
		return(partes[i][1]);
		bandera=true;
		}
	}
	if(!bandera){
		//alert("¡Nombre de cookie errado!");
	}
}

function setCookie(nombreCookie, valorCookie){
	document.cookie=nombreCookie+"="+valorCookie + ";";
	
	return true;
}