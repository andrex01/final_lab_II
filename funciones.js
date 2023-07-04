function borrar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("modelo").value = "";
    var radio = document.querySelector('input[type=radio][name=tipo_vehiculo]:checked');
    radio.checked = false;
    
}
function borrar2(){
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("modelo").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("n0").value = "";
}
  
function auto(){
  let modelo = document.getElementById("modelo").value;
  var mensaje;
  
  if(modelo=="clasA"  ){
    mensaje=" Hatchback : U$S 60.000  ,  Sedán : U$S 55.000  ,  A35 : U$S 115.000 ";
  }
  else if(modelo=="clasC" ){
    mensaje=" C300 Sedán : U$S 120.000  ,  C43 coupé : U$S 190.000  ,  C63s : U$S 290.000";
  }
  else if (modelo=="clasS"){
    mensaje=" S500 : U$S 380.000";
  }
  else if(modelo=="glb"  ){
    mensaje=" GLB 200 : U$S 65.000  ,  GLB 250 : U$S 110.000 ";
  }
  else if(modelo=="glc"  ){
    mensaje="  GLC 300 : U$S 145.000";
  }
  else if(modelo=="gle"  ){
    mensaje=" GLE 450 : U$S 205.000 ";
  }
  else if(modelo=="clasX"  ){
    mensaje=" Clase x 350d : U$S 65.000 ";
  }
  else if(modelo=="clasG"  ){
    mensaje=" Clase G500 : U$S 388.000";
  }
  else if(modelo=="clasG6"  ){
    mensaje=" Clase G 6x6 : U$S 500.000";
  }
  else if(modelo==" "  ){
    mensaje=" Seleccionó una opción vacía ";
  }
  document.getElementById("resultado").innerHTML=mensaje;
}

