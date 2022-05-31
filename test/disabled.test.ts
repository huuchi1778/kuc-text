import {fixture, expect} from '@open-wc/testing';
import '../kuc-text';

describe('Test for disabled attribute', () => {
  it('should not exist when not specified', async () => {
    const el = await fixture(`<kuc-text></kuc-text>`);
    expect(el.hasAttribute('disabled')).to.equal(false);
  });

  it(`should be added when assigned`, async () => {
    const el = await fixture(`<kuc-text disabled></kuc-text>`) as HTMLInputElement;
    expect(el.hasAttribute('disabled')).to.equal(true);
  });

  it(`should be removed when set to false by setter`, async () => {
    const el = await fixture(`<kuc-text disabled></kuc-text>`) as HTMLInputElement;
    el.disabled = false;
    expect(el.disabled).to.equal(false);
  });

  it(`should be added when set to true by setter`, async () => {
    const el = await fixture(`<kuc-text></kuc-text>`) as HTMLInputElement;
    el.disabled = true;
    expect(el.disabled).to.equal(true);
  });
});