const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");
const htmlmin = require("html-minifier-terser");

const md = new MarkdownIt({ html: true, breaks: true, linkify: true });

// Carga todos los Markdown de content/landing.md
function loadMarkdownFile(file) {
  const filepath = path.join(file);
  if (!fs.existsSync(filepath)) return {};
  const raw = fs.readFileSync(filepath, "utf8");
  const parsed = matter(raw);
  return {
    ...parsed.data,
    body: md.render(parsed.content || ""),
    _file: filepath,
  };
}

module.exports = function(eleventyConfig) {
  // Datos globales
// eleventy.js
// Cambio recomendado:
eleventyConfig.addGlobalData("landing", () => loadMarkdownFile("./content/landings/landing-demo.md"));


  // Filtros
  eleventyConfig.addFilter("markdown", (str) => md.render(str || ""));

  // Passthrough de assets y CMS
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // Minificación HTML en producción
  eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
    if (process.env.ELEVENTY_ENV === "production" && outputPath && outputPath.endsWith(".html")) {
      return await htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
      });
    }
    return content;
  });

  // Datos globales adicionales - comint
  eleventyConfig.addGlobalData("version", Date.now());
  eleventyConfig.addGlobalData("build", { year: new Date().getFullYear() });
  eleventyConfig.addGlobalData("site", { name: "Landing Demo" });

  return {
    dir: {
      input: ".",
      includes: "includes",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};


