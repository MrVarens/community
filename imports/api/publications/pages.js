import Collections from "/imports/api/collections";

Meteor.publish("pages.home", function (username) {
    check(username, String);

    return Collections.Messages.find({ owner: username });
});

Meteor.publish("pages.following", function (username) {
    check(username, String);

    return Collections.Follow.find({ owner: username });
});

Meteor.publish("pages.timeline", function (username) {
    check(username, String);

    let followCursor = Collections.Follow.find({ owner: username });

    let users = _.pluck(followCursor.fetch(), "username");

    return [
        followCursor,
        Collections.Messages.find({ owner: { $in: users } })
    ];
});