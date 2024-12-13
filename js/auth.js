// Ajoutez cet événement lorsque le formulaire est soumis
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const enteredPassword = document.getElementById("password").value; // Récupère le mot de passe entré
  const correctPasswordHash = "3eeaca97ed135ec5895c4fe751942712"; //
  console.log("Hash attendu :", correctPasswordHash);
  // Fonction pour générer un hash MD5 du mot de passe
  console.log(typeof CryptoJS);
  function hashPassword(password) {
    return CryptoJS.MD5(password).toString(); // Utilise CryptoJS pour générer un hash MD5
  }
  console.log("Hash généré à partir du mot de passe saisi :", hashPassword(enteredPassword));
  // Compare le hash du mot de passe entré avec le hash correct
  if (hashPassword(enteredPassword) === correctPasswordHash) {
    // Si le mot de passe est correct, enregistre-le dans localStorage
    localStorage.setItem("password", enteredPassword);

    // Redirige vers la page protégée
    window.location.href = "/projet.html";
  } else {
    // Si le mot de passe est incorrect, affiche un message d'erreur
    document.getElementById("error-message").style.display = "block";
  }
});
