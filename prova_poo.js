"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu_inicial = void 0;
//IMPORTS
const readline = require('readline-sync');
const Perfil_1 = require("./Perfil");
const postagens_1 = require("./postagens");
const RedeSocial_1 = require("./RedeSocial");
// FUNÇÕES
function menu_inicial() {
    while (true) {
        console.clear();
        console.log("BEM VINDO AO BRASILTTER");
        console.log("1 - FAZER LOGIN");
        console.log("2 - CRIAR NOVO PERFIL");
        var escolha = readline.question("\nDIGITE O NÚMERO DA OPÇÃO: ");
        if (escolha === "1") {
            console.clear();
            var email = readline.question("LOGIN: ");
            var senha = readline.question("SENHA: ");
            if (email === null || senha === null) {
                console.log("PREENCHA OS CAMPOS CORRETAMENTE");
            }
            else {
                b.login(email, senha);
            }
        }
        else if (escolha === "2") {
            console.clear();
            var nome = readline.question("NOME: ");
            var user = readline.question("USUÁRIO: ");
            var email = readline.question("EMAIL: ");
            var senha = readline.question("SENHA: ");
            if (nome === null || user === null || email === null || senha === null) {
                console.log("PREENCHA TODOS OS CAMPOS CORRETAMENTE");
            }
            else {
                const novoPerfil = new Perfil_1.Perfil(nome, user, email, senha);
                b.criar_conta(novoPerfil);
                console.log("CONTA CRIADA COM SUCESSO!");
            }
        }
        else {
            console.log("OPÇÃO INVÁLIDA");
        }
    }
}
exports.menu_inicial = menu_inicial;
let b = new RedeSocial_1.RedeSocial();
// Criando e adicionando contas
var dom = new Perfil_1.Perfil("Dom", "DP_santos", "email1@.com", "25ko");
2;
var alice = new Perfil_1.Perfil("Alice", "Alizinha", "email2@.com", "password123");
var bob = new Perfil_1.Perfil("Bob", "B0bo", "email3@.com", "mysecretpassword");
var carol = new Perfil_1.Perfil("Carol", "C_4rol", "email4@.com", "123456");
var david = new Perfil_1.Perfil("David", "Dz", "email5@.com", "david123");
b.criar_conta(dom);
b.criar_conta(alice);
b.criar_conta(bob);
b.criar_conta(carol);
b.criar_conta(david);
// Criação de postagens
const hashtags1 = new postagens_1.Hashtag(["natureza", "viagem"]);
const hashtags2 = new postagens_1.Hashtag(["comida", "receita"]);
const hashtags3 = new postagens_1.Hashtag(["arte", "pintura"]);
const hashtags4 = new postagens_1.Hashtag(["música", "show"]);
const hashtags5 = new postagens_1.Hashtag(["tecnologia", "programação"]);
const post1 = new postagens_1.postagem_avancada(dom, "Dia maravilhoso na praia!", hashtags1);
const post2 = new postagens_1.postagem(alice, "Deliciosa receita de bolo de chocolate.");
const post3 = new postagens_1.postagem(carol, "Nova pintura que fiz hoje.");
const post4 = new postagens_1.postagem(bob, "Show incrível na noite passada.");
const post5 = new postagens_1.postagem_avancada(david, "Programando em JavaScript.", hashtags5);
const post6 = new postagens_1.postagem(alice, "Minha viagem à Europa.");
const post7 = new postagens_1.postagem(david, "Aprendendo a tocar guitarra.");
const post8 = new postagens_1.postagem_avancada(bob, "Receita de risoto de cogumelos.", hashtags4);
const post9 = new postagens_1.postagem(carol, "Minha última obra de arte.");
const post10 = new postagens_1.postagem_avancada(dom, "Trilha sonora do meu dia.", hashtags2);
const post11 = new postagens_1.postagem(bob, "Concerto de música clássica.");
const post12 = new postagens_1.postagem(alice, "Aventura na montanha.");
dom.inserir_postagem(post1);
alice.inserir_postagem(post2);
carol.inserir_postagem(post3);
bob.inserir_postagem(post4);
david.inserir_postagem(post5);
alice.inserir_postagem(post6);
david.inserir_postagem(post7);
bob.inserir_postagem(post8);
carol.inserir_postagem(post9);
dom.inserir_postagem(post10);
bob.inserir_postagem(post11);
alice.inserir_postagem(post12);
b.inserir_post(post1);
b.inserir_post(post2);
b.inserir_post(post3);
b.inserir_post(post4);
b.inserir_post(post5);
b.inserir_post(post6);
b.inserir_post(post7);
b.inserir_post(post8);
b.inserir_post(post9);
b.inserir_post(post10);
b.inserir_post(post11);
b.inserir_post(post12);
menu_inicial();
console.log(b.perfil);
