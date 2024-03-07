import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent {
 
  taskForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    lastname: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    dob: new FormControl("", [
      Validators.required,
    ]),
    address: new FormControl("", [
      Validators.required,
      Validators.maxLength(10)
    ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]+$") ])

  });
  

 onSubmit(): void {
   

  if (this.taskForm.valid) {
    alert(
      "Form Submitted succesfully!!!\n Check the values in browser console."
    );
    console.table(this.taskForm.value);
  }
}

protected resetForm(): void {
  this.taskForm.reset();
}

}