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

function Calc_Nota(){
  nota_sem=window.document.getElementById("nota")
  nota_sem=nota_sem.value
  resp=window.document.getElementById("resposta")
  if (nota_sem>=70 || nota_sem<=40) resp.innerHTML="Digite uma nota válida!"
  else{
    nota_f=nota_sem/3
    nota_f=70-nota_f
    nota_f=parseFloat(nota_f*3/2).toFixed(1)
    resp.innerHTML="Você precisa tirar "+nota_f+" para passar."
  }
}