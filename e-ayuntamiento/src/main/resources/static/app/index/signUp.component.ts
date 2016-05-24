import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {User} from '../index/login.service';
import {Concejal} from '../index/login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/index/signUpTemplate.html',
})

export class SignUpComponent{
  newUser: boolean;
  subido: boolean;
  user: User;
  
  private file: File;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private component: signUpComponent){

      this.subido = false;
      let id = routeParams.get('id');
      if(id){
        service.getPropuesta(id).subscribe(
          propuesta => this.propuesta = propuesta,
          error => console.error(error)
        );
        this.newPropuesta = false;
      } else {
        this.propuesta = new Propuesta(undefined,'',false,undefined,undefined,'','','');
        this.newPropuesta = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    console.log(this.propuesta.imagen);
    if (this.subido){
        this.service.savePropuesta(this.propuesta);
        window.history.back();
    }
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