import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  // ngOnInit --> cuando el DOM esté cargado
  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl(''),
      cif: new FormControl(''),
      direccion: new FormControl(''),
      localidad: new FormControl('')
    })
  }

}
