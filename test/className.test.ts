import {html, fixture, expect} from '@open-wc/testing';

import {KucText} from '../src/Textbox';

describe('Text', () => {
  describe('className', () => {
    it('should be empty when not assigning on constructor', async () => {
      const container = new KucText();
      const el = await fixture(container);
      expect(el.classList.length).to.equal(0);
    });
  });
});