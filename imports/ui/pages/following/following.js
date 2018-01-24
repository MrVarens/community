import "./following.html";
import "./following.less";

import FollowCollection from "/imports/api/collections/follow";
import FollowUserForm from "/imports/api/form-schemas/follow-user";
import User from "/imports/ui/helpers/user";

Template.Pages_Following.onCreated(function() {});

Template.Pages_Following.onRendered(function() {});

Template.Pages_Following.onDestroyed(function() {});

Template.Pages_Following.helpers({
    form: function () {
        return FollowUserForm;
    },
    data: function () {
        return { from: User.username.get() };
    },
    following: function () {
        return FollowCollection.find({ owner: User.username.get() }, { sort: { createdAt: -1 } });
    }
});

Template.Pages_Following.events({});