// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Sure thing. Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I'm ${config.name}.

Software engineer based (primarily) in South America.
Currently working at an international software development agency.
Responsibilities focused around product design and solutions architecture.

Love literary fiction, coffee, cats, and video games.
Fine with the job situation but open to side gigs.
Sometimes stream my work day on Twitch.

Feel free to holla at me by sending an <u><a class="text-light-blue dark:text-dark-blue underline" href="mailto:bryan@granados.cc" target="_blank">email</a></u>
or by scheduling a chat with me on <u><a class="text-light-blue dark:text-dark-blue underline" href="https://calendly.com/bryangranados/chat" target="_blank">Calendly</a></u>.

Hope you have a wonderful day!

Try out these commands:
'sumfetch' - short contact summary.
'resume' - my resume.
'bio' - my github readme bio.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Coffee
export const coffee = async (args: string[]): Promise<string> => {
  return `You can buy me coffee using one of the two links below:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.coffee_urls.kofi}" target="_blank">kofi</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.coffee_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const bio = async (args: string[]): Promise<string> => {
  window.open(`${config.bioUrl}/`);

  return 'Opening my github readme bio...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `i'm honestly surprised you're using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `you
think
this
is
your
computer?

Try 'cd.'`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `you still think this is your computer, huh?`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `actually, you might as well use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://ubuntu.com/', '_blank');
  return `Permission granted: redirecting you to the best Linux distro ... `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  BBBBBBBBBBBBBBBBB           GGGGGGGGGGGGG
  B::::::::::::::::B       GGG::::::::::::G
  B::::::BBBBBB:::::B    GG:::::::::::::::G
  BB:::::B     B:::::B  G:::::GGGGGGGG::::G
    B::::B     B:::::B G:::::G       GGGGGG
    B::::B     B:::::BG:::::G              
    B::::BBBBBB:::::B G:::::G              
    B:::::::::::::BB  G:::::G    GGGGGGGGGG
    B::::BBBBBB:::::B G:::::G    G::::::::G
    B::::B     B:::::BG:::::G    GGGGG::::G
    B::::B     B:::::BG:::::G        G::::G
    B::::B     B:::::B G:::::G       G::::G
  BB:::::BBBBBB::::::B  G:::::GGGGGGGG::::G
  B:::::::::::::::::B    GG:::::::::::::::G
  B::::::::::::::::B       GGG::::::GGG:::G
  BBBBBBBBBBBBBBBBB           GGGGGG   GGGG

Type 'about' to read a blurb about me.
Type 'sumfetch' to see a contact summary.
Type 'help' to see the list of available commands.
Don't like the terminal? Click <u><a class="text-light-blue dark:text-dark-blue underline" href="https://bryangranados.com/" target="_blank">here</a></u> for a friendlier version.
`;
};
