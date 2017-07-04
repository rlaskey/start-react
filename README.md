https://github.com/facebookincubator/create-react-app is great, but I
wasn't understanding how some of the pieces fit together. This is
instead the result of starting with the packages directly.

Please add on and extend everything that's here. The short version of
the MPL is that if you have changed one of these files, you need to
publish those changes. Really, though, just extend these to include your
own files; you don't have to push those back.

First, just run `yarn` to get packages installed. Then, check out the
`scripts` object in `package.json`. You can run `yarn run watch`, for
example, to build the development version w/ the webpack watch loop.

Next, to serve up what's here, try out `http-server`:

```
npm install -g http-server
http-server build/
```

It's possible to add this into its own script, here, but once you have
it globally, you can share any other directories more easily.
