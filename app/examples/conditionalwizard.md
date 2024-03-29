---
title: Conditional Wizards
layout: vtabs
section: examples
weight: 20
---
Not only can you build multi-page forms, but you can also create conditional wizards where the pages are determined by 
conditional logic that is executed as the person is filling out the form.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css">
<script src="https://cdn.form.io/js/formio.embed.js"></script>
<div id="wizard"></div>
```

```js
Formio.createForm(document.getElementById('wizard'), 'https://examples.form.io/conditionalwizard');
```

This wizard will render conditionally based on the data input from the first page.

<h3>Result</h3>
<label><input type="checkbox" id="showfull" /> Show full wizard</label>
<div class="card card-body bg-light">
  <div id="wizard"></div>
  <script type="text/javascript">
  Formio.createForm(document.getElementById('wizard'), 'https://examples.form.io/conditionalwizard').then(function(wizard) {
    document.getElementById('showfull').addEventListener('click', function(event) {
      var updatedWizardSchema = Object.assign({}, wizard.wizard, { full: event.target.checked });
      wizard.setForm(updatedWizardSchema);
    });
  });
  </script>
</div>
