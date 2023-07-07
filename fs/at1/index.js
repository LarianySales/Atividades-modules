//Atividade 1: Ler o conteúdo de um arquivo
// Escreva um programa em Node.js que leia o conteúdo de um arquivo de texto e
// exiba seu conteúdo no console.
// const fs = require('fs')

// fs.readFile('arquivo.txt','utf8',function(err,data){
//     console.log(data)
// })

//------------------------------------------------
// Atividade 2: Criar um novo arquivo
// Escreva um programa em Node.js que crie um novo arquivo de texto e escreva nele
// uma mensagem de sua escolha.

// const fs = require('fs') 

// fs.writeFile('test1.txt','escrito algo',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Arquivo criado')
//     }
   
// })

//-------------------------------------------
// Atividade 3: Adicionar conteúdo a um arquivo existente
// Escreva um programa em Node.js que adicione uma nova linha de texto a um
// arquivo existente de texto.
// const fs = require('fs')


// fs.appendFile('test1.txt','\n ola',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("ok")
//     }
// })

//---------------------------------------------------------
// Atividade 4: Copiar um arquivo
// Escreva um programa em Node.js que copie o conteúdo de um arquivo para um
// novo arquivo com um nome diferente.

// const fs = require('fs')

// fs.copyFile('test1.txt','destinacao.txt',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("ok")
//     }
// })

//--------------------------------------------
// Atividade 5: Renomear um arquivo
// Escreva um programa em Node.js que renomeie um arquivo existente para um novo
// nome.
// const fs = require('fs')
// fs.rename('arquivo.txt','newArq.txt',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("ok")
//     }
// })
//----------------------------------------
// Atividade 6: Excluir um arquivo
// Escreva um programa em Node.js que exclua um arquivo existente.
// const fs = require('fs')

// fs.unlink('newArq.txt',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("ok")
//     }
// })
//-------------------------------------------------
// Atividade 7: Verificar se um arquivo existe
// Escreva um programa em Node.js que verifique se um arquivo específico existe ou
// não.

// const fs = require('fs')
// const file = 'destinacao.txt'

// if(fs.existsSync(file)){
//     console.log('arquivo existe')
// }else{
//     console.log('Aquivo não existe')
// }