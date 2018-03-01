
let numeros = [5,7,13,3,21,83,93,91];
let numeroMao=numeros[0];

for(let numeroChegando of numeros)
{

    if(numeroMao < numeroChegando)
    {
        numeroMao = numeroChegando;
    }
}
console.log(numeroMao);
