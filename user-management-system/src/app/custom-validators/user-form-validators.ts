import { AbstractControl, ValidatorFn } from '@angular/forms';

export function conditionalValidator(
  validate: boolean,
  validator: ValidatorFn
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!validate) {
      return null;
    }
    return validator(control);
  };
}
