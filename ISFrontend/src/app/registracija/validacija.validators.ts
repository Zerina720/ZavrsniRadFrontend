import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator
{
  static neMozeRazmake(control:AbstractControl): ValidationErrors | null
  {
    if((control.value as string).indexOf(' ') > -1)
    {
      return {neMozeRazmak: true}
    }




    return null;
  }

  static pibLengthValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;

    if (value && value.length !== 8) {
      return { pibLength: true };
    }

    return null;}

    static passwordMatchValidator(control: AbstractControl): ValidationErrors | null  {
      const passwordControl = control.root.get('password');
      const confirmPasswordControl = control.root.get('confirmPassword');

      if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
        return { passwordMismatch: true };
      }

      return null;
    };


}
