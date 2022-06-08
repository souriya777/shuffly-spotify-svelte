# TODO

## tools

- 👊 add routing (back button)
- add stores

## design

- design mobile general template (menu, player, browser)
- design "select" view
- design "playback" view
- design "popup playback" view
- design "shuffle" view
- design "queue" view
- design "parameter" panel
- add test to Component

## spotify api

- install lib or not to make api call ?
- authenticate to spotify API
- unit test
- list playlists
- play a song
- play a playlist

## dynamize views

- dynamize "log in" view
- dynamize "select" view
- dynamize "playback" view
- dynamize "popup playback" view
- dynamize "shuffle" view
- dynamize "queue" view
- dynamize "parameter" panel

## refactor

- install husky, lint-staged
- resolve eslint errors
- persist data ?
- clean FIXME file
- test on android

## feedback

- feedback by one user

# The Project

Shuffle among your Spotify's playlist with accuracy.

demo here 🔥 (optimize for mobile 📱) : https://shuffle-spotify-svelte.netlify.app

I implement the iOS (🍎) version of the mobile Spotify app.

# Technologies

Svelte (+SvelteKit) : I 💚 Svelte since I try it after learning React & Vue.
I love the simplicity & the conventions.

Vite : I was impressed when Evan You (creator of Vue.js) has demonstrated this new tool... Because I love Vue, I also decided to give it a try.

CSS : I use native CSS instead of pre-processors (e.g. sass, stylus...)

# My stack

modern-normalize : normalize.css like, but smaller, only target latest browser, improvements

# Best practices

Organize CSS properties :

https://medium.com/swlh/better-ways-to-organise-css-properties-9a066e7ded62
![summary](https://miro.medium.com/max/1400/1*RYMDPwcVjiZDbOJy4hfYmw.png)

Absolute path Vite + Svelte

https://stackoverflow.com/questions/70648181/how-to-resolve-absolute-path-using-vite-and-eslint-in-svelte

good debate on standardjs vs eslint

https://www.reddit.com/r/javascript/comments/joqw5b/askjs_standard_is_a_bad_idea/

4 fantastic tools : eslint, prettier, husky, lint-staged

https://www.reddit.com/r/javascript/comments/joqw5b/askjs_standard_is_a_bad_idea/

configure eslint + prettier + airbnb

https://eslint.org/docs/user-guide/getting-started

https://thomaslenaour.com/posts/configurer-eslint-prettier-airbnb-pour-vos-projets-javascript

eslint-plugin-svelte3 special conflicts

https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md

Hack 100vh viewport on iOS :

https://stackoverflow.com/a/54690380/4895079

Best way to import SVG icons into a Svelte app

https://stackoverflow.com/questions/66069647/best-way-to-import-svg-icons-into-a-svelte-app

Page transition in SvelteKit
https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6

Smooth transition (iOS-like) in svelte :

https://stackoverflow.com/questions/59882179/svelte-transition-between-two-elements-jumps

Fixed speed of a CSS animation duration :

https://stackoverflow.com/questions/34711237/set-css-transition-to-use-speed-instead-of-duration

## Demo

https://shuffle-spotify-svelte.netlify.app/

## Env variables to fill (.env)

VUE_APP_SPOTIFY_CLIENT_ID=<your client id>
VUE_APP_SPOTIFY_CLIENT_SECRET=<your client secret>
VUE_APP_SPOTIFY_REDIRECT_URI="https://your-deployed-url/spotify-api/"
VUE_APP_SPOTIFY_SCOPES=user-read-private user-read-email user-library-read playlist-read-private

## Spotify flow

1/ GET /authorize
=> authorization code
2/ GET /token
=> access token + refresh token
3/ GET /me
=> user id (useful for getting my playlists)

## help

scroll end
https://stackoverflow.com/questions/3962558/javascript-detect-scroll-end

bootstrap icons
https://icons.getbootstrap.com/
