import "./timeline.html";
import "./timeline.less";

import FollowCollection from "/imports/api/collections/follow";
import MessagesCollection from "/imports/api/collections/messages";
import User from "/imports/ui/helpers/user";

Template.Pages_Timeline.onCreated(function() {});

Template.Pages_Timeline.onRendered(function() {});

Template.Pages_Timeline.onDestroyed(function() {});

Template.Pages_Timeline.helpers({
    messages: function () {
        let users = _.pluck(FollowCollection.find({ owner: User.username.get() }).fetch(), "username");

        return MessagesCollection.find({ owner: { $in: users } }, { sort: { createdAt: -1 } });
    }
});

Template.Pages_Timeline.events({});