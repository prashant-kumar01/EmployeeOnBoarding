import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeOnBoarding';
  contactForm = new FormGroup({
    name:new FormControl('',
    [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    email:new FormControl('',[Validators.email,Validators.required]),
    mobile:new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
   desg:new FormControl('',[Validators.required]),
   company:new FormControl('',[Validators.required]),


   name2:new FormControl('',
   [
     Validators.required,
     Validators.maxLength(50),
     Validators.pattern('^[a-zA-Z ]*$')
   ]),
   email2:new FormControl('',[Validators.email,Validators.required]),
    mobile2:new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
   desg2:new FormControl('',[Validators.required]),
   company2:new FormControl('',[Validators.required]),
  })
 onSubmit(){
  console.log("hello");
 } 
 get name(){
 return this.contactForm.get('name');
 }
 get email() {
  return this.contactForm.get('email');
}
get mobile() {
  return this.contactForm.get('mobile');
}
get desg(){
  return this.contactForm.get('desg');
}
get company(){
  return this.contactForm.get('company'); 
    
  }

  get name2(){
    return this.contactForm.get('name2');
}
get email2() {
  return this.contactForm.get('email2');
}
get mobile2() {
  return this.contactForm.get('mobile2');
}
get desg2(){
  return this.contactForm.get('desg2');
}
get company2(){
  return this.contactForm.get('company2'); 
    
  }

}