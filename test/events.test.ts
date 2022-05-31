import {fixture, expect, elementUpdated} from '@open-wc/testing';
import {KucText} from '../src/Textbox';
import '../kuc-text';

describe('Test for focusEvent', () => {
  it('should trigger when focus', (done) => {
    const container = new KucText();
    container.value = 'test-value';
    container.addEventListener('kuc:focus', (event: CustomEvent) => {
      expect(event.detail.value).to.equal('test-value');
      done();
    });
    fixture(container).then(() => {
      container.shadowRoot.querySelector('input').focus();
    });
  });
});
