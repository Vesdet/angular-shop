import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestServicesComponent } from './test-services/test-services.component';

import { LocalStorageService } from './services/local-storage.service';
import { CONSTANTS, ConstantsService } from './services/constants.service';
import { ConfigOptionsService } from './services/config-options.service';
// import { GeneratorOnlyLetters, GeneratorService, GeneratorServiceFactory } from './services/generator.service';

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
    // { provide: GeneratorOnlyLetters, useFactory: GeneratorServiceFactory, deps: [GeneratorService] }
  ]
})
export class CoreModule { }
