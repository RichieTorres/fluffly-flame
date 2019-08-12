import { ValidationPipe } from './validation.pipe';
import { ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { CreateDTO } from './video-games/dto/create.dto';

describe('ValidationPipe', () => {
  let target: ValidationPipe;

  beforeEach(() => {
    target = new ValidationPipe();
  });

  it('should be defined', () => {
    expect(target).toBeDefined();
  });

  describe('transform', () => {
    describe('general', () => {
      it('should return value if is a number', () => {
        const beforeVal = 5;
        const meta: ArgumentMetadata = { type: 'param', metatype: Number };
        const afterVal = target.transform(beforeVal, meta);
        expect(afterVal).resolves.toBe(beforeVal);
      });
    });

    describe('create videogame', () => {
      it('should pass with simple name', () => {
        const beforeVal: CreateDTO = { name: 'Mew' };
        const meta: ArgumentMetadata = { type: 'param', metatype: CreateDTO };
        const afterVal = target.transform(beforeVal, meta);
        expect(afterVal).resolves.toBe(beforeVal);
      });

      it('should error with empty name', async () => {
        expect.assertions(1);

        const beforeVal: CreateDTO = { name: '' };
        const meta: ArgumentMetadata = { type: 'param', metatype: CreateDTO };
        try {
          await target.transform(beforeVal, meta);
        } catch (error) {
          expect(error).toBeInstanceOf(BadRequestException);
        }
      });
    });

  });

});
