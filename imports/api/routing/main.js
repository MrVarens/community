import User from "/imports/ui/helpers/user";

let controller = RouteController.extend({
    layoutTemplate: "Layouts_Main",
    onBeforeAction: function () {
        if (Meteor.isClient) {
            if (!User.isLoggedIn()) {
                this.redirect("Login");
                return;
            }
        }

        this.next();
    },
    action: function () {
        if (this.ready())
            this.render("Pages_" + (this.route.options.hasOwnProperty("template") ? this.route.options.template : this.route.getName()));
        else
            this.next();
    }
});

Router.route("/", {
    name: "Home",
    controller: controller,
    waitOn: function () {
        let username = User.username.get();
        if (username)
            return Meteor.subscribe("pages.home", username);
    }
});

Router.route("/following", {
    name: "Following",
    controller: controller,
    waitOn: function () {
        let username = User.username.get();
        if (username)
            return Meteor.subscribe("pages.following", username);
    }
});


Router.route("/timeline", {
    name: "Timeline",
    controller: controller,
    waitOn: function () {
        let username = User.username.get();
        if (username)
            return Meteor.subscribe("pages.timeline", username);
    }
});