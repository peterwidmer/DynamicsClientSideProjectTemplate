### Starter Template for Dynamics ClientSide-Projects

Using javascripts on Dynamics-Forms is quite easy, but as soon as project grow bigger, they can become a mess and even unmaintainable.
To avoid this, there are a few things, which can help us:

* TypeScript - will catch errors while developing and not in runtime. Also refactoring becomes quite alot easier.
* RollupJs - does the bundling of the referenced typescript-files automatically for us.
* form-store - allows an easy separation of the logic for each field and registers all required OnChange events automatically.

### How can I use the template?

1. Download the whole DynamicsClientSideProjectTemplate
2. Open a commandline and go to the DynamicsClientSideProjectTemplate-Folder
3. Execute: npm install (has to be done only the first time)
4. Execute: npm run build

After you executed it, you'll find a _dist_ folder, which contains the built contact.js file for the sample contact-entity.
You can upload the contact.js as webresource and register it on your form with _contactform.OnLoad_ (make sure to check "Pass Execution Context as first parameter").
