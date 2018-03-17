// export class Goal {
//   constructor(public id:number, public name:string){}
// }

// Update with description

// export class Goal {
//     constructor(public id:number, public name:string, public description:string){}
// }

// Output Property Binding
// Create toggle effect to allow us toggle the goal description on and off

export class Goal {
  public showDescription:boolean;
  constructor(public id:number, public name:string, public description:string){
    this.showDescription=false
  }
}
