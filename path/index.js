// Atividade 1: Obter o nome do arquivo de um caminho completo
// Crie um programa que recebe um caminho completo de um arquivo e utiliza o
// módulo path para extrair o nome do arquivo. Em seguida, exiba o nome do arquivo
// no console.
// ● Exemplo de entrada: /usr/local/bin/script.js
// ● Saída esperada: script.js

// const path = require('path')

// const nomeArq = path.basename('/user/maq/bin/compter.html')

// console.log(nomeArq)

//-----------------------------------------------

// Atividade 2: Verificar se um caminho é absoluto ou relativo
// Crie um programa que recebe um caminho e utiliza o módulo path para verificar se o
// caminho é absoluto ou relativo. Em seguida, exiba a mensagem "Caminho absoluto"
// ou "Caminho relativo" no console, dependendo do resultado.
// ● Exemplo de entrada: /usr/local/bin
// ○ Saída esperada: Caminho absoluto
// ● Exemplo de entrada: ./arquivo.txt
// ○ Saída esperada: Caminho relativo

// node index.js caminho=./arquivo.txt

// const path = require('path')

// const args = process.argv.slice(1)

// const caminho = args[0]
// console.log(caminho)

// if(path.isAbsolute(caminho)){
//     console.log("Caminho absoluto")
// }else if(path.relative(caminho)){
//     console.log("Caminho relativo")
// }

// const fs = require('fs')



// })
//---------------------------------------------
// Atividade 3: Concatenar caminhos
// Crie um programa que recebe dois caminhos e utiliza o módulo path para
// concatená-los em um único caminho. Em seguida, exiba o caminho resultante no
// console.
// ● Exemplo de entrada:
// ○ Caminho 1: /usr/local
// ○ Caminho 2: bin/script.js
// ● Saída esperada: /usr/local/bin/script.js


//node index.js caminho1=  caminho2=

// const path = require('path')
// const args = process.argv.slice(2)

// const caminho1 = args[0]

// const caminho2 = args[0]

// const final = {
//     root:'/',
//  dir:`${caminho1}`,
//  base:`${caminho2}`
// }
// const o = path.format(final)
// console.log(o)
//-------------------------------------------------
// Atividade 4: Normalizar um caminho
// Crie um programa que recebe um caminho e utiliza o módulo path para
// normalizá-lo, removendo quaisquer sequências de diretórios redundantes ou pontos
// de referência. Em seguida, exiba o caminho normalizado no console.
// ● Exemplo de entrada: /usr/local/../bin/script.js
// ● Saída esperada: /usr/bin/script.js
// const path = require('path')

// const caminho = "/usr/local/../bin/script.js"

// const normal = path.normalize(caminho)

// console.log(normal)


