```javascript
function calculaSalario(carrosVendidos, valorVendas) {
  const salarioBase = 2000 
 let salarioTotal
 
 salarioTotal = salarioBase  + (carrosVendidos * 100) + (valorVendas * 0.05)

  return salarioTotal
}
``` 