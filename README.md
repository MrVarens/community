# Community

Recruitment task. Small social application.

### Prerequisites

Project requires this applications to be installed:
- `node`/`npm`: https://nodejs.org/en/download/
- `meteor`: https://www.meteor.com/install

### How to start

Once you have installed required applications open system console, change directory to project path and run this commands:
```
npm install
meteor
```

Right after that application should be running on localhost:3000, if you want to change port you should use this command `meteor --port 3000`

# API

Each api call should contains header `content-type: application/json`.

## Common
- `{username}` is string with name of user.
- each request return json.

## Messages

Address: /api/user/`{username}`/messages

*GET:*
Return list of all messages posted by `{username}`.

Return example:
```
[{"_id":"JZ8c8WvxB8ToYCw9o","owner":"someone","text":"some message","createdAt":"2018-01-24T16:22:38.963Z"},
{"_id":"M2tbEGzZgRAsNEknM","owner":"someone","text":"Hello!","createdAt":"2018-01-24T16:31:25.224Z"}]
```

*POST:*
Add message by `{username}`. If sucessfull return `_id` of created message.

Request body example:
```
{ "text": "content of message" }
```

Return example:
```
"JZ8c8WvxB8ToYCw9o"
```

## Following

Address: /api/user/`{username}`/following

*GET:*
Return list of all users followed by `{username}`.

Return example:
```
[{"_id":"57YewgkfdzSPyksGT","owner":"someone","username":"bob","createdAt":"2018-01-24T16:05:59.136Z"},
{"_id":"M2tbEGzZgRAsNEknM","owner":"someone","username":"math","createdAt":"2018-01-24T16:05:59.136Z"}]
```

*POST:*
Add user to follow list of `{username}`. If sucessfull return `_id` of created follow.

Request body example:
```
{ "username": "user_to_follow" }
```

Return example:
```
"JZ8c8WvxB8ToYCw9o"
```

## Timeline

Address: /api/user/`{username}`/timeline

*GET:*
Return list of all messages posted by every user followed by `{username}`.

Return example:
```
[{"_id":"JZ8c8WvxB8ToYCw9o","owner":"bob","text":"some message","createdAt":"2018-01-24T16:22:38.963Z"},
{"_id":"M2tbEGzZgRAsNEknM","owner":"math","text":"Hello!","createdAt":"2018-01-24T16:31:25.224Z"}]
```
