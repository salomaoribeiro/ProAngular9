import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/route";

@Component({
templateUrl: "auth.component.html"
})
export class AuthComponent {
  private username: string;
  private password: string;
  private errorMessage: string;

  constructor(private router: Router) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      //perform authentication
      this.form.navigateByUrl("/admin/main");
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}

