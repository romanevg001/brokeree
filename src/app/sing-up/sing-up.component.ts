import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthlValidators} from '../validators/authlValidators';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  singupForm: FormGroup;
  passwordForm: FormGroup;
  useremail: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;

  constructor(fb: FormBuilder) { 
    this.useremail = fb.control('',  Validators.compose([Validators.required, AuthlValidators.shouldBeEmail]));
    this.password = fb.control('',  [Validators.required]);
    this.passwordConfirm = fb.control('',  [Validators.required]);

    
    this.singupForm = fb.group({
       useremail: this.useremail
      
    });

    this.passwordForm = fb.group(
      { 
        password: this.password, 
        passwordConfirm: this.passwordConfirm 
      },
      { validator: AuthlValidators.passwordEqualConfirm }
    );
    
  }

 

  onSubmit(value: string,passwordForm: string): void { 
      // this.logInForm.find('username').setErrors({
      //       userLoginIsFalse: true
      //   })
    console.log('you submitted value: ', value, passwordForm);
  }

  ngOnInit() {
  }
 

}
