import { InjectionToken } from '@angular/core';

export const CONSTANTS = new InjectionToken<Object>('constants');

const ENGLISH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';

export interface ConstantsInterface {
  App: string;
  Version: string;
  GeneratorSequence: Array<string>;
}

export const ConstantsService: ConstantsInterface = {
  App: 'AngularShop',
  Version: '0.3.0',
  GeneratorSequence: (ENGLISH + ENGLISH.toLowerCase() + NUMBERS).split('')
};
