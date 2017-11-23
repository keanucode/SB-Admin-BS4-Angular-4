import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { User } from './login.interface';
//import { AuthService } from '../auth.service';

// https://api.github.com/users/seeschweiler
// http://jsonplaceholder.typicode.com/posts
// http://localhost:8080/api/v1/login/auth
const SERVICE_LOGIN_URL = "http://localhost:8080/api/v1/login/auth";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public user: User = {
        acc: '',
        pwd: ''
    };

    constructor(public http: HttpClient, public router: Router) {
    }

    ngOnInit() {
    }

    onLoggedin({ value, valid }: { value: User, valid: boolean }) {
        console.log("into onLoggedin()");
        console.log(value, valid);
        let param = { acc: value.acc, pwd: value.pwd }
        //this.auth.login(value.acc, value.pwd);
        console.log("out onLoggedin()");
        this.http.post(SERVICE_LOGIN_URL, param).subscribe(
            res => {
                console.log(res);
                localStorage.setItem('isLoggedin', 'true');
                //this.router.navigate(['/dashboard']);
            },
            err => {
                console.log("Error occured");
            }
        );

    }

}
