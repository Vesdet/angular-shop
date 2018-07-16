import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestServicesComponent } from './test-services/test-services.component';

import { LocalStorageService } from './services/local-storage.service';
import { CONSTANTS, ConstantsService } from './services/constants.service';
import { ConfigOptionsService } from './services/config-options.service';
import { GeneratorSymbols2, GeneratorSymbols5, GeneratorServiceFactory } from './services/generator.service';

export const AdminConfigOptions = new ConfigOptionsService('admin');

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TestServicesComponent
  ],
  declarations: [
    TestServicesComponent
  ],
  providers: [
    LocalStorageService,
    { provide: CONSTANTS, useValue: ConstantsService },
    { provide: ConfigOptionsService, useValue: AdminConfigOptions },
    { provide: GeneratorSymbols2, useFactory: GeneratorServiceFactory(2), deps: [CONSTANTS] },
    { provide: GeneratorSymbols5, useFactory: GeneratorServiceFactory(5), deps: [CONSTANTS] }
  ]
})
export class CoreModule { }
