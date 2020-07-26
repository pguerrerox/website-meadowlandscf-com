# meadowlandscf.com

This is a static website build with a React Framework `Next.js` and deploy on `Github Pages`.

### Technologies

- HTML - CSS - JS - JSX
- React.js
- Next.js 
- Bootstrap
- Sass

Happy coding!

### Challenges <sub>(next.js)</sub>
- CSS with style-jsx
Limited support on vscode for highlight of the code, so try importing css from individual files.

Got it working by adding a `next.config,js` file and adding a config key to change the behaviour of webpack.
```bash
webpack: (config, { defaultLoaders }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      defaultLoaders.babel,
      {
        loader: require('styled-jsx/webpack').loader,
        options: {
          type: 'scoped'
        }
      }
    ]
  });
}
```
- Getting data from local files at bundling time (for translation later)
Wanted to get data from a local JSON file, to import the website's content in different languajes at built time.

Try using node's fs module, but couldn't use it on individual components, according to next docs, this is only
possible on a special function `getStaticProps` or `getInitialProps`, but to actually have access to fs before bundling, a config 
needs to be added to the `next.config.js` file
```bash
 webpack: (config, { defaultLoaders }) => {
   config.node = {
      fs: 'empty'
    }
 }
```

- Including Bootstrap/Sass

Decided to use Bootstrap to style this project, since I needed the practice, why not. Had to refactor all the code before v0.1.2 and 
challenge #1 do no apply anymore. Also, will have to include SASS to the project to be able to modify some Bootstrap Defaults.

Included Sass and modified the default color to the project's colors.

Had to install '@zeit/next-sass' and set the config file to:
```bash
module.exports = withSass({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  },
})
```

- React Function components

Interesting enough, functional components run functions (like onlick events) with the context from there defined parent. 
(is this a reach behavior? or next.js mod?)