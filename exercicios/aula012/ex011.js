var idade = 69
console.log(`Sua idade é ${idade} anos`)
if (idade <16){
    console.log(`não vota`)
}else if (idade <18 || idade >65){
    console.log(`voto opcional`)
}else{
    console.log(`voto obrigatorio`)
}