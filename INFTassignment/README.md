

# My INFT3102 Assignment 1


Hello!! my name is Yashvi and this is my assignment 1 for INFT3102 class.

- This assignment has a static site generated using Eleventy which uses various templating engines like Nunjucks and Markdown to render content. 

## Prerequisites 
#### before running the project the following things should be installed on your system:

- Node.js and Npm

#### to check if you have both of it on you system run the following command: 
- node -v
- npm -v 

#### to get started after this clone the repository onto your device and install the  required node.js dependencies by writing ***npm install*** . This will install all teh dependencies in the package.json file.

#### Run npm run build to serve the server online on ***http://localhost:8080/***

## Project Structure 

/src \
    /_includes: it has all the Reusable components and layouts. \
    index.njk: it is the main homepage template. \
    /css: it contains all the styling for the pages.


- I used a passthrough file copy in the eleventy.js configuration to move the static assets like css and image directly to the output folder.
- In the project i have used Nunjucks for pages and Markdown for all the content pages.



