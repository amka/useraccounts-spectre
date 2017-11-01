// Simply 'inherites' helpers from AccountsTemplates
Template.atError.helpers(AccountsTemplates.atErrorHelpers);

Template.atError.events({
    'click .at-error .btn-clear'(e) {
        AccountsTemplates.clearState()
        return false
    }
})