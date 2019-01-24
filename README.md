## my-website
Live Site: https://yanlinzhu.herokuapp.com/

## Introduction
The overall project is served over [Express](https://github.com/expressjs/express). The front-end is built in [React](https://github.com/facebook/react) (ES6 Sytnax) with MaterializeCSS. In addition, it uses build tool like Webpack to bundle all javascript files into a single javascript file.

## File Structure
* public: Static assests (includes webpack bundle file, index.html and images etc...)  
* src: All React components (including root file called index.js).
* styles: Customizied css files.
* package.json: All Dependencies and script commands.
* webpack.common.js: General webpack configuration.
* webpack.dev.js: Merged webpack with common one for dev env (source-map: false).
* webpack.prod.js: Merged webpack with common one for prod env (source-map: true).

## How to start up the project?
All the commands are in package.json file. To start the project in dev mode, simply run
""npm run dev"", it will start up the express serve as well as webpack. In transition to production, 
simply run ""npm run build"", it will generate a production js file for the entire project.

## License 
The project is using MIT License.

## Can I use the template to create my own Porfolio? 
Yes, but please credit me you do!