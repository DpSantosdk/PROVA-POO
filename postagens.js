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
        this.EmAlta = false;
        this.id = 0;
        this.perfil = perfil;
        this.texto = texto;
        this.curtidas = 0;
        this.descurtidas = 0;
        this.foiCurtida = false;
        this.foiDescurtida = false;
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
    get_emalta() {
        return this.EmAlta;
    }
    EhPopular() {
        if (this.curtidas - this.descurtidas > (this.curtidas / 2)) {
            this.EmAlta = true;
        }
    }
    curtir(perfil) {
        this.curtidas++;
        this.EhPopular();
    }
    descurtir(perfil) {
        this.descurtidas++;
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
