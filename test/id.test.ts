import {fixture, expect} from '@open-wc/testing';
import '../kuc-text';

describe('Test for id', () => {
  it('should be empty when not specified', async () => {
    const el = await fixture(`<kuc-text></kuc-text>`);
    expect(el.id).to.equal('');
  });

  it(`should have an id 'sample-id' when specified`, async () => {
    const el = await fixture(`<kuc-text id='sample-id'></kuc-text>`);
    expect(el.id).to.equal('sample-id');
  });

  it(`should change from id 'sample-id' to class 'new-id'`, async () => {
    const el = await fixture(`<kuc-text id='sample-id'></kuc-text>`);
    el.id = 'new-id';
    expect(el.id).to.equal('new-id');
  });
});