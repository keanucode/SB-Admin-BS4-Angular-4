import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { User } from './signup.interface';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    public user: User = {
        name: '',
        email: '',
        account: {
            password: '',
            confirm: ''
        }
    };

    constructor(public http: HttpClient, public router: Router) { }

    ngOnInit() { }

    doRegister({ value, valid }: { value: User, valid: boolean }) {
        console.log("into doRegister()");
        console.log(value, valid);
        if (valid) {
            this.router.navigate(['/dashboard']);
        } else {
            this.user.name = value.name;
            this.user.email = value.email;
            this.user.account.password = '';
            this.user.account.confirm = '';
            this.router.navigate(['/signup']);
        }
    }
}
