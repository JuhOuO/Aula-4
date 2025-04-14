// operador AND (&&)

let idade = 20
let carteira = 'não'

if (idade >= 18 && carteira === 'sim'){
    console.log("pode dirigir")
} else {
    console.log("não pode dirigir")
}

// operador OU (||)

let gestante = 'sim' 
let idoso = 'não'
if (gestante === 'sim' || idoso === 'sim'){
    console.log("Fila preferencial")
} else {
    console.log("Fila comum") 
}


