import Harness from '../../../test/harness';
import LabelComponent from './Label';

import {
  comp1,
} from './fixtures';

describe('Label Component', () => {
  it('Should build a label component with default text', () => {
    return Harness.testCreate(LabelComponent, comp1).then((component) => {
        Harness.testElements(component, 'div', 1);
      });
  });

});
