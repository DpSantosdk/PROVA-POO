"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
const postagens_1 = require("./postagens");
class Perfil {
    constructor(nome, user, email, senha) {
        this._postagensInteragidas = [];
        this._postagensVistas = [];
        this._seguidores = [];
        this._numeroSeguidores = this._seguidores.length;
        this._id = 0;
        this._nome = nome;
        this._user = user;
        this._email = email;
        this._senha = senha;
        this._postagens = [];
    }
    inserir_postagem(postagem) {
        this._postagens.push(postagem);
    }
    mostrarTodasAsPostagens() {
        console.log(`@${this.get_user()}, ${this.get_numeroSeguidores()} Seguidores:`);
        console.log("Postagens: \n\n");
        for (const postagem of this._postagens) {
            if (postagem.get_emalta()) {
                console.log("***EM ALTA***");
            }
            console.log(`${postagem.get_texto()}`);
            console.log(`Curtidas: ${postagem.get_curtidas()} | Descurtidas: ${postagem.get_descurtidas()}`);
            console.log(`${postagem.get_data()}`);
            console.log('------------------------------');
        }
    }
    get_id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get_nome() {
        return this._nome;
    }
    get_user() {
        return this._user;
    }
    get_email() {
        return this._email;
    }
    get_senha() {
        return this._senha;
    }
    get_postagens() {
        return this._postagens;
    }
    get_seguidores() {
        return this._seguidores;
    }
    get_numeroSeguidores() {
        return this._numeroSeguidores;
    }
    curtirPostagem(postagem) {
        if (!this._postagensInteragidas.includes(postagem)) {
            postagem.curtir(this);
            this._postagensInteragidas.push(postagem);
        }
        else {
            console.log("Você já interagiu esta postagem.");
        }
    }
    descurtirPostagem(postagem) {
        if (!this._postagensInteragidas.includes(postagem)) {
            postagem.descurtir(this);
            this._postagensInteragidas.push(postagem);
        }
        else {
            console.log("Você já interagiu esta postagem.");
        }
    }
    ViuPost(postagem) {
        if (!this._postagensVistas.includes(postagem)) {
            if (postagem instanceof postagens_1.postagem_avancada) {
                postagem.FoiVisto = false;
                postagem.DecrementarVisualizacao();
            }
            this._postagensVistas = this._postagensVistas.filter(p => p !== postagem);
        }
        else {
            console.log("Você viu esta postagem.");
        }
    }
    adicionarSeguidor(seguidor) {
        this._seguidores.push(seguidor);
        this._numeroSeguidores = this._seguidores.length;
    }
    seguir_perfil(ContaSeguida) {
        if (ContaSeguida.get_seguidores().includes(this)) {
            console.log("Você já está seguindo este perfil.");
        }
        else {
            ContaSeguida.adicionarSeguidor(this);
        }
    }
}
exports.Perfil = Perfil;
