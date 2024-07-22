const prompt = require('prompt-sync')({ sigint: true });

let atividades = [];

const adicionarAtividade = (dia, atividade) => {
    let diaAtividades = atividades.find(a => a.dia === dia);
    if (!diaAtividades) {
        diaAtividades = { dia, atividades: [] };
        atividades.push(diaAtividades);
    }
    diaAtividades.atividades.push(atividade);
};

const listarAtividades = () => {
    atividades.forEach(diaAtividades => {
        console.log(`Dia: ${diaAtividades.dia}`);
        let index = 1;
        diaAtividades.atividades.forEach(atividade => {
            console.log(index + `  - ${atividade}`);
            index ++;
        });
    });
};

const atualizarAtividade = (dia, indice, novaAtividade) => {
    const diaAtividades = atividades.find(a => a.dia === dia);
    if (diaAtividades && diaAtividades.atividades[indice]) {
        diaAtividades.atividades[indice] = novaAtividade;
    } else {
        console.log('Atividade não encontrada!');
    }
};

const deletarAtividade = (dia, indice) => {
    const diaAtividades = atividades.find(a => a.dia === dia);
    if (diaAtividades && diaAtividades.atividades[indice]) {
        diaAtividades.atividades.splice(indice, 1);
        if (diaAtividades.atividades.length === 0) {
            atividades = atividades.filter(a => a.dia !== dia);
        }
    } else {
        console.log('Atividade não encontrada!');
    }
};

module.exports = {
    adicionarAtividade,
    listarAtividades,
    atualizarAtividade,
    deletarAtividade
};
