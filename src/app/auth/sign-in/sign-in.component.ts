import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  signInForm;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signInForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    console.warn(this.signInForm.value);
  }
}
