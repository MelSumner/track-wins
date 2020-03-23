import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class TooltipComponent extends Component {
  tooltipId = 'tooltip-' + guidFor(this); 
  tooltipTextId = 'tooltipText-' + guidFor(this);
}
