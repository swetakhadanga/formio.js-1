import _ from 'lodash';
import Input from '../_classes/input/Input';
export default class LabelComponent extends Input {
  static schema(...extend) {
    return Input.schema({
      type: 'label',
      label: 'Label',
      key: 'label',
      tableView: false,
      input: false,
      defaultValue: 'Customize your label by updating the DefaultValue field in the Data tab',
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Label',
      icon: 'font',
      group: 'basic',
      documentation: '/userguide/form-building/form-components#label',
      weight: 50,
      schema: LabelComponent.schema()
    };
  }

  get defaultSchema() {
    return _.omit(LabelComponent.schema(), ['tableView']);
  }

render() {

    this.renderTemplate('label', {
      label: this.component.label,
      labelStyle: this.component.labelStyle,
    });

    if (this.component.labelStyle) {
      this.getElement().style.cssText += this.component.labelStyle;
    }

    return super.render();
  }
}
