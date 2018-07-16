import { InjectionToken } from '@angular/core';

export const CONSTANTS = new InjectionToken<Object>('Constants');

export const ConstantsService = {
  App: 'AngularShop',
  Version: '0.3.0'
};
