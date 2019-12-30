var five= require("johnny-five");
var circuitot = new five.Board();



circuitot.on("ready",cercania)

function cercania()
{

  
  var calibrado= {controller: "HCSR04", pin:7};
  
   ultasonico = new five.Proximity(calibrado);
   ledverde= new five.Led(11);
   ledamarillo= new five.Led(12);
   ledrojo= new five.Led(13);
   
   ultasonico.on("change",distancia,);
   
   
   
   distancia();
  
};


function distancia()
{
  
    const {centimeters, inches} = ultasonico;
    console.log("Proximity: ");
    console.log("  cm  : ", centimeters);
    console.log("  in  : ", inches);
    console.log("-----------------");
   

    if (centimeters>100) 
    {
     ledverde.on(); 
     ledamarillo.off();
     ledrojo.off();
    }
    if (centimeters>= 21 && centimeters<=100) 
    {
      ledamarillo.on();
      ledrojo.off();
      ledverde.off(); 
    }

    if (centimeters>= 5 && centimeters<=20) 
    {
      ledamarillo.off();
      ledrojo.on();
      ledverde.off(); 
    
    }
    
}

