import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  signInForm;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.signInForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-zA-Z 0-9_@#]*"),
          Validators.minLength(5),
        ],
      ],
    });
  }

  onSubmit() {
    console.warn(this.signInForm.value);
  }

  redirectToSignUp() {
    this.router.navigate(["/auth/sign-up"]);
  }
}
