function calc_falta(ch, jaf){
  ch = parseInt(ch)
  if (ch<12){
    ch = ch*18
    ch = (ch *0.25).toFixed(0)
  }
  else
    ch = (ch *0.25).toFixed(0)

  if(jaf != 0)
    ch = ch - jaf
  return ch
}

function Calc_Nota(nota){
  nota = nota/3;
  nota = 70 - nota;
  nota = parseFloat(nota*3/2).toFixed(1);
  return nota;
}