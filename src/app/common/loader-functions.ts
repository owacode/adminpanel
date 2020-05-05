import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LoaderFunctions {
  hideLoader() {
    document.querySelector('.loader')['style'].display = 'none';
  }

  showLoader() {
    document.querySelector('.loader')['style'].display = 'flex';
  }
}
