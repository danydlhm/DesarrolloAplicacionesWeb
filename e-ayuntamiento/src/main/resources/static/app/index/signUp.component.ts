import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {User,LoginService} from '../index/login.service';
import {Concejal} from '../index/concejal.service';
import {MultipartItem} from '../multipart-upload/multipart-item';
import {MultipartUploader} from '../multipart-upload/multipart-uploader';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/index/signUpTemplate.html',
})

export class SignUpComponent{

  newUser: boolean;
  subido: boolean;
  user: User;
  foto: String;
  
  constructor(private router:Router, private loginService: LoginService){}
    
    signUp(event: any, nick: string, name: String, pass: string, pass2: String){
	  
	  event.preventDefault();
	  if(pass == pass2){
	  this.loginService.signUp(nick, name, pass, this.foto).subscribe(
	      user => this.loginService.logIn(nick, pass).subscribe(
	      response => this.router.navigate(['Ciudadano']),
	      error => alert("Invalid user or password")
      ),
	      error => console.error('Error creating new user: '+error)
      );}
    }

  cancel() {
    window.history.back();
  }
  
	selectFile($event) {		
		this.file = $event.target.files[0];
		console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);		
	}
	
	upload() {
		
		console.debug("Uploading file...");

		if (this.file == null){
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
                this.foto = "/images/"+this.file.name.replace(" ","+");
				this.subido = true;			
			} else {
				console.error("Error uploading file");
			}
		};
		
		multipartItem.upload();
	}
}