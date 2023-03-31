// Importa el módulo 'node-fetch'
const fetch = require("node-fetch");
const slugify = (text) => {
  return text
    .toString()
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

// remove dot and accents from a string
const removeDiacritics = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

(async () => {
  const arguments = process.argv;

  if (arguments && arguments.length > 0) {
    const workspaceArg = arguments[2]; // The workspace path
    const fileArg = arguments[3]; // The file path
    const frontMatterArg = arguments[4]; // Front matter data

    // Obtén el ID de YouTube
    const { youtube, type } = JSON.parse(frontMatterArg);
    const id = youtube;

    // Realiza la llamada a la API
    const response = await fetch(
      `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`
    );
    const nombre = fileArg.split("/")
    const ruta = nombre[nombre.length - 1].split(".")[0]
    const data = await response.json();

    // Extrae los datos relevantes
    const { title, author_name, thumbnail_url, width, height } = data;
    const slug = `/${type}/${removeDiacritics(ruta)}`;
    // Construye el objeto
    const updatedFrontMatter = {
      // title,
      description: author_name,
      author: author_name,
      slug: slug,
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
