import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {MultipartItem} from '../multipart-upload/multipart-item';
import {MultipartUploader} from '../multipart-upload/multipart-uploader';
import {LoginService} from '../index/login.service';
import {Propuesta, PropuestaService}   from './propuesta.service';

@Component({
  template: `
  <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center" *ngIf="propuesta">
          <h2>Nueva Propuesta "{{propuesta.titulo}}"</h2>
          <div *ngIf="propuesta.id"><label>Id: </label>{{propuesta.id}}</div>
          <div>
            <label>Autor: </label>{{propuesta.creador.nombre}}
          </div>
          <div>
            <label>Titulo: </label>
            <input [(ngModel)]="propuesta.titulo" placeholder="titulo"/>
          </div>
          <div>
            <label>Contenido: </label>
            <textarea [(ngModel)]="propuesta.contenido" placeholder="contenido"></textarea>
          </div>
          <div class="form-group">
			<label for="InputFile">File input</label> 
            <input type="file" (change)="selectFile($event)">
            <button class="btn btn-primary" (click)="upload()">Subir</button>
            <h3 *ngIf="subido">Imagen subida</h3>
		  </div>
          <p>
            <button class="btn btn-primary" (click)="cancel()">Cancelar</button>
            <button class="btn btn-primary" (click)="save()">Guardar</button>
          </p>
        </div>
    </div>
  `
})
export class PropuestaFormComponent {

  newPropuesta: boolean;
  subido: boolean;
  propuesta: Propuesta;
  

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: PropuestaService,
    private loginService: LoginService){

      this.subido = false;
      let id = routeParams.get('id');
      if(id){
        service.getPropuesta(id).subscribe(
          propuesta => this.propuesta = propuesta,
          error => console.error(error)
        );
        this.newPropuesta = false;
      } else {
        this.propuesta = {creador: this.loginService.user,aprobada: false,concejal: undefined,firmantes: [this.loginService.user],titulo: '',contenido: '',imagen: ''};
        this.newPropuesta = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.newPropuesta){
        this.service.savePropuesta(this.propuesta).subscribe(
    	   propuesta => {}, 
    	   error => console.error('Error creating new propuesta: '+error)
        );
    }else{
        this.service.updatePropuesta(this.propuesta).subscribe(
    	   acta => {}, 
    	   error => console.error('Error updating new propuesta: '+error)
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

		if (this.file == null || this.propuesta.titulo == null){
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
                this.propuesta.imagen = "/images/"+this.file.name.replace(" ","+");
				this.subido = true;			
			} else {
				console.error("Error uploading file");
			}
		};
		
		multipartItem.upload();
	}
}
