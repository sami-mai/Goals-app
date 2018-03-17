import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

// Updating Our Components

// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   template: `
//   <h1> My Goals </h1>
//   <p> My goal for today is {{goal}}</p>
//   `
//
// })
// export class AppComponent {
//   goal = 'Watch Finding Nemo';
// }

// Template File
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
// })
// export class AppComponent {
//   goal = 'Watch Finding Nemo';
// }

// Structure of a Component
// Imports
// import { Component } from '@angular/core';
// Component Annotation (Decorator: allows you to specify different properties that help define the structure of your components)
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// Component Definition (Exports: where the logic resides)
// export class AppComponent {
//   goals: string[];
//
//   constructor(){
//
//     this.goals = ["Watch Finding Nemo","Buy Cookies","Get new phone case"];
//   }
// }

// Array of goals

// import { Component } from '@angular/core';
// import {Goal} from './goal'
//
// @Component ({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {
//   goals = [
//     new Goal(1,'Watch Finding Nemo'),
//     new Goal(2,'buy Cookies'),
//     new Goal(3,'Get new Phone Case'),
//     new Goal(4,'Get Dog Food'),
//     new Goal(5,'Solve math homework'),
//     new Goal(6,'Plot my world domination plan'),
//
//   ]
// }
