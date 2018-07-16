import { Component, Inject, OnInit } from '@angular/core';

import { CONSTANTS } from '../services/constants.service';
import { ConfigOptionsService } from '../services/config-options.service';
import { GeneratorSymbols2, GeneratorSymbols5, GeneratorService } from '../services/generator.service';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css']
})
export class TestServicesComponent implements OnInit {
  public generator2Value: string;
  public generator5Value: string;
  public userData: string;

  constructor(
    @Inject(CONSTANTS) public constants: Object,
    public configOptionsService: ConfigOptionsService,
    @Inject(GeneratorSymbols2) private generatorService2: GeneratorService,
    @Inject(GeneratorSymbols5) private generatorService5: GeneratorService,
  ) {
    console.log(configOptionsService);

  }

  ngOnInit() {
    const cs = this.configOptionsService;
    console.log(cs);
    cs.id = 13;
    cs.login = 'Vesdet';
    cs.email = 'vesdet@gmail.com';

    this.userData = `id:${cs.id} | login:${cs.login} | email:${cs.email} ----------- ${cs.getAdminData()}!`;
  }

  onGenerate(num: number) {
    if (num === 2) {
      this.generator2Value = this.generatorService2.generate();
    } else if (num === 5) {
      this.generator5Value = this.generatorService5.generate();
    }
  }
}
