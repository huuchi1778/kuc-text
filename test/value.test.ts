import {fixture, expect} from '@open-wc/testing';
import '../kuc-text';

describe('Test for value', () => {
  it('should be empty when not specified', async () => {
    const el = await fixture(`<kuc-text></kuc-text>`) as HTMLInputElement;
    expect(el.value).to.equal('');
  });

  it(`should have a value of 'sample value' when specified`, async () => {
    const el = await fixture(`<kuc-text value='sample value'></kuc-text>`) as HTMLInputElement;
    expect(el.value).to.equal('sample value');
  });

  it(`should have a value of 'sample value' when set by setter`, async () => {
    const el = await fixture(`<kuc-text></kuc-text>`) as HTMLInputElement;
    el.value = 'sample value';
    expect(el.value).to.equal('sample value');
  });

  it(`should change from 'sample value' to 'new value'`, async () => {
    const el = await fixture(`<kuc-text value='sample value'></kuc-text>`) as HTMLInputElement;
    el.value = 'new value';
    expect(el.value).to.equal('new value');
  });
});