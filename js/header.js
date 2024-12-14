function renderHeader() {
  //Fetch le template de la navbar
  // Fetch le fichier de template
  return fetch("./assets/components/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load header: ${response.statusText}`);
      }
      return response.text();
    })
    .then((templateHTML) => {
      // Parse le contenu du fichier en DOM
      const parser = new DOMParser();
      const templateDoc = parser.parseFromString(templateHTML, "text/html");
      const headerTemplate = templateDoc.getElementById("header");
      if (!headerTemplate) {
        throw new Error("Header template not found in the file.");
      }

      // Clone le contenu du template et l'ajoute au DOM
      const headerContent = headerTemplate.content.cloneNode(true);
      document.getElementById("headerMain").appendChild(headerContent);
    })
    .catch((error) => console.error("Error rendering header:", error));
}
renderHeader();
