import {FormControl, FormGroup} from '@angular/forms';


export class AuthlValidators {

    static shouldBeEmail (control: FormControl){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return {isItEmail: !re.test(control.value)}
    }

    static passwordEqualConfirm (control: FormGroup) {
        var password = control.controls['password'].value;
        var passwordConfirm = control.controls['passwordConfirm'].value;

        return {passwordEqualConfirm: !(password == passwordConfirm)}
    }

}