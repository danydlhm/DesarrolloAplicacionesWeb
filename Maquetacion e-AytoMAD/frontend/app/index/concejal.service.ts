export class Concejal{
    private name:string;
    private urlFoto:string;
    private contacto:Array<string>;
    private descripcion:string;
    
    constructor (name:string,urlFoto:string,contactos:Array<string>,desc:string){
        this.name = name;
        this.urlFoto = urlFoto;
        this.contacto = contactos;
        this.descripcion = desc;
    }
    constructor (name:string,urlFoto:string){
        this.name = name;
        this.urlFoto = urlFoto;
        this.contacto = new Array<string>;
        this.descripcion = "";
    }
    
    getName(){
        return this.name;
    }
    
    getUrl(){
        return this.urlFoto;
    }
    
    getContactos(){
        return this.contacto;
    }
    
    getDesc(){
        return this.descripcion;
    }
    
    toString (){
        return "Nombre: "+this.nombre+"Foto: "+this.urlFoto;
    }
}
