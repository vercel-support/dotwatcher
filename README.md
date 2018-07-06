
# Dotwatcher

_Long distance bike race coverage_

Dotwatcher is powered by Zeit’s [Next.js], a framework for server-rendered react apps.

All the content is on [Contentful] and is retrieved via their [node client].

## Local development

To get started clone the repo and run `npm install`.

To be able to access the content for development you’ll need to create a file in the base of the repo called `now-secrets.json` and inside that paste:

```json
{
  "@contentful-api-token": "",
  "@pusher-app-id": "",
  "@pusher-key": "",
  "@pusher-secret": "",
  "@mailchimp": "",
  "@analytics": "UA-XXXXXX-X",
  "@scrapey-api-key": ""
}
```

And paste in the relevant token’s that you need. You can manage without everything except contentful, if you’re in a hurry.

This file is only used for local development. In production the secrets are stored with `now secret`, you can learn more about that [here](https://zeit.co/blog/environment-variables-secrets).

Now run `npm run dev` to get going.

## Deploying

To deploy changes you’ll need an account with [Zeit.co] and then someone needs to add you to the dotwatchers team.

You’ll need to download the [Now cli] and then switch teams with `now switch`

Then do deploy a new instance run `now` from within the repo.

To alias that to our domains run `now alias` (the aliases are stored in now.json)

[Next.js]: https://github.com/zeit/next.js/
[Contentful]: http://contentful.com/
[node client]: https://github.com/contentful/contentful.js/
[Zeit.co]: https://zeit.co
[Now cli]: https://zeit.co/now
