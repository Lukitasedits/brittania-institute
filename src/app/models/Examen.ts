export class Examen{
  private _abreviatura: String;

  public get abreviatura(): String {
    return this._abreviatura;
  }
  public set abreviatura(value: String) {
    this._abreviatura = value;
  }


  private _nombre: string;

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  constructor(abreviatura: string, nombre: string) {
    this.abreviatura = abreviatura;
    this.nombre = nombre;
  }
}
