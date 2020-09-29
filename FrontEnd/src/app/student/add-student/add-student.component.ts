import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  validateForm: FormGroup;
  ngOnInit(): void {

 
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [' ', [Validators.required]],
      studentname: [' ', [Validators.required]],
      checkPassword: [' ', [Validators.required]],
      nickname: [' ', [Validators.required]],
      phoneNumberPrefix: ['+92'],
      phoneNumber: [' ', [Validators.required]],
      website: [' ', [Validators.required]],
      captcha: [' ', [Validators.required]],
      datePicker: new   FormControl('',Validators.required),
      agree: [false]
    });


    
  }

  
  radioValue = 'male';

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }


 

}
