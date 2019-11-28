const aDias = 1000*60*60*24;

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startDate, days) {
  let fechaFinal, burbuja;
  fechaFinal = new Date(startDate);
  fechaFinal.setDate(parseInt(fechaFinal.getDate())+parseInt(days));
  fechaFinal=fechaFinal.getDate() + "/" + (fechaFinal.getMonth()+1) + "/" + fechaFinal.getFullYear();

  return fechaFinal;
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startDate, endDate) {
  let dias;

  dias = endDate.getTime() - startDate.getTime();
  if (dias>0){
    dias = Math.round(dias/aDias+1);
  }
  else{
    dias = Math.round(dias/aDias-1);
  }
  
   return dias;
}

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startDate, days) { 
  let fecha, fechaFinal, diasFestivos=0;
  fecha = new Date (startDate);
  fechaFinal = calcDate(startDate, days);
  fechaFinal = fechaFinal.split("/");
  fechaFinal = new Date(fechaFinal[2], fechaFinal[1]-1, fechaFinal[0]);
  for (let i = 0; i<=Math.abs(days); i++){
    if(diaFestivo(fecha)==false && i!=0){
      diasFestivos++;
      i--;
    }
    if(days>0){
      fecha.setDate(fecha.getDate()+1);
    }else{
      fecha.setDate(fecha.getDate()-1);
    }
  }
  if(days>0){
    fechaFinal.setDate(fechaFinal.getDate()+diasFestivos);
  }
  else{
    fechaFinal.setDate(fechaFinal.getDate()-diasFestivos);
  }
  
  return fechaFinal.getDate() + "/" + (fechaFinal.getMonth()+1) + "/" + fechaFinal.getFullYear();
}


/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startDate, endDate) {
  let dias, fecha, diasLaborales=0;

  dias = getDays(startDate, endDate);
  if(startDate<endDate){
    fecha = startDate;
  }else{
    fecha = endDate;
  }
  
  for (let i = 0; i <= Math.abs(dias); i++){
    if(diaFestivo(fecha)){
      diasLaborales++;
    }
    fecha.setDate(fecha.getDate()+1);
  }
  if(dias<0){
   diasLaborales=0-diasLaborales;
  }
   return diasLaborales;
}

function diaFestivo(fecha){
  let boleano=false;
  let diasFestivos=new Array();
  diasFestivos[0]=new Date(2019, 0, 1); 
  diasFestivos[1]=new Date(2019, 0, 6); 
  diasFestivos[2]=new Date(2019, 4, 1); 
  diasFestivos[3]=new Date(2019, 8, 15); 
  diasFestivos[4]=new Date(2019, 9, 12); 
  diasFestivos[5]=new Date(2019, 10, 1); 
  diasFestivos[6]=new Date(2019, 11, 6); 
  diasFestivos[7]=new Date(2019, 11, 8); 
  diasFestivos[8]=new Date(2019, 11, 25);

  if(fecha.getDay()!=0 && fecha.getDay()!=6){
    boleano=true;
    for(let i = 0; i<diasFestivos.length; i++){
      if(fecha.getDate()==diasFestivos[i].getDate() && fecha.getMonth()==diasFestivos[i].getMonth()){
        boleano=false;
        break;
      }
    }
    
  }
  return boleano;
}