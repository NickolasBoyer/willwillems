---
duration: 5 min
author: Will Willems
category: Svelte
img: ''
image: ''
date: 10/27/2020
lang: en-US

---
# Add Tailwind to a Svelte Webpack project

Wanna use Tailwind with a Svelte Webpack project? It's super easy, takes about 5 minutes and should work without any problems!

## Install tailwind

Install Tailwind with `npm i -D tailwindcss` and create a `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```
*This file is not required but you really should include it, Tailwinds power lies in it's customizability.* 

## Install postCSS etc

Run: `npm i -D postcss postcss-loader precss autoprefixer`

Create a `postcss.config.js` file where you require `tailwindcss`:

```js
//postcss.config.js
module.exports = {
  plugins: [
    require('precss'),
		require('tailwindcss'),
    require('autoprefixer')
  ]
}
```
*In this example we're also importing `precss` and `autoprefixer`. These plugins are real no-brainers and you should probably use them unless you have a specific reason not to.*

**Make sure you've set the `emitCss` option of `svelte-loader` in your `webpack.config.js` to `true`.**

## Pipe your CSS trough PostCSS loader

Add this little piece of config to the bottom of your CSS `module.rules` in `webpack.config.js`, right after `css-loader`.

```
{
  loader: 'postcss-loader'
}
```

This actually sends your CSS code to PostCSS to be transformed.

## Optional: include global CSS trough JS

You might have been importing global CSS without processing it, you can fix this by moving the importing of this file to your JS entry file and putting the import at the top there like:

```js
//main.js
import './global.css';
import App from './App.svelte';
```

## Enabling Intellisense

Add `{ "svelte": "html" }` to the `includeLanguages` setting of the Tailwind Intellisense plugin to get autocompletion.
