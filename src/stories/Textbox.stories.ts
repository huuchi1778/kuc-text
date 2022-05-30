import {html} from 'lit-html';
import {Story, Meta} from '@storybook/web-components';
import './Textbox.ts';

export default {
  title: 'Input text',
} as Meta;


// We create a “template” of how args map to rendering
const Template = ({className, id, placeholder, disabled, value, _handleFocus}) =>
  html`<kuc-text 
  className=${className} 
  id=${id} 
  placeholder=${placeholder} 
  value=${value} 
  ?disabled=${disabled}
  >
  @focus=${_handleFocus}
  </kuc-text>`;

// Each story then reuses that template
export const Normal = Template.bind({});
Normal.args = {
  className: '',
  id: '',
  placeholder: 'Enter your name here',
  disabled: false,
  value: ''
};

document.addEventListener('kuc:focus', e => console.log(e));
