import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  _HeaderData = new BehaviorSubject<HeaderData>({
    title: 'inicio',
    icon: 'home',
    routerUrl: ''
  })

  constructor() { }

  get HeaderData(): HeaderData{
    return this._HeaderData.value
  }

  set HeaderData(headerData: HeaderData){
    this._HeaderData.next(headerData)
  }

}
