module.exports = function(eleventyConfig) {

    // Copy `img/` to `_site/img as well as the css to the cite css`
	eleventyConfig.addPassthroughCopy("./src/css");
    // Copy `img/` to `_site/img`
	eleventyConfig.addPassthroughCopy("./src/img");

    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };