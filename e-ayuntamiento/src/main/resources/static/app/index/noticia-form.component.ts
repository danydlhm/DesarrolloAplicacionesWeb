import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {MultipartItem} from "../multipart-upload/multipart-item";
import {MultipartUploader} from "../multipart-upload/multipart-uploader";
import {Noticia, NoticiaService}   from './noticia.service';

@Component({
  template: `
  <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center " *ngIf="noticia">
            <h2>Noticia "{{noticia.title}}"</h2>
            <h4>Noticia "{{noticia.subtitle}}"</h4>
            <div *ngIf="noticia.id">
                <label>Id: </label>{{noticia.id}}
            </div>
            <div>
                <label>Title: </label>
                <input [(ngModel)]="noticia.title" placeholder="title"/>
            </div>
            <div>
                <label>SubTitle: </label>
                <input [(ngModel)]="noticia.subtitle" placeholder="subtitle"/>
            </div>
            <div>
                <label>Abstract: </label>
                <textarea [(ngModel)]="noticia.cuerpo" placeholder="cuerpo"></textarea>
            </div>
            <div>
                <label>Imagen: </label>
                <input type="image" src="{{noticia.url}}" alt="Submit"> 
            </div>
            <div class="form-group">
                <label for="InputFile">File input</label> 
                <input  type="file" (change)="selectFile($event)">
                <button class="btn btn-primary" (click)="upload()">Subir</button>
                <h3 *ngIf="subido">Imagen subida</h3>
		    </div>
            <p>
                <button class="btn btn-primary" (click)="cancel()">Cancelar</button>
                <button class="btn btn-primary" (click)="save()">Salvar</button>
            </p>
        </div>
  </div>`
})
export class NoticiaFormComponent {

  newNoticia: boolean;
  subido:boolean;
  noticia: Noticia;
  
  file: File
  
  

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: NoticiaService){
    
      this.subido = false;

      let id = routeParams.get('id');
      if(id){
        this.service.getNoticia(id).subscribe(
          noticia => this.noticia = noticia,
          error => console.error(error)
        );
        this.newNoticia = false;
      } else {
        this.noticia = {title: '', subtitle: '', cuerpo: '', url: 'img_submit.gif'};
        this.newNoticia = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.newNoticia){
        this.service.saveNoticia(this.noticia).subscribe(
    	   noticia => {}, 
    	   error => console.error('Error creating new noticia: '+error)
        );
    }else{
        this.service.updateNoticia(this.noticia).subscribe(
    	   noticia => {}, 
    	   error => console.error('Error updating noticia: '+error)
        );
    }
    window.history.back();
  }
  
  selectFile($event) {		
		this.file = $event.target.files[0];
		console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);		
	}
	
	upload() {
		
		console.debug("Uploading file...");

		if (this.file == null || this.noticia.title == null){
			console.error("You have to select a file and set a title.");
			return;
		}		
		
		let formData = new FormData();
			
		formData.append("name", this.file.name);
		formData.append("file",  this.file);

		let multipartItem = new MultipartItem(new MultipartUploader({url: '/image/upload'}));
		
		multipartItem.formData = formData;
		
		multipartItem.callback = (data, status, headers) => {
						
			if (status == 200){				
				console.debug("File has been uploaded");
				this.subido = true;	
                this.noticia.url = "/images/"+this.file.name.replace(" ","+").replace("/","_");
			} else {
				console.error("Error uploading file");
			}
		};
		
		multipartItem.upload();
	}
}
