"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeSocial = void 0;
// IMPORTS
const readline = require('readline-sync');
const postagens_1 = require("./postagens");
const prova_poo_1 = require("./prova_poo");
// FUNÇÕES
function getDataAtual() {
    const agora = new Date();
    const diaSemana = agora.toLocaleDateString(undefined, { weekday: 'long' });
    const data = agora.toLocaleDateString();
    return `${diaSemana}, ${data}`;
}
const dataAtual = getDataAtual();
function getHoraAtual() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString();
    return `${hora}`;
}
// CLASSE
class RedeSocial {
    constructor() {
        this.perfil = [];
        this.post = [];
        this.lastPerfilId = 0;
        this.lastPostId = 0;
    }
    getNextPerfilId() {
        this.lastPerfilId++;
        return this.lastPerfilId;
    }
    getNextPostId() {
        this.lastPostId++;
        return this.lastPostId;
    }
    inserir_perfil(perfil) {
        perfil.id = this.getNextPerfilId();
        this.perfil.push(perfil);
    }
    inserir_post(post) {
        post.id = this.getNextPostId();
        this.post.push(post);
    }
    consultar(perfil) {
        let perfilBuscado;
        for (let conta of this.perfil) {
            if (conta === perfil) {
                perfilBuscado = conta;
                break;
            }
        }
        return perfilBuscado;
    }
    buscar_perfil(pessoa) {
        let perfilBuscado;
        for (let conta of this.perfil) {
            if (conta.get_user() === pessoa) {
                perfilBuscado = conta;
                break;
            }
        }
        return perfilBuscado;
    }
    validar_login(login, senha) {
        let perfilBuscado;
        for (let conta of this.perfil) {
            if ((conta.get_email() === login || conta.get_user() === login) && conta.get_senha() === senha) {
                perfilBuscado = conta;
                break;
            }
        }
        return perfilBuscado;
    }
    criar_conta(perfil) {
        let perfilBuscado = this.consultar(perfil);
        if (perfilBuscado == null) {
            this.inserir_perfil(perfil);
        }
        else {
            console.log("CONTA JÁ EXISTENTE");
        }
    }
    login(login, senha) {
        let perfilBuscado = this.validar_login(login, senha);
        if (perfilBuscado != null) {
            this.home(perfilBuscado);
        }
        else {
            console.log("CONTA NÃO EXISTENTE");
        }
    }
    filtrarPostagensPorHashtag(hashtag) {
        const postagensEncontradas = [];
        for (const postagem of this.post) {
            if (postagem instanceof postagens_1.postagem_avancada) {
                const hashtags = postagem.get_hashtags().nome;
                if (hashtags.includes(hashtag)) {
                    postagensEncontradas.push(postagem);
                }
            }
        }
        return postagensEncontradas;
    }
    buscarPostagens(textoBuscado) {
        const postagensEncontradas = [];
        for (const postagem of this.post) {
            if (postagem.get_texto().toLowerCase().includes(textoBuscado.toLowerCase())) {
                let postagemFormatada = `Texto: ${postagem.get_texto()}\n`;
                postagemFormatada += `Curtidas: ${postagem.get_curtidas()} | Descurtidas: ${postagem.get_descurtidas()}\n`;
                postagemFormatada += `Data: ${postagem.get_data()}\n`;
                if (postagem instanceof postagens_1.postagem_avancada) {
                    const hashtags = postagem.get_hashtags().nome.map(hashtag => `#${hashtag}`);
                    postagemFormatada += `Hashtags: ${hashtags.join(', ')}\n`;
                }
                postagensEncontradas.push(postagemFormatada);
            }
        }
        return postagensEncontradas;
    }
    home(perfil) {
        console.clear();
        console.log("------------------------------");
        console.log(dataAtual + "\nUsuário: " + perfil.get_nome());
        console.log("------------------------------");
        var resposta = readline.question("\n 1 - CRIAR POSTAGEM \n 2 - BUSCAR \n 3 - NAVEGAR ENTRE POSTAGENS \n 4 - LOGOUT \n\nDIGITE A OPÇÃO: ");
        console.log("------------------------------");
        switch (resposta) {
            case "1":
                console.clear();
                console.log(perfil.get_user());
                var texto = readline.question("\n Como está se sentindo hoje? \n>> ");
                var cc = 0;
                var lista = [];
                while (true) {
                    var add = readline.question("\n Hashtags: " + lista + "\n Caso não deseje colocar mais hashtags ou não adicionar nenhuma, digite (1) para concluir a postagem. \n>> #");
                    if (add === "1") {
                        break;
                    }
                    add = "#" + add;
                    lista.push(add);
                }
                lista = lista.filter(item => item !== "#1");
                if (lista.length === 0) {
                    let post = new postagens_1.postagem(perfil, texto);
                    perfil.inserir_postagem(post);
                    this.inserir_post(post);
                    console.log(post);
                }
                else {
                    let hashtags = new postagens_1.Hashtag(lista);
                    let post = new postagens_1.postagem_avancada(perfil, texto, hashtags);
                    perfil.inserir_postagem(post);
                    this.inserir_post(post);
                }
                this.home(perfil);
                break;
            case "2":
                console.clear();
                while (true) {
                    console.clear();
                    var opcao = readline.question("1- BUSCAR USUÁRIO \n2- BUSCAR POSTAGEM \n3- SAIR \n>> ");
                    switch (opcao) {
                        case "1":
                            console.clear();
                            var busca = readline.question("DIGITE O USUÁRIO DO PERFIL \n>> ");
                            let perfilBuscado = this.buscar_perfil(busca);
                            if (perfilBuscado != null) {
                                perfilBuscado.mostrarTodasAsPostagens();
                                var escolha = readline.question("DESEJA SEGUIR ESTE PERFIL? (1-SIM | 2-NAO) \n>> ");
                                if (escolha == "1") {
                                    perfil.seguir_perfil(perfilBuscado);
                                }
                                else {
                                    break;
                                }
                            }
                            else {
                                console.log("USUÁRIO NÃO EXISTENTE");
                            }
                            break;
                        case "2":
                            console.clear();
                            var opcao = readline.question("1- TEXTO \n2- HASHTAG \n>> ");
                            if (opcao == "1") {
                                console.clear();
                                var busca = readline.question("DIGITE O TEXTO: ");
                                this.buscarPostagens(busca);
                            }
                            else {
                                console.clear();
                                var busca = readline.question("DIGITE O TEXTO: ");
                                this.filtrarPostagensPorHashtag(busca);
                            }
                            break;
                        case "3":
                            this.home(perfil);
                            break;
                        default:
                            break;
                    }
                }
                break;
            case "3":
                this.navegar(perfil);
                break;
            case "4":
                (0, prova_poo_1.menu_inicial)();
                break;
            default:
                break;
        }
    }
    navegar(perfil) {
        console.clear();
        console.log(dataAtual + "\nNavegar entre postagens de todas as contas:\n");
        const todasPostagens = this.post;
        if (todasPostagens.length === 0) {
            console.log("Nenhuma postagem disponível para navegar.");
            readline.question("Pressione Enter para voltar ao menu.");
            return;
        }
        let postagemIndex = 0;
        while (true) {
            const postagemAtual = todasPostagens[postagemIndex];
            // Verifica se a postagem atual é uma postagem avançada e se tem visualizações restantes
            if (!(postagemAtual instanceof postagens_1.postagem_avancada) || postagemAtual.VisualizacaoRestante > 0) {
                console.clear();
                const perfildaPostagem = postagemAtual.get_perfil();
                console.log(`Postagem ${postagemIndex + 1} de ${todasPostagens.length}`);
                console.log("------------------------------");
                console.log(`@${perfildaPostagem.get_user()} - ${perfildaPostagem.get_numeroSeguidores()} Seguidores`);
                console.log(`${postagemAtual.get_texto()} - ${postagemAtual.get_data()}`);
                if (postagemAtual instanceof postagens_1.postagem_avancada) {
                    const hashtags = postagemAtual.get_hashtags().nome.map(hashtag => `#${hashtag}`);
                    console.log(`${hashtags.join(', ')}`);
                    console.log(`Visualizações Restantes: ${postagemAtual.VisualizacaoRestante}`);
                }
                console.log("------------------------------");
                console.log(`Curtidas: ${postagemAtual.get_curtidas()} | Descurtidas: ${postagemAtual.get_descurtidas()}`);
                console.log("------------------------------");
                console.log("Ações:");
                console.log("1 - Curtir");
                console.log("2 - Descurtir");
                console.log("3 - Próxima Postagem");
                console.log("4 - Voltar ao Menu");
                const acao = readline.question("Digite a opção: ");
                switch (acao) {
                    case "1":
                        console.clear();
                        perfil.curtirPostagem(postagemAtual);
                        console.log("Postagem curtida!");
                        break;
                    case "2":
                        console.clear();
                        perfil.descurtirPostagem(postagemAtual);
                        console.log("Postagem descurtida!");
                        break;
                    case "3":
                        console.clear();
                        if (postagemAtual instanceof postagens_1.postagem_avancada) {
                            perfil.ViuPost(postagemAtual);
                        }
                        postagemIndex = (postagemIndex + 1) % todasPostagens.length;
                        break;
                    case "4":
                        this.home(perfil);
                    default:
                        console.log("Opção inválida.");
                        break;
                }
            }
            else {
                // Se a postagem é uma postagem avançada sem visualizações, vá para a próxima postagem
                postagemIndex = (postagemIndex + 1) % todasPostagens.length;
            }
        }
    }
}
exports.RedeSocial = RedeSocial;
