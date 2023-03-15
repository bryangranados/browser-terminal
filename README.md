# [Browser Terminal](#)

A highly customizable, easy-to-use, and minimal terminal-styled website, powered by Next.js.

<p align="center">
<img src="/public/assets/bryan-works_screenshot.png" width="600" height="500"><br>
<strong><a href="https://www.bryan.works/" target=_blank>My version</a></strong>
</p>

## Installation

Making your own terminal website is simple. You only need to work with **one** file: `config.json`.

After you've cloned or downloaded this repo, run `yarn install && yarn dev` and start editing `config.json` to build your own terminal website. The default port is 3000.

### Docker Usage

Clone or download the repo and edit `config.json` to your liking. Then run the following to start the container in the background:

```shell
docker-compose up -d
```

You can also try changing `Dockerfile` & `docker-compose.yml`!
Learn more about Docker [here](https://docs.docker.com/get-started/overview/ 'Docker documentation').

## Configuration

### Basic Configuration

The majority of this repo's configurations are done through the `config.json` file.

```javascript
{
  "readmeUrl": // create a GitHub README and link it here
  "title": // title of the website
  "name": // your name, included in 'about' command
  "ascii": // ascii art to display
  "social": {
    "github": // only your github username
    "linkedin": // only your linkedin name
  },
  "email": // your email
  "ps1_hostname": "liveterm" // hostname in terminal
  "ps1_username": "visitor", // username in terminal
  "resume_url": "../resume.pdf", // path/url to your resume
  "non_terminal_url": "W",
  "colors": {
    "light": {
      ...
    },
    "dark": {
      ... // you can use existing templates in themes.json or use your own.
    }
  }
}
```

### Themes

You can find several pre-configured themes in `themes.json`, and you can replace the colors in `config.json` with the theme color you like. The themes come from [this website](https://glitchbone.github.io/vscode-base16-term/#/).

### Favicons

Favicons are located in `public/`, along with the other files you may want to upload to your website. I used this [website](https://www.favicon-generator.org/) to generate favicons.

### Banner

You may also want to change the output of the `banner` command. To do that, simply paste your generated banner in `src/utils/bin/commands.ts`. I used this [website](https://manytools.org/hacker-tools/ascii-banner/) to generate my banner.

### Advanced Configuration

If you want to further customize your page, feel free to change the source code to your liking. It's very simple to add more commands. You could make it display the name and URL of all your projects, for example. Or the website could be your new home page.

## Deploy on Vercel

The easiest way to deploy a Next.js app is to use [Vercel](https://vercel.com/) from the creators of Next.js.

You can install the `vercel` CLI and follow the instructions [here](https://vercel.com/docs/concepts/deployments/overview), but this is completely optional.

I recommend that you just connect your GitHub account to Vercel and have Vercel automatically deploy the repository for you.

## Credit

Based on M4TT72's [Terminal](https://github.com/m4tt72/terminal).
