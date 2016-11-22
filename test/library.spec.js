import chai from 'chai';
import { Data } from '../build/Library';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my library', () => {
  before(() => {
    lib = new Data();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Library');
    });
  });
});
