export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public race : string,
    public klass : string,
    public level : number,
    public alterEgo?: string,
  ) {  }

}