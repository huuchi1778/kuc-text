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

// describe('Test for input event', () => {
//   it('should trigger on input event ', async () => {
//     const container = new KucText();
//     container.value = 'old-value';
//     const el = await fixture(container) as HTMLInputElement;
//     el.addEventListener('kuc:onchange', (event: CustomEvent) => {
//       console.log(event.detail.value);
//     });
//     el.value = 'new-value';
//     el.dispatchEvent(new CustomEvent('kuc:onchange'));
//     // console.log('New: ', el.shadowRoot.querySelector('input').value);
//     expect(el.shadowRoot.querySelector('input').value).to.equal('new-value');
//   });
// });
