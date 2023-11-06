import { Perfil } from "./Perfil";

class Hashtag {
    nome: string[];

    constructor(nome: string[]) {
        this.nome = nome;
    }
}

class postagem {
    id: number;
    private perfil: Perfil;
    private texto: any;
    private curtidas: number;
    private descurtidas: number;
    private data: string;
    public foiCurtida: boolean = false;
    public foiDescurtida: boolean = false;

    constructor(perfil: Perfil, texto: any) {
        this.id = 0;
        this.perfil = perfil;
        this.texto = texto;
        this.curtidas = 0;
        this.descurtidas = 0;
        this.data = new Date().toLocaleDateString();
    }

    public get_perfil() {
        return this.perfil;
    }

    public get_texto() {
        return this.texto;
    }

    public get_curtidas() {
        return this.curtidas;
    }

    public get_descurtidas() {
        return this.descurtidas;
    }

    public get_data() {
        return this.data;
    }

    public curtir() {
        if (!this.foiCurtida) {
            this.curtidas++;
            this.descurtidas--;
            if (this.descurtidas < 0) {
                this.descurtidas = 0;
            }
            this.foiCurtida = true;
        } else {
            console.log("Você já curtiu esta postagem.");
        }
    }

    public descurtir() {
        if (!this.foiDescurtida) {
            this.descurtidas++;
            this.curtidas--;
            if (this.curtidas < 0) {
                this.curtidas = 0;
            }
            this.foiDescurtida = true;
        } else {
            console.log("Você já descurtiu esta postagem.");
        }
    }
}

class postagem_avancada extends postagem {
    hashtags: Hashtag;
    public VisualizacaoRestante: number;
    public FoiVisto: boolean = false;

    constructor(perfil: Perfil, texto: any, hashtags: Hashtag) {
        super(perfil, texto);
        this.hashtags = hashtags;
        this.VisualizacaoRestante = 5;
        this.FoiVisto = false;
    }

    public get_hashtags() {
        return this.hashtags;
    }

    public DecrementarVisualizacao() {
        if (!this.FoiVisto) {
            this.VisualizacaoRestante--;
            this.FoiVisto = true;
        } else {
            console.log("Já foi visto por você.");
        }
    }
}

export {postagem, postagem_avancada, Hashtag}