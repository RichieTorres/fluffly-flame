import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

let app;

beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  })
    .compile();

  app = moduleFixture.createNestApplication();
  app.enableCors();
  await app.init();
});

afterAll(async () => {
  await app.close();
});

describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('should have CORS enabled', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect('Access-Control-Allow-Origin', '*');
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
        .expect(JSON.stringify([{ id: 1, name: newGame.name }]));
    });

  });
});
