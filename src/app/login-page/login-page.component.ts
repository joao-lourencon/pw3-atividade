import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validators: this.validarSenhas })
    });
  }

  validarSenhas(group: AbstractControl) {
    const senha = group.get('password')?.value;
    const confirmar = group.get('confirmPassword')?.value;
    return senha === confirmar ? null : { senhasDiferentes: true };
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulário enviado', this.formulario.value);
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
