import LabelEditData from './editForm/Label.edit.data';
import LabelEditDisplay from './editForm/Label.edit.display';
import labelEditForm from './editForm/Label.edit.form';
export default function(...extend) {
  return labelEditForm([
    {
      key: 'data',
      components: LabelEditData
    },
    {
      key: 'display',
      components: LabelEditDisplay
    },
  ], ...extend);
}



