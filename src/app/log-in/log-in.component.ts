import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthlValidators} from '../validators/authlValidators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  useremail: FormControl;
  password: FormControl;

  constructor(fb: FormBuilder) { 
    this.useremail = fb.control('',  Validators.compose([Validators.required, AuthlValidators.shouldBeEmail]));
    this.password = fb.control('',  [Validators.required]);

    this.logInForm = fb.group({
       useremail: this.useremail,
       password:  this.password
    });
  }

  onSubmit(value: string): void { 
      // this.logInForm.find('username').setErrors({
      //       userLoginIsFalse: true
      //   })
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
