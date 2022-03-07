//solução 01

//criação da função
function verificaPalindromo(string) {
    //!forma de verificar se a condicional é vazia, nula ou undefined
    if(!string) return;
    //split para separar todas as letras
    //Reverse para retornar array revertido
    //join para juntar em string
    //equivaler a string
    return string.split("").reverse().join("") === string;
}
//a função deve ser chamada fora da sua definição.
//é necessário o console.log para ativar o retorno e ver no terminal
console.log(verificaPalindromo("ovo"))


//solução 02
//não é necessário percorrer a string inteira, apenas metade dela
//a comparação deve ser feita entre o primeiro caractere e o último
//após a primeira comparação, as demais devem ser feitas de fora para dentro
function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    //fazer loop de for com lenght/2
    for(let i=0; i<string.length/2; i++)
    //condicional para os caracteres nas pontas dos indices
    //é necesssário colocar [] para comparar caracter com caracter
    if(string[i] !== string[string.length-1-i]){
        //retorno da verificação
        return false;
    }
    //se a função não for parada no false, retornar true
    return true;
}
console.log(verificaPalindromo2("abba"));
