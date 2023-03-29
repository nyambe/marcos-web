// Importa el módulo 'node-fetch'
const fetch = require("node-fetch");

(async () => {
  const arguments = process.argv;

  if (arguments && arguments.length > 0) {
    const workspaceArg = arguments[2]; // The workspace path
    const fileArg = arguments[3]; // The file path
    const frontMatterArg = arguments[4]; // Front matter data

    // Obtén el ID de YouTube
    const { youtube } = JSON.parse(frontMatterArg);
    const id = youtube;

    // Realiza la llamada a la API
    const response = await fetch(
      `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`
    );
    const data = await response.json();

    // Extrae los datos relevantes
    const { title, author_name, thumbnail_url, width, height } = data;

    // Construye el objeto
    const updatedFrontMatter = {
      // title,
      description: author_name,
      author: author_name,
      slug: title,
      image: thumbnail_url,
      alt: "foto " + title,
      width,
      height,
      youtube: id,
      // etiquetas: "",
      // categorias: "",
      // draft: "",
      // lastmod: new Date().toISOString(),
      // date: new Date().toISOString(),
      // type: "youtube",
    };


    

    // Genera el output
    const output = JSON.stringify({
      frontmatter: updatedFrontMatter,
    });

    console.log(output)
  }
})();
