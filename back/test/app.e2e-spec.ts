import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

let app;

beforeEach(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  await app.init();
});

describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

});

describe('Videogames endpoints', () => {
  it('/video-games (GET)', () => {
    return request(app.getHttpServer())
      .get('/video-games')
      .expect(200)
      .expect(JSON.stringify([]));
  });

  describe('/video-games (POST)', () => {
    it('should return 400 code with empty name', () => {
      return request(app.getHttpServer())
        .post('/video-games')
        .send({ name: '' })
        .expect(400);
    });

    it('should return 100 code with simple name', async () => {
      const newGame = { name: 'hola' };

      await request(app.getHttpServer())
        .post('/video-games')
        .send(newGame)
        .expect(201);

      await request(app.getHttpServer())
        .get('/video-games')
        .expect(200)
        .expect(JSON.stringify([newGame]));
    });

  });
});