function usado(){
  
  let modelo = document.getElementById("modelo").value;
  var km = document.getElementById("n2").value;
  var anio = document.getElementById("n0").value;
  var mensaje;
  anio=parseInt(anio);
  km=parseInt(km);
  
 if (modelo!=" ") {
  if (anio<=2023 & anio>2016)
  {
    
    if (km<15000) 
    {
        
        if (modelo == "clasA") {
          mensaje="Precio de referencia : U$S 50.000"
        }
        else if (modelo == "clasC") {
          mensaje="Precio de referencia : U$S 99.000"
        }
        else if (modelo == "clasS") {
          mensaje="Precio de referencia : U$S 300.000"
        }
        else if (modelo == "glb") {
          mensaje="Precio de referencia : U$S 48.000"
        }
        else if (modelo == "glc") {
          mensaje="Precio de referencia : U$S 105.000"
        }
        else if (modelo == "gle") {
          mensaje="Precio de referencia : U$S 160.000"
        }
        else if (modelo == "clasX") {
          mensaje="Precio de referencia : U$S 40.000"
        }
        else if (modelo == "clasG") {
          mensaje="Precio de referencia : U$S 310.000"
        }
        else if (modelo == "clasG6") {
          mensaje="Precio de referencia : U$S 470.000"
        }
        else{
          mensaje="ingrese nuevamente el modelo entro al de 2022 menos d 15k km"
        }
    }
    else{
        if (modelo == "clasA") {
          mensaje="Precio de referencia : U$S 40.000"
        }
        else if (modelo == "clasC") {
          mensaje="Precio de referencia : U$S 85.000"
        }
        else if (modelo == "clasS") {
          mensaje="Precio de referencia : U$S 220.000"
        }
        else if (modelo == "glb") {
          mensaje="Precio de referencia : U$S 37.000"
        }
        else if (modelo == "glc") {
          mensaje="Precio de referencia : U$S 80.000"
        }
        else if (modelo == "gle") {
          mensaje="Precio de referencia : U$S 110.000"
        }
        else if (modelo == "clasX") {
          mensaje="Precio de referencia : U$S 32.500"
        }
        else if (modelo == "clasG") {
          mensaje="Precio de referencia : U$S 210.000"
        }
        else if (modelo == "clasG6") {
          mensaje="Precio de referencia : U$S 380.000"
        }
        else{
          mensaje="ingrese nuevamente el modelo entro a mas de 15k km"
        }
        }
  }
    else if (anio<=2016 & anio>2010){
      if (km<15000) {
        if (modelo == "clasA") {
          mensaje="Precio de referencia : U$S 40.000"
        }
        else if (modelo == "clasC") {
          mensaje="Precio de referencia : U$S 80.000"
        }
        else if (modelo == "clasS") {
          mensaje="Precio de referencia : U$S 230.000"
        }
        else if (modelo == "glb") {
          mensaje="Precio de referencia : U$S 30.000"
        }
        else if (modelo == "glc") {
          mensaje="Precio de referencia : U$S 65.000"
        }
        else if (modelo == "gle") {
          mensaje="Precio de referencia : U$S 97.000"
        }
        else if (modelo == "clasX") {
          mensaje="Precio de referencia : U$S 30.000"
        }
        else if (modelo == "clasG") {
          mensaje="Precio de referencia : U$S 190.000"
        }
        else if (modelo == "clasG6") {
          mensaje="Precio de referencia : U$S 350.000"
        }
        else{
          mensaje="ingrese nuevamente el modelo"
        }
      }
      else{
        if (modelo == "clasA") {
          mensaje="Precio de referencia : U$S 28.000"
        }
        else if (modelo == "clasC") {
          mensaje="Precio de referencia : U$S 60.000"
        }
        else if (modelo == "clasS") {
          mensaje="Precio de referencia : U$S 180.000"
        }
        else if (modelo == "glb") {
          mensaje="Precio de referencia : U$S 26.000"
        }
        else if (modelo == "glc") {
          mensaje="Precio de referencia : U$S 60.000"
        }
        else if (modelo == "gle") {
          mensaje="Precio de referencia : U$S 90.000"
        }
        else if (modelo == "clasX") {
          mensaje="Precio de referencia : U$S 25.000"
        }
        else if (modelo == "clasG") {
          mensaje="Precio de referencia : U$S 150.000"
        }
        else if (modelo == "clasG6") {
          mensaje="Precio de referencia : U$S 310.000"
        }
        else{
          mensaje="ingrese nuevamente el modelo"
        }
      }
    }
    else if (anio<=2010 & anio>=2000)
    {
      mensaje="bababa";
      if (km<15000) {
        if (modelo == "clasA") {
          mensaje="Precio de referencia : U$S 20.000"
        }
        else if (modelo == "clasC") {
          mensaje="Precio de referencia : U$S 45.000"
        }
        else if (modelo == "clasS") {
          mensaje="Precio de referencia : U$S 190.000"
        }
        else if (modelo == "glb") {
          mensaje="Precio de referencia : U$S 20.000"
        }
        else if (modelo == "glc") {
           mensaje="Precio de referencia : U$S 45.000"
        }
        else if (modelo == "gle") {
          mensaje="Precio de referencia : U$S 55.000"
        }
        else if (modelo == "clasX") {
          mensaje="Precio de referencia : U$S 20.000"
        }
        else if (modelo == "clasG") {
          mensaje="Precio de referencia : U$S 160.000"
        }
        else if (modelo == "clasG6") {
          mensaje="Precio de referencia : U$S 300.000"
        }
        else{
          mensaje="ingrese nuevamente el modelo"
        }
      }
      else{
        if (modelo == "clasA") {
          mensaje="Precio de referencia : U$S 15.000"
        }
        else if (modelo == "clasC") {
          mensaje="Precio de referencia : U$S 30.000"
        }
        else if (modelo == "clasS") {
          mensaje="Precio de referencia : U$S 140.000"
        }
        else if (modelo == "glb") {
          mensaje="Precio de referencia : U$S 16.000"
        }
        else if (modelo == "glc") {
          mensaje="Precio de referencia : U$S 40.000"
        }
        else if (modelo == "gle") {
          mensaje="Precio de referencia : U$S 45.000"
        }
        else if (modelo == "clasX") {
          mensaje="Precio de referencia : U$S 12.500"
        }
        else if (modelo == "clasG") {
          mensaje="Precio de referencia : U$S 100.000"
        }
        else if (modelo == "clasG6") {
          mensaje="Precio de referencia : U$S 275.000"
        }
        else{
          mensaje="ingrese nuevamente el modelo"
        }
      }
    }
  else{
    mensaje=" No hay precios de referencia para tal antiguedad"
  }
 }
 else{
  mensaje=" No seleccionó ningun modelo !!"
 }  
document.getElementById("resultado").innerHTML=mensaje;
}