

# My INFT3102 Assignment 1


Hello!! my name is Yashvi and this is my assignment 1 for INFT3102 class.

- This assignment has a static site generated using Eleventy which uses various templating engines like Nunjucks and Markdown to render content. 

## Prerequisites 
#### Before running the project the following things should be installed on your system:

- Node.js and Npm

#### To check if you have both of it on you system run the following command: 
- node -v
- npm -v 

#### To get started after this clone the repository onto your device and install the  required node.js dependencies by writing:
- npm install

#### To run the program locally with the eleventy server use the command:
- npm run dev

#### To generate the static files use the command:
- npm run build


#### Run npm run build to serve the server online on ***http://localhost:8080/***

## Project Structure 

- /src folder: contains all teh source files like html, handlebars, css, images.
- /dist folder: the output folder where all the static generated files are placed after the build.
- package-json: defined the package dependencies nad the npm scripts.
- eleventy.config.js: The configuration file that sets up custom Handlebars helpers and handles passthrough file copying.


- I used a passthrough file copy in the eleventy.js configuration to move the static assets like css and image directly to the output folder.
- In the project i have used Nunjucks for pages and Markdown for all the content pages.


#### Maintaining the Project
- CSS Changes: Update styles in src/css and they will be automatically passed through to the dist/css folder on build.

- Image Updates: Place any images in the src/img folder, and they will be included in the build automatically.

- Custom Helper Adjustments: If needed, modify or add new Handlebars helpers in the eleventy.config.js file under the handlebars.registerHelper section.



