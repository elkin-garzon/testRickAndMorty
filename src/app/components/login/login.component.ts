import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public changeType: boolean = false;
	public formLogin!: FormGroup;
	public loginModel: Login = new Login();

	constructor(
		public formBuilder: FormBuilder,
		public router: Router
	) { }

	ngOnInit(): void {
		sessionStorage.clear();
		this.formLogin = this.formBuilder.group({
			mail: [this.loginModel.mail, [Validators.required, Validators.email]],
			password: [this.loginModel.password, [Validators.required, Validators.minLength(4)]],
		});
	}

	viewPass() {
		this.changeType = !this.changeType;
	}

	login() {
		if (this.formLogin.valid) {
			this.router.navigate(['/admin']);
		}

	}
}
