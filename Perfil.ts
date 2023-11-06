import { postagem, postagem_avancada, Hashtag } from "./postagens";

class Perfil {
    private _id: number;
    private _nome: string;
    private _user: string;
    private _email: string;
    private _senha: string;
    private _postagens: postagem[];
    private _postagensInteragidas: postagem[] = [];
    private _postagensVistas: postagem[] = []
    private _seguidores: Perfil[] = [];
    private _numeroSeguidores: number = this._seguidores.length;

    constructor(nome: string, user: string, email: string, senha: string) {
        this._id = 0;
        this._nome = nome;
        this._user = user;
        this._email = email;
        this._senha = senha;
        this._postagens = [];
    }

    public inserir_postagem(postagem: postagem) {
        this._postagens.push(postagem);
    }

    public mostrarTodasAsPostagens() {
        console.log(`@${this.get_user()}, ${this.get_numeroSeguidores()} Seguidores:`);
        console.log("Postagens: \n\n")
        
        for (const postagem of this._postagens) {
            console.log('------------------------------');
            if (postagem.get_emalta()) {
                console.log("***EM ALTA***")
            }
            console.log(`${postagem.get_texto()}`);
            console.log(`Curtidas: ${postagem.get_curtidas()} | Descurtidas: ${postagem.get_descurtidas()}`);
            console.log(`${postagem.get_data()}`);
            console.log('------------------------------\n');
        }
    }
    
    

    public get_id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get_nome() {
        return this._nome;
    }

    public get_user() {
        return this._user;
    }

    public get_email() {
        return this._email;
    }

    public get_senha() {
        return this._senha;
    }

    public get_postagens() {
        return this._postagens;
    }

    public get_seguidores(){
        return this._seguidores;
    }

    public get_numeroSeguidores(){
        return this._numeroSeguidores;
    }

    public curtirPostagem(postagem: postagem) {
        if (!this._postagensInteragidas.includes(postagem)) {
            postagem.curtir(this);
            this._postagensInteragidas.push(postagem);
        } else {
            console.log("Você já interagiu esta postagem.");
        }
    }
    
    public descurtirPostagem(postagem: postagem) {
        if (!this._postagensInteragidas.includes(postagem)) {
            postagem.descurtir(this);
            this._postagensInteragidas.push(postagem);
        } else {
            console.log("Você já interagiu esta postagem.");
        }
    }
    
    

    public ViuPost(postagem: postagem){
        if (!this._postagensVistas.includes(postagem)) {
            if (postagem instanceof postagem_avancada) {
                postagem.FoiVisto = false;
                postagem.DecrementarVisualizacao();
            }
            this._postagensVistas = this._postagensVistas.filter(p => p !== postagem);
        } else {
            console.log("Você viu esta postagem.");
        }
    }

    public adicionarSeguidor(seguidor: Perfil) {
        this._seguidores.push(seguidor);
        this._numeroSeguidores = this._seguidores.length;
    }

    public seguir_perfil(ContaSeguida: Perfil) {
        if (ContaSeguida.get_seguidores().includes(this)) {
            console.log("Você já está seguindo este perfil.");
        } else {
            ContaSeguida.adicionarSeguidor(this);
        }
    }
    
    
    
}

export {Perfil};