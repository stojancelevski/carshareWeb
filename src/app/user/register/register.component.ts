import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: 4,
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      driver: false,
      carType: '',
      registrationPlate: ''
    });
  }

  onDriverChange(event: any) {
    if (event.target.checked) {
      this.userForm.get('carType').setValidators([Validators.required]);
      this.userForm.get('registrationPlate').setValidators(Validators.required);
    } else if (!event.target.checked) {
      this.userForm.get('carType').clearValidators();
      this.userForm.get('registrationPlate').clearValidators();
    } else {
      this.userForm.get('carType').clearValidators();
      this.userForm.get('registrationPlate').clearValidators();
    }

  }

  save() {
    this.userService.createUser(this.userForm.value).subscribe(data => {
      console.log(data);
       },
      err =>
        console.log(err),
    )
    ;

  }

}
