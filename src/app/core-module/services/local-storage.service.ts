import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  @checkException()
  getItem(key: string) {
    return JSON.parse(
      localStorage.getItem(key)
    );
  }

  @checkException()
  setItem(key: string, data: Object | string) {
    const value = (typeof data === 'object') ? JSON.stringify(data) : data;
    localStorage.setItem(key, value);
  }

  @checkException()
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

export function checkException(): MethodDecorator {
  return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      try {
        return original.apply(this, args);
      } catch (e) {
        console.error('Local Storage Error:', e);
      }
    };
    return descriptor;
  };
}
