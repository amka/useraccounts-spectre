Package.describe({
  name: 'meamka:useraccounts-spectre',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Accounts Templates styled with Spectre.css',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/amka/useraccounts-spectre.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use(['templating', 'underscore'], 'client');

  api.use(['useraccounts:core'], ['client', 'server']);

  // Requires all routing packages loads before this asking for weak dependencies.
  api.use('useraccounts:flow-routing@1.14.2', ['client', 'server'], { weak: true });
  api.use('useraccounts:iron-routing@1.14.2', ['client', 'server'], { weak: true });

  api.imply(['useraccounts:core@1.14.2'], ['client', 'server']);

  api.add_files([
    'lib/at_error.html',
    'lib/at_error.js',
    'lib/at_form.html',
    'lib/at_form.js',
    'lib/at_input.html',
    'lib/at_input.js',
    'lib/at_message.html',
    'lib/at_message.js',
    'lib/at_nav_button.html',
    'lib/at_nav_button.js',
    'lib/at_oauth.html',
    'lib/at_oauth.js',
    'lib/at_pwd_form.html',
    'lib/at_pwd_form.js',
    'lib/at_pwd_form_btn.html',
    'lib/at_pwd_form_btn.js',
    'lib/at_pwd_link.html',
    'lib/at_pwd_link.js',
    'lib/at_reCaptcha.html',
    'lib/at_reCaptcha.js',
    'lib/at_resend_verification_email_link.html',
    'lib/at_resend_verification_email_link.js',
    'lib/at_result.html',
    'lib/at_result.js',
    'lib/at_sep.html',
    'lib/at_sep.js',
    'lib/at_signin_link.html',
    'lib/at_signin_link.js',
    'lib/at_signup_link.html',
    'lib/at_signup_link.js',
    'lib/at_social.html',
    'lib/at_social.js',
    'lib/at_terms_link.html',
    'lib/at_terms_link.js',
    'lib/at_title.html',
    'lib/at_title.js',
    'lib/full_page_at_form.html',
    'lib/at_spectre.css'
  ], ['client']);
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meamka:useraccounts-spectre');
});