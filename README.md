# meadowlandscf.com

This is a static website build with a React Framework `Next.js` and deploy on `Github Pages`.

### Technologies

- HTML - CSS - JS, JSX the usual suspects.
- React.js
- Next.js 

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