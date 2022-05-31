import {fixture, expect} from '@open-wc/testing';
import '../kuc-text';

describe('Test for placeholder', () => {
  it('should be empty when not specified', async () => {
    const el = await fixture(`<kuc-text></kuc-text>`) as HTMLInputElement;
    expect(el.placeholder).to.equal('');
  });

  it(`should have a placeholder 'Sample placeholder' when specified`, async () => {
    const el = await fixture(`<kuc-text placeholder='Sample placeholder'></kuc-text>`) as HTMLInputElement;
    expect(el.placeholder).to.equal('Sample placeholder');
  });

  it(`should have a placeholder 'Sample placeholder when set by setter`, async () => {
    const el = await fixture(`<kuc-text></kuc-text>`) as HTMLInputElement;
    el.placeholder = 'Sample placeholder';
    expect(el.placeholder).to.equal('Sample placeholder');
  });

  it(`should change from 'sample-placeholder' to 'new-placeholder'`, async () => {
    const el = await fixture(`<kuc-text placeholder='Sample placholder'></kuc-text>`) as HTMLInputElement;
    el.placeholder = 'New placeholder';
    expect(el.placeholder).to.equal('New placeholder');
  });
});