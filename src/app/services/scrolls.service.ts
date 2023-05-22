import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollsService {

  private _references: ElementRef[] = [];

  constructor() { }

  getReference(i: number): ElementRef{
    return this.references[i];
  }

  addReference(reference: ElementRef){
    this._references.push(reference);
  }

  public get references(): ElementRef[] {
    return this._references;
  }
  public set references(value: ElementRef[]) {
    this._references = value;
  }

}
