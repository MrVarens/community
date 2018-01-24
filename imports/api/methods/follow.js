import FollowCollection from "/imports/api/collections/follow";
import FollowUserForm from "/imports/api/form-schemas/follow-user";

Meteor.methods({
    "follow.add": function (doc) {
        try {
            check(doc, Object);
        } catch (e) { throw new Meteor.Error(400, "Document is incorrect!"); }

        FollowUserForm.validate(doc);

        if (doc.from != doc.to && !FollowCollection.findOne({ owner: doc.from, username: doc.to }))
            FollowCollection.insert({ owner: doc.from, username: doc.to });
    }
});