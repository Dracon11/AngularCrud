import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myValue;
  title = 'CRUD ANGULAR';
  msg = '';

  // current = JSON.parse(localStorage.getItem('personas'));
  // localStorage.set('currentUSer', JSON.stringify({token: token , name: name }) );

 hideUpdate = true;

  personas = [
    {'name': 'Gerardo Martinez', 'work': 'Designer', 'age': '19'},
    {'name': 'Naomy Rojas', 'work': 'Manager', 'age': '22'},
    {'name': 'Luis Diaz', 'work': 'Doctor', 'age': '20'}
  ];

  constructor() {
   // localStorage.setItem( 'personas' , JSON.stringify( this.personas ));

  }
  per = [];
  model: any = { };
  model2: any = { };

  closeAlert(): void {
    this.msg = '';
  }

  closeUpdate(): void {
    this.hideUpdate = true;
  }
/*
  save(name, data) {

    let localData = localStorage.getItem('personas');
    if (localData) {
      localData = JSON.parse(localData);

    } else {
      localData = '';
    }

    this.localDatas[name] =   localData;
    console.log(this.localDatas);

    // localStorage.setItem('personas', JSON.stringify(this.localDatas));
  }

  get(name) {
    const data = JSON.parse(localStorage.getItem('personas'));

    if (!data) {
      return undefined;
    }

    if (name) {
      if (data[name]) {
        return data[name];
      } else {
        return {};
      }
    }
    return data;
  }
*/
  addPerson(): void {
    // this.personas.push(this.model);
    // this.msg = 'Campo Agregado';
    this.per =  JSON.parse(localStorage.getItem('personas'));

    this.per.push({ 'name': this.model.name,
    'work': this.model.work,
    'age': this.model.age });

    localStorage.setItem('personas', JSON.stringify(this.per));

    console.log(JSON.parse(localStorage.getItem('personas')));
    console.log('guardo');

    }


  deletePerson(i): void {
    const answer = confirm('Estas seguro de querer eliminar');
    if (answer) {
     // this.personas.splice(i , 1);
      this.msg = 'Campo Borrado';
    }
 }

  editPerson(i): void {
    this.hideUpdate = false;
    this.model2.name = this.personas[i].name;
    this.model2.work = this.personas[i].work;
    this.model2.age = this.personas[i].age;
    this.myValue = i;
  }

  updatePerson(): void {
    const i = this.myValue;
    for (let j = 0; j < this.personas.length ; j++) {
      if (i === j ) {
          this.personas[i] = this.model2;
          this.msg = 'Campo Actualizado';
          this.model2 = {};
      }
    }

    this.closeAlert();
  }

}
