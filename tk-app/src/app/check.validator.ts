import { AbstractControl } from "@angular/forms";
export function checkPass(control: AbstractControl): {[key:string]:any}| null {
    const pass = control.get('password')
    const confPass = control.get('confirmPass')
    if((pass&& pass.pristine)||(confPass&&confPass.pristine)){
        return null
    }
    return pass && confPass && pass.value !== confPass.value ? {'misMatch': true}:null
}