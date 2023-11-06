"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hashtag = exports.postagem_avancada = exports.postagem = void 0;
class Hashtag {
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Hashtag = Hashtag;
class postagem {
    constructor(perfil, texto) {
        this.foiCurtida = false;
        this.foiDescurtida = false;
        this.id = 0;
        this.perfil = perfil;
        this.texto = texto;
        this.curtidas = 0;
        this.descurtidas = 0;
        this.data = new Date().toLocaleDateString();
    }
    get_perfil() {
        return this.perfil;
    }
    get_texto() {
        return this.texto;
    }
    get_curtidas() {
        return this.curtidas;
    }
    get_descurtidas() {
        return this.descurtidas;
    }
    get_data() {
        return this.data;
    }
    curtir() {
        if (!this.foiCurtida) {
            this.curtidas++;
            this.descurtidas--;
            if (this.descurtidas < 0) {
                this.descurtidas = 0;
            }
            this.foiCurtida = true;
        }
        else {
            console.log("Você já curtiu esta postagem.");
        }
    }
    descurtir() {
        if (!this.foiDescurtida) {
            this.descurtidas++;
            this.curtidas--;
            if (this.curtidas < 0) {
                this.curtidas = 0;
            }
            this.foiDescurtida = true;
        }
        else {
            console.log("Você já descurtiu esta postagem.");
        }
    }
}
exports.postagem = postagem;
class postagem_avancada extends postagem {
    constructor(perfil, texto, hashtags) {
        super(perfil, texto);
        this.FoiVisto = false;
        this.hashtags = hashtags;
        this.VisualizacaoRestante = 5;
        this.FoiVisto = false;
    }
    get_hashtags() {
        return this.hashtags;
    }
    DecrementarVisualizacao() {
        if (!this.FoiVisto) {
            this.VisualizacaoRestante--;
            this.FoiVisto = true;
        }
        else {
            console.log("Já foi visto por você.");
        }
    }
}
exports.postagem_avancada = postagem_avancada;
