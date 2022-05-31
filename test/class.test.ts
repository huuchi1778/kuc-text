import {fixture, expect} from '@open-wc/testing';
import '../kuc-text';

describe('Text', () => {
  describe('className', () => {
    it('should be empty when not assigning on constructor', async () => {
      const el = await fixture(`<kuc-text></kuc-text>`);
      expect(el.classList.length).to.equal(0);
    });

    it(`should have a class 'sample-class' when specified`, async () => {
      const el = await fixture(`<kuc-text class='sample-class'></kuc-text>`);
      expect(el.classList.length).to.equal(1);
      expect(el.className).to.equal('sample-class');
    });

    it(`should change from class 'sample-class' to class 'new-class'`, async () => {
      const el = await fixture(`<kuc-text class='sample-class'></kuc-text>`);
      el.className = 'new-class';
      expect(el.classList.length).to.equal(1);
      expect(el.className).to.equal('new-class');
    });

    it(`should have 2 items in classList when add 'new-class' to 'sample-class'`, async () => {
      const el = await fixture(`<kuc-text class='sample-class'></kuc>`);
      el.classList.add('new-class');
      expect(el.classList.length).to.equal(2);
      expect(el.className).to.equal('sample-class new-class');
    });
  });
});