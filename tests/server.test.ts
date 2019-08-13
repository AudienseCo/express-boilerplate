import httpStatus from 'http-status';
import should from 'should';
import request from 'supertest';
import app from '../src/app';

describe('Server', () => {
  it('should return 200 OK', () => {
    return request(app)
      .get('/')
      .expect(httpStatus.OK);
  });

  it('should example', () => {
    should(true).be.true();
  });
});
