import "./main.html";
import "./main.less";

import User from "/imports/ui/helpers/user";
import changeCase from "change-case";

Template.Layouts_Main.onCreated(function() {});

Template.Layouts_Main.onRendered(function() {});

Template.Layouts_Main.onDestroyed(function() {});

Template.Layouts_Main.helpers({
    currentRouteName: function() {
        return changeCase.paramCase(Router.current().route.getName());
    },
    user: function () {
        return User;
    }
});

Template.Layouts_Main.events({
    "click .navbar .logout": function (event, template) {
        User.logout();
    }
});