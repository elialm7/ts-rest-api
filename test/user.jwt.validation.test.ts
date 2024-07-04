import chai from 'chai';
import chaiHttp from 'chai-http';
import supertest from 'supertest';



const should = chai.should();

import {server} from '../src/server/server';

chai.use(chaiHttp);
const request = supertest(server);

describe('User Routes', () => {
  let token = '';

  it('should register a new user', (done) => {
    request
      .post('/api/register')
      .send({
        username: 'testuser',
        email: 'testuser@gmail.com',
        pass: 'password123'
      })
      .end((err: any, res: { should: { have: { status: (arg0: number) => void; }; }; body: { should: { be: { a: (arg0: string) => void; }; have: { property: (arg0: string) => { (): any; new(): any; eql: { (arg0: string): void; new(): any; }; }; }; }; }; }) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql('success');
        done();
      });
  });

  it('should login the user', (done) => {
    request
      .get('/api/login')
      .send({
        username: 'testuser',
        pass: 'password123'
      })
      .end((err: any, res: { should: { have: { status: (arg0: number) => void; }; }; body: { should: { be: { a: (arg0: string) => void; }; have: { property: (arg0: string) => void; }; }; token: string; }; }) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('token');
        token = res.body.token; // Guardamos el token para usarlo en la siguiente prueba
        done();
      });
  });

  it('should get the user profile', (done) => {
    request
      .get('/api/profile')
      .set('Authorization', `Bearer ${token}`) // Usamos el token obtenido del login
      .end((err: any, res: { should: { have: { status: (arg0: number) => void; }; }; body: { should: { be: { a: (arg0: string) => void; }; have: { property: (arg0: string) => { (): any; new(): any; eql: { (arg0: string): void; new(): any; }; }; }; }; }; }) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('username').eql('testuser');
        done();
      });
  });
});
