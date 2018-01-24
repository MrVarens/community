import "./home.html";
import "./home.less";

import MessagesCollection from "/imports/api/collections/messages";
import PostMessageForm from "/imports/api/form-schemas/post-message";
import User from "/imports/ui/helpers/user";

Template.Pages_Home.onCreated(function() {});

Template.Pages_Home.onRendered(function() {});

Template.Pages_Home.onDestroyed(function() {});

Template.Pages_Home.helpers({
    form: function () {
        return PostMessageForm;
    },
    data: function () {
        return { username: User.username.get() };
    },
    messages: function () {
        return MessagesCollection.find({ owner: User.username.get() }, { sort: { createdAt: -1 } });
    }
});

Template.Pages_Home.events({});