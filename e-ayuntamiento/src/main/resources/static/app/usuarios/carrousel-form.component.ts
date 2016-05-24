import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {MultipartItem} from "../multipart-upload/multipart-item";
import {MultipartUploader} from "../multipart-upload/multipart-uploader";
import {Carrousel, CarrouselService}   from '../index/carrousel.service';

@Component({
  template: `
  <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center " *ngIf="img">
          <div *ngIf="img.id">
            <label>Id: </label>{{img.id}}</div>
          <div>
            <label>Nombre: </label>
            <input [(ngModel)]="img.name" placeholder="nombre del lugar de la imagen"/>
          </div>
          <div>
                <label>Imagen: </label>
                <input type="image" src="{{img.foto}}" alt="Submit"> 
          </div>
          <div class="form-group">
                <label for="InputFile">File input</label> 
                <input  type="file" (change)="selectFile($event)">
                <button class="btn btn-primary" (click)="upload()">Subir</button>
                <h3 *ngIf="subido">Imagen subida</h3>
		    </div>
          <p>
            <button class="btn btn-primary" (click)="cancel()">Cancel</button>
            <button class="btn btn-primary" (click)="save()">Save</button>
          </p>
        </div>
    </div>
  `
})
export class CarrouselFormComponent {

  newCarrousel: boolean;
  subido:boolean;
  img: Carrousel;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: CarrouselService){
    
      this.subido = false;

      let id = routeParams.get('id');
      if(id){
        service.getImagen(id).subscribe(
          imagen => this.img = imagen,
          error => console.error(error)
        );
        this.newCarrousel = false;
      } else {
        this.img = {name: '', foto: "", active: false};
        this.newCarrousel = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.newCarrousel){
        this.service.saveImagen(this.img).subscribe(
    	   img => {}, 
    	   error => console.error('Error creating new acta: '+error)
        );
    }else{
        this.service.updateImagen(this.img).subscribe(
    	   acta => {}, 
    	   error => console.error('Error creating new acta: '+error)
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

		if (this.file == null || this.img.name == null){
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
                this.img.foto = "/images/"+this.file.name.replace(" ","+").replace("/","_");
			} else {
				console.error("Error uploading file");
			}
		};
		
		multipartItem.upload();
	}
}
