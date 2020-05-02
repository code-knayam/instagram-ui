import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  signUpForm;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      email: ["", [Validators.required, Validators.email]],
      username: ["", [Validators.required, Validators.minLength(5)]],
      password: [
        "",
        [Validators.required, Validators.pattern("[a-zA-Z 0-9_@#]*")],
      ],
    });
  }

  onSubmit() {
    console.warn(this.signUpForm.values);
  }
}
