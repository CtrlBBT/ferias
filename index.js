const prompt = require('prompt-sync')({ sigint: true });
const { adicionarAtividade, listarAtividades, atualizarAtividade, deletarAtividade } = require('./functions');

const menu = () => {
    console.log('1. Adicionar Atividade');
    console.log('2. Listar Atividades');
    console.log('3. Atualizar Atividade');
    console.log('4. Deletar Atividade');
    console.log('5. Sair');
};

const main = () => {
    let running = true;

    while (running) {
        menu();
        const opcao = prompt('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                const dia = prompt('Informe o dia: ');
                const atividade = prompt('Informe a atividade: ');
                adicionarAtividade(dia, atividade);
                break;
            case '2':
                listarAtividades();
                break;
            case '3':
                const diaAtualizar = prompt('Informe o dia da atividade a ser atualizada: ');
                const indiceAtualizar = prompt('Informe o índice da atividade a ser atualizada: ');
                const novaAtividade = prompt('Informe a nova atividade: ');
                atualizarAtividade(diaAtualizar, parseInt(indiceAtualizar), novaAtividade);
                break;
            case '4':
                const diaDeletar = prompt('Informe o dia da atividade a ser deletada: ');
                const indiceDeletar = prompt('Informe o índice da atividade a ser deletada: ');
                deletarAtividade(diaDeletar, parseInt(indiceDeletar));
                break;
            case '5':
                running = false;
                break;
            default:
                console.log('Opção inválida!');
        }
    }
};

main();
