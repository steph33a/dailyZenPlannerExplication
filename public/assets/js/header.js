function renderHeader() {
  //Fetch le template de la navbar
  return fetch("../assets/components/header.html")
    .then((response) => response.text())
    .then((templateHTML) => {
      // Parsez le contenu du template HTML
      const parser = new DOMParser();
      // Transforme le contenu en DOM
      const templateDoc = parser.parseFromString(templateHTML, "text/html");
      //Récupère le contenu html
      const header = templateDoc.getElementById("header").content;
      /** Ajouter ICI les changement au Header tel que l'avatar de l'user par exemple, la liste des notifications, les messages, ... */
      //Créer un élément DOM avec le contenu du template HTML récupérer
      let renderHeader = document.importNode(header, true);
      //Envoie le résultat à la vue
      document.getElementById("headerMain").appendChild(renderHeader);
      return true;
    });
}
renderHeader();