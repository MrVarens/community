import MessagesCollection from "/imports/api/collections/messages";
import PostMessageForm from "/imports/api/form-schemas/post-message";

Meteor.methods({
    "message.post": function (doc) {
        try {
            check(doc, Object);
        } catch (e) { throw new Meteor.Error(400, "Document is incorrect!"); }

        PostMessageForm.validate(doc);

        MessagesCollection.insert({ owner: doc.username, text: doc.message });
    }
});