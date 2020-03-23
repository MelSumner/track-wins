import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class InputCheckbox extends Component {
  inputId = 'input-' + guidFor(this); 
  checkboxOptions = [];

}
