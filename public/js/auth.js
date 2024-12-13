// Ajoutez cet événement lorsque le formulaire est soumis
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const enteredPassword = document.getElementById("password").value; // Récupère le mot de passe entré
  const correctPasswordHash = "e99a18c428cb38d5f260853678922e03"; //
  // Fonction pour générer un hash MD5 du mot de passe
  function hashPassword(password) {
    return CryptoJS.MD5(password).toString(); // Utilise CryptoJS pour générer un hash MD5
  }

  // Compare le hash du mot de passe entré avec le hash correct
  if (hashPassword(enteredPassword) === correctPasswordHash) {
    // Si le mot de passe est correct, enregistre-le dans localStorage
    localStorage.setItem("password", enteredPassword);

    // Redirige vers la page protégée
    window.location.href = "/index.html";
  } else {
    // Si le mot de passe est incorrect, affiche un message d'erreur
    document.getElementById("error-message").style.display = "block";
  }
});
