import { Test, TestingModule } from '@nestjs/testing';
import { Service1Service } from './service1.service';
import exp from 'constants';

describe('Service1Service', () => {
  let service: Service1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service1Service],
    }).compile();

    service = module.get<Service1Service>(Service1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('debe retornar la suma de todos los numeros del 1 al 10', () => {
    expect(service.sumNumbers()).toBe(55)
  });

  it ('debe retornar la suma de todos los numeros PARES del 1 al 10', () => {
    expect(service.sumPairNumbers()).toBe(30)
  });

  it ('debe retornar la suma de todos los numeros IMPARES del 1 al 10', () => {
    expect(service.sumOddNumbers()).toBe(25)
  });
  
});
