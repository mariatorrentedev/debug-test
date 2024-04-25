# Canny Debugging Test

Howdy Candidate, we've created this pared down version of Canny to get a better idea of your experience debugging web applications. Best of luck!

## Getting Started

1. **Initialize your environment**

We recommend using nvm for managing node versions.

Install nvm from [here](https://github.com/creationix/nvm)

Then install the node version for this assessment:

```sh
nvm i
```

1. **Install dependencies**

Next you'll need to install this app

```sh
npm install
```

1. **Run the backend**

The backend is a node server. Everything to do with the server lives in `/server`.

Terminal tab #1:

```sh
npm run backend
```

1. **Run the frontend**

Webpack is used to bundle and serve our app. Everything to do with the frontend lives in `/app`.

Terminal tab #2:

```sh
npm run frontend
```

Once everything is running, you should see the app running http://127.0.0.1:8080.

## Customer Issues

For each of the following issues:

1. Identify the issue
2. Apply the fix
3. Provide a response to each technical customer in 1-2 sentences

**Customer 1:** When I open the application, my posts do not load and all I see is a 'server error'.

**1. 2.** The `SSToken` in `utils/AJAX.js` was corrupted, instead of using the key `name` in the parameters, there was a spelling issue as `nayme`; I used
[jwt.io](https://jwt.io/) in order to fix it and grab the correct one.

**3**. I apologize for the inconvenience, but great news! We've identified the issue – it was a small typo. Our team is currently addressing it, and we expect everything return to normal shortly. You don't need to take any action at this time, but please feel free to reach out if you have any other concerns or require further assistance. We're here to help!

**Customer 2:** When I click on "Top" or "Old", the selector does not update with my new selection.

**1. 2.** In the original reducer `app/reducers/sort.js`, the state was being mutated directly when handling the `ChangeSort` action. This violates the principle of immutable state in Redux. I refactored it to ensure that the state mutations are avoid, returning a new state object with the updated `sort` value.

**3.** Hey, thanks for flagging that! Our posts sorting was a bit off-kilter behind the scenes, causing a wrong data displayed in the dropdown, but we've straightened it out. We're here for you, so if anything else comes up, just give us a shout.

**Customer 3:** When I sort by "Top", there are posts with only 28 votes ranking higher than posts with 180 votes!

**1** The original `sortBy` fn in `server/utils/sortBy.js` was doing the merging comparison by key incorrectly.

**2.** We optimized it using the built-in `sort()` JavaScript method; using custom sorting algorithm based on recursion and merging, apart that is really hard to understand, it's not as efficient as the built-in option.

**3.** Dear customer, we've identified and addressed the issue where the sorting order was not aligning correctly with the specified criteria, particularly when sorting posts by vote counts using the `Top` option in the dropdown. With this fix in place, you should notice that posts are now sorted accurately based on the specified criteria. We appreciate your patience, if you encountered any further issues, please don't hesitate and reach out.

**Customer 4:** When I page through posts, although the posts are changing, the vote count in the top left corner does not match the total count of votes of the displayed posts.

## 🎉 You're Done 🎉

Congrats on completing our assessment. All that is left for you to do is submit your assessment. We made a command that will zip your submission and send it to us. Send us an email to confirm that we got it.

```sh
npm run submit
```
