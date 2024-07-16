import { Component } from '@angular/core';
import { Usuarios } from './user.interface';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTable, MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  usuarios:Usuarios[] =[] ;

  formDatosBasicos = new FormGroup({
    nombre: new FormControl({ value: '', disabled: false }, [Validators.required]),
    apellido: new FormControl({ value: '', disabled: false }, [Validators.required]),
    edad:  new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern("[0-9]+")])
});

displayedColumns: string[] = ['position', 'name', 'lastname', 'edad'];
dataSource = this.usuarios;


onSubmit(){
  if(this.formDatosBasicos.valid){
    let usuario = {
      nombre:this.formDatosBasicos.get('nombre')?.value,
      apellido : this.formDatosBasicos.get('apellido')?.value,
      edad : this.formDatosBasicos.get('edad')?.value ,
    }
    this.usuarios.push(usuario);
  }





}
}
