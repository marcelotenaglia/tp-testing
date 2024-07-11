import { Test, TestingModule } from '@nestjs/testing';
import { Service2Service } from './service2.service';

describe('Service2Service', () => {
  let service: Service2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service2Service],
    }).compile();

    service = module.get<Service2Service>(Service2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('debe retornar el area de un cuadrado de lado 4, es decir 16', () => {
    expect(service.calculateSquareArea(4)).toBe(16)
  });

  it ('debe retornar el area de un triangulo de base 4 y altura 5, es decir 10', () => {
    expect(service.calculateTriangleArea(4,5)).toBe(10)
  });

  it ('debe retornar el area de un rectangulo cuyo lado largo es 4 y su lado corto es 2, es decir 8', () => {
    expect(service.calculateRectangleArea(2,4)).toBe(8)
  });

});
