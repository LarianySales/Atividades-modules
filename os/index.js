// Atividade 1: Informações do Sistema Operacional
// ● Escreva um código que exiba o nome da plataforma do sistema operacional
// em que o Node.js está sendo executado.
// ● Em seguida, exiba também a arquitetura do sistema operacional.

// const os = require('os')

// const plataforma = os.platform()
// const arquitetura = os.arch()

// console.log(plataforma)

// console.log(arquitetura)
//------------------------------------------------------
// Atividade 2: Informações do Processador
// ● Escreva um código que exiba as informações de cada processador do
// sistema, incluindo a velocidade, o modelo e o identificador.
// ● Utilize o método os.cpus() para obter as informações.
// const os = require('os')
// const info = os.cpus()
// console.log(info)
//---------------------------------------------------------
// Atividade 3: Informações de Memória
// ● Escreva um código que exiba a quantidade total de memória do sistema em
// bytes.
// ● Em seguida, converta o valor para uma unidade mais legível, como kilobytes
// (KB), megabytes (MB) ou gigabytes (GB).
// const os = require("node:os");
// const memoria = os.freemem();

// const kilobytes = Math.floor(memoria / 1024);
// const mega = Math.floor(kilobytes / 1024);
// const giga = Math.floor(mega / 1024);

// const rG = giga % 1024;
// const rM = mega % 1024;
// const rK = kilobytes % 1024;

// console.log("Free memory: " + rG + "GB " + rM + "MB " + rK + "KB ");
//---------------------------------------------------------------
// Atividade 4: Informações do Usuário
// ● Escreva um código que exiba o nome do usuário do sistema atual.
// // ● Em seguida, exiba também o diretório inicial do usuário.

// const os = require('os')
//  const user = os.hostname
//  const diretorio = os.homedir

//  console.log(`Diretório: ${diretorio} Usuário: ${user}`)
// Atividade 5: Detalhes do Sistema Operacional
// ● Escreva um código que exiba informações detalhadas sobre o sistema
// operacional, como o nome, a versão e a plataforma.
// ● Utilize os métodos apropriados do módulo OS para obter as informações
// necessárias.

// const os = require('os')

// const versao = os.release() 
//  const nome = os.type()
// const plataforma = os.platform()
// console.log(`Versão: ${versao} Nome:${nome} Plataforma:${plataforma} `)

//------------------------------------------------------------
// Atividade 6: Pesquise outros métodos e propriedades do módulo OS
// ● Crie um código que exiba informações adicionais do sistema operacional,
// como número IPV4 e IPV6 de rede,
// ● Informações de tempo de atividade do sistema operacional em Horas,
// minutos e segundos
// ● Diretórios temporários.

// const os =require('os')

// const seg = os.uptime()
// const hora = (seg /60).toFixed(2)



// console.log(os.networkInterfaces() )
// console.log(`Horas: ${hora}.`)

