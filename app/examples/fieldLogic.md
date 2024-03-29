---
title: Field Logic
layout: vtabs
section: examples
weight: 30
---
You can use field logic to dynamically change field component definitions based on many different triggers. For example, you can make a field required based on another field's value or change another fields value.

This can also be configured on our beta portal (https://beta.form.io) under the "Field Logic" tab.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css">
<script src="https://cdn.form.io/js/formio.embed.js"></script>
<div id="formio"></div>
```

```js
Formio.createForm(document.getElementById('formio'), {
 components: [
   {
     type: 'textfield',
     key: 'iAmATrigger',
     label: 'I am a trigger',
     placeholder: 'Enter joe or bob.',
     input: true,
   },
   {
     type: 'textfield',
     key: 'lastName',
     label: 'Last Name',
     placeholder: 'Enter your last name',
     input: true,
     tooltip: 'Enter your <strong>Last Name</strong>',
     description: 'Enter your <strong>Last Name</strong>',
     logic: [
       {
         name: 'Bob Logic',
         trigger: {
           type: 'simple',
           simple: {
             show: true,
             when: 'iAmATrigger',
             eq: 'bob'
           }
         },
         actions: [
           {
             name: 'Set to snob',
             type: 'value',
             value: 'value = \'snob\';'
           }
         ]
       },
       {
         name: 'Joe Logic',
         trigger: {
           type: 'simple',
           simple: {
             show: true,
             when: 'iAmATrigger',
             eq: 'joe'
           }
         },
         actions: [
           {
             name: 'Set schmoe',
             type: 'value',
             value: 'value = \'schmoe\';'
           }
         ]
       }
     ]
   },
 ]
});
```

<h3>Result</h3>
<div class="card card-body bg-light">
<div id="formio"></div>
<script type="text/javascript">
Formio.createForm(document.getElementById('formio'), {
 components: [
   {
     type: 'textfield',
     key: 'iAmATrigger',
     label: 'I am a trigger',
     placeholder: 'Enter joe or bob.',
     input: true,
   },
   {
     type: 'textfield',
     key: 'lastName',
     label: 'Last Name',
     placeholder: 'Enter your last name',
     input: true,
     tooltip: 'Enter your <strong>Last Name</strong>',
     description: 'Enter your <strong>Last Name</strong>',
     logic: [
       {
         name: 'Bob Logic',
         trigger: {
           type: 'simple',
           simple: {
             show: true,
             when: 'iAmATrigger',
             eq: 'bob'
           }
         },
         actions: [
           {
             name: 'Set to snob',
             type: 'value',
             value: 'value = \'snob\';'
           }
         ]
       },
       {
         name: 'Joe Logic',
         trigger: {
           type: 'simple',
           simple: {
             show: true,
             when: 'iAmATrigger',
             eq: 'joe'
           }
         },
         actions: [
           {
             name: 'Set schmoe',
             type: 'value',
             value: 'value = \'schmoe\';'
           }
         ]
       }
     ]
   },
 ]
}
);
</script>
</div>
