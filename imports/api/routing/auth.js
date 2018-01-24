import User from "/imports/ui/helpers/user";

let controller = RouteController.extend({
    layoutTemplate: "Layouts_Main",
    onBeforeAction: function () {
        if (Meteor.isClient) {
            if (User.isLoggedIn()) {
                this.redirect("Home");
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

Router.route("/login", {
    name: "Login",
    controller: controller
});