import "./login.html";
import "./login.less";

import LoginForm from "/imports/api/form-schemas/login";
import User from "/imports/ui/helpers/user";

Template.Pages_Login.onCreated(function() {
    AutoForm.addHooks("autoform-login", {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            User.login(insertDoc.username);

            this.done();
            return false; // Block form submit
        }
    }, true);
});

Template.Pages_Login.onRendered(function() {});

Template.Pages_Login.onDestroyed(function() {});

Template.Pages_Login.helpers({
    loginForm: function () {
        return LoginForm;
    }
});

Template.Pages_Login.events({});