---
duration: 5 min
author: Will Willems
category: Svelte
img: ''
image: ''
date: 29/10/2020
lang: en-US

---
# Add Tailwind to a Svelte Webpack project

Wanna use Tailwind with a Svelte Webpack project? It's super easy and takes about 5 minutes.

## Install tailwind

Install Tailwind with `npm i tailwindcss` and create a `tailwind.config.js` file:

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

Run: `npm i postcss postcss-loader precss autoprefixer`

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
*In this example we're also importing `precss` and `*autoprefixer*`. These plugins are real no-brainers and you should probably use them unless you have a specific reason not to.*

## Optional: include global CSS trough JS

You might have been importing global CSS without processing it, you can fix this by moving the importing of this file to your JS entry file and putting the import at the top there like:

```js
//main.js
import '../public/global.css'
import App from './App.svelte';
```
*Webpack will automatically bundle this with your CSS based on the filetype.*