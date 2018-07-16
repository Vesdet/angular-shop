import { InjectionToken } from '@angular/core';

export const GeneratorOnlyLetters = new InjectionToken<GeneratorService>('generator-only-letters');

export class GeneratorService {
  constructor(
    public sequence: Array<string>
  ) {
    console.log('~GeneratorService~:', sequence);
  }
}

export function GeneratorServiceFactory(type?: string) {
  if (type === 'only-letters') {
    return new GeneratorService(['A', 'B', 'C', 'D']);
  }
  return new GeneratorService(['0', '1']);
}
