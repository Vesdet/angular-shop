import { Component, Inject, OnInit } from '@angular/core';

import { CONSTANTS } from '../services/constants.service';
import { ConfigOptionsService } from '../services/config-options.service';
import { GeneratorOnlyLetters, GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css']
})
export class TestServicesComponent implements OnInit {

  constructor(
    @Inject(CONSTANTS) public constants: Object,
    public configOptionsService: ConfigOptionsService,
    // @Inject(GeneratorOnlyLetters) public generatorService: GeneratorService
  ) {
    console.log(constants, configOptionsService);
  }

  ngOnInit() {
  }

}
