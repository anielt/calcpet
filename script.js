var qualSeuPet = prompt ("Qual seu pet? (chinchila, coelho, peixe, cachorro ou gato)") 

var idadeDoPet = parseInt(prompt ("Quantos anos ele tem?"))


if (qualSeuPet.toLowerCase() == "gato" ) {
 var resultado = idadeDoPet * 4
document.write("<h2>" + "Seu pet tem em média " + resultado + " anos humanos." + "</h2>") 
} else if (qualSeuPet.toLowerCase() == "coelho" ) {
 var resultado = idadeDoPet * 7.5
document.write("<h2>" + "Seu pet tem em média " + resultado + " anos humanos." + "</h2>") 
} else if (qualSeuPet.toLowerCase() == "peixe" ) {
 var resultado = idadeDoPet * 7
document.write("<h2>" + "Seu pet tem em média " + resultado + " anos humanos." + "</h2>") 
} else if (qualSeuPet.toLowerCase() == "cachorro" && idadeDoPet == 1 ) {
   var resultado = idadeDoPet * 15
   document.write("<h2>" + "Seu pet tem em média " + resultado + " anos humanos." + "</h2>") 

 } else if (qualSeuPet.toLowerCase() == "cachorro" && idadeDoPet == 2 ) {
    var resultado = idadeDoPet * 9

    document.write("<h2>" + "Seu pet tem em média " + resultado + " anos humanos." + "</h2>") 

 } else if (qualSeuPet.toLowerCase() == "cachorro" && idadeDoPet >= 3 ) {
 var resultado = idadeDoPet * 5

 document.write("<h2>" + "Seu pet tem em média " + resultado + " anos humanos." + "</h2>") 
} else if (qualSeuPet.toLowerCase() == "chinchila" ) {
 var resultado = idadeDoPet * 18
document.write("<h2>" + "Seu pet tem em média " + resultado + " anos humanos." + "</h2>") 
}

else {
  document.write("<h2>Opção Inválida</h2>")
}
