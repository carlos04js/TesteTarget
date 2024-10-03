/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.   */
function PorcetagemeFaturamneto() {
let = sp = 67836.43, rj = 36678.66, mg = 29229.88, es = 27165.48, outros = 19849.53;

let total = sp + rj + mg + es + outros;
let percentualSP = (sp / total) * 100;
let percentualRJ = (rj / total) * 100;
let percentualMG = (mg / total) * 100;
let percentualES = (es / total) * 100;
let percentualOutros = (outros / total) * 100;

return `O percentual de representação de SP é de ${percentualSP.toFixed(2)}%.,
O percentual de representação de RJ é de ${percentualRJ.toFixed(2)}%.,
O percentual de representação de MG é de ${percentualMG.toFixed(2)}%.,
O percentual de representação de ES é de ${percentualES.toFixed(2)}%.,
O percentual de representação de Outros é de ${percentualOutros.toFixed(2)}%.`;

}

console.log(PorcetagemeFaturamneto());
