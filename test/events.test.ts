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

describe('Test for input event', () => {
  it('should trigger on input event', (done) => {
    const container = new KucText();
    container.value = 'old-value';
    container.addEventListener('kuc:onchange', (event: CustomEvent) => {
      expect(event.detail.value).to.equal(container.value);
      expect(event.detail.oldValue).to.equal('old-value');
      done();
    });
    fixture(container).then(()=>{
      const oldValue = container.value;
      container.value = 'new-value';
      const newValue = container.value;
      container.dispatchEvent(new CustomEvent('kuc:onchange', {
        detail: {
          value: newValue,
          oldValue: oldValue
        }
      }));
    });
  });
});
