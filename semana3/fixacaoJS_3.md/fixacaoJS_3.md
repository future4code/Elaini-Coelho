``` js
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
 let notaFinal = ((p1 * 2) + (p2 * 3) + (ex * 1)) / 6
 
 if(notaFinal >= 9) {
   return "A"
  } 
else if(notaFinal < 9 && notaFinal >= 7.5) {
    return "B"
  }
else if (notaFinal < 7.5 && notaFinal >= 6) {
   return "C"
  }
else {
   return "D"
  }
}
```