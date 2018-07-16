import { Inject, InjectionToken } from '@angular/core';

import { CONSTANTS, ConstantsInterface } from './constants.service';

export const GeneratorSymbols2 = new InjectionToken<GeneratorService>('generator-symbols-2');
export const GeneratorSymbols5 = new InjectionToken<GeneratorService>('generator-symbols-5');

export class GeneratorService {
  constructor(
    @Inject(CONSTANTS) private constants: ConstantsInterface,
    private num: number
  ) {
    console.log('~GeneratorService~:', num);
  }

  generate() {
    const seq = this.constants.GeneratorSequence;
    const seqLength = seq.length;

    return Array.from(Array(this.num).keys())
      .reduce(acc => {
        return acc += seq[Math.floor(Math.random() * seqLength)];
      }, '');
  }
}

export function GeneratorServiceFactory(num: number) {
  return function(constants: ConstantsInterface) {
    return new GeneratorService(constants, num);
  };
}
