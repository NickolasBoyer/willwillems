---
layout: Project
author: Will Willems
lang: en-US
year: 2020
tags: Vue.js, Browser Extension, Devtools
icon: '/img/icon/devsync-dark.svg'
iconDark: '/img/icon/devsync-dark.svg'
projectUrl: https://devsync.co

---
# Devsync

Devsync is a browser based tool that enables you to apply CSS edits visually from your browser while applying these same CSS changes in your editor in the background trough a live websocket connection.

Devsync is able to edit CSS, SCSS, LESS and SASS using its visual editor and currently has most popular CSS properties integrated in its UI. By hooking into the Chrome debugger it’s able to find the mapped location of a page’s CSS using CSS sourcemaps. It then uses VS Code to apply these edits to the original code

The Devsync website and the Chrome extension UI were both built with Vue. Nowadays I would strongly recommend anyone to pick Svelte for projects as technical as this one for it has a much more generalised design that doesn’t get in the way when used in an unusual manner.

Devsync launched in February 2020 and got “Product of the day” on Product Hunt along with hundreds of upvotes and a lot of positive feedback.

After a couple of weeks sales for Devsync were put on pause in order to properly iterate towards product market fit using its initial customer base.

<a href="https://www.producthunt.com/posts/devsync?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-devsync" target="_blank" style="border: none;"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=184724&theme=light" alt="Devsync - Visually edit CSS. Live-sync the result with your editor. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>