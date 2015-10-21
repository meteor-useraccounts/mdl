// Simply 'inherites' helpers from AccountsTemplates
Template.atNavButton.helpers(AccountsTemplates.atNavButtonHelpers);

// Simply 'inherites' events from AccountsTemplates
Template.atNavButton.events(AccountsTemplates.atNavButtonEvents);

Template.atNavButton.helpers({
  buttonClass: function () {
    if (!Meteor.userId()) {
      return 'mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
    } else {
      return '';
    }
  }
});
