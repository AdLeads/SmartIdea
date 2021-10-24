import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logo: string = 'assets/images/logo.JPG';
  form: FormGroup;
  clienReturn: User;
  constructor(
    private fromBuilder: FormBuilder
  ) // private userService: UserService,
  // public dialogRef: MatDialogRef<LoginComponent>,
  // public dialog: MatDialog
  {}
  onNoClick(): void {
    // this.dialogRef.close();
  }
  ngOnInit(): void {
    this.form = this.fromBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    console.log('LOGIN');
    const cert = this.form.value;
    this.loginuser(cert);
  }
  loginuser(user: User) {
    console.log(user);

    // this.userService.loginclient(user).subscribe((data) => {
    //   alert(data);
    //   if (data != null) {
    //     this.clienReturn = data;
    //     if (this.clienReturn.username != null) {
    //       alert('Bienvenido ' + this.clienReturn.username);
    //       localStorage.setItem('email', this.clienReturn.email);
    //       localStorage.setItem('userId', this.clienReturn.userId + '');
    //       console.log(localStorage);
    //       console.log('Login');
    //     } else {
    //       alert('no es un usuario');
    //       localStorage.clear();
    //     }
    //   } else {
    //     alert('no es un usuario');
    //     // this.contador++;
    //     // if (this.contador>3) {
    //     //   this.snackBar.open('No puede ingresar al sistema', '', {duration: 2000,});
    //     // }
    //   }
    // });
    this.onNoClick();
  }
  signup() {
    // const dialogRef = this.dialog.open(SignupComponent, {
    //   width: '1000px',
    // });
    // dialogRef.afterClosed().subscribe(() => {
    //   this.ngOnInit();
    // });
  }
}
