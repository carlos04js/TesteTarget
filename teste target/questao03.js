/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

function FaturamentoDiario() {
    const faturamentoDiario = {
        "01": 1000,
        "02": 2000,
        "03": 3000,
        "04": 4000,
        "05": 5000,
        "06": 6000,
        "07": 7000,
        "08": 8000,
        "09": 9000,
        "10": 10000,
        "11": 11000,
        "12": 12000,
        "13": 13000,
        "14": 14000,
        "15": 15000,
        "16": 16000,
        "17": 17000,
        "18": 18000,
        "19": 19000,
        "20": 20000,
        "21": 21000,
        "22": 22000,
        "23": 23000,
        "24": 24000,
        "25": 25000,
        "26": 26000,
        "27": 27000,
        "28": 28000,
        "29": 29000,
        "30": 30000,

        };
    
        const faturamento = Object.values(faturamentoDiario);
        const mediaMensal = faturamento.reduce((acc, curr) => acc + curr, 0) / faturamento.length;
        const diasAcimaDaMedia = faturamento.filter(faturamento => faturamento > mediaMensal).length;
    
        return `O menor valor de faturamento diário é R$${Math.min(...faturamento).toFixed(2)}.
    O maior valor de faturamento diário é R$${Math.max(...faturamento).toFixed(2)}.
    Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaDaMedia}.`;
    }

    console.log(FaturamentoDiario());