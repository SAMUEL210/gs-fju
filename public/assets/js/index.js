const validerConnexion = document.querySelector('.se-connecter')
const email = document.getElementById('email')
const mp = document.getElementById('mp')
const champsvides = document.querySelector('.champs-vides')
const identifiantsIncorrectes = document.querySelector('.identifiant-incorrectes')
var checkbox = document.getElementById("afficher-mp");

validerConnexion.addEventListener('click', (e) => {
    e.preventDefault();

    if (email.value == "" || mp.value === "") {
        champsvides.classList.remove('masque')
        champsvides.classList.add('affiche')
        if (email.value == "")
            email.classList.add('is-invalid')
        else email.classList.remove('is-invalid')
        if (mp.value == "")
            mp.classList.add('is-invalid')
        else mp.classList.remove('is-invalid')
    } else if (email.value != "" && mp.value != "") {
        champsvides.classList.remove('affiche')
        champsvides.classList.add('masque')
        mp.classList.remove('is-invalid')
        email.classList.remove('is-invalid')

        axios({
                method: 'post',
                url: 'https://api-simarone-fusecrum.herokuapp.com/login',
                data: {
                    email: email.value,
                    mp: mp.value
                },
                responseType: 'json'
            })
            .then(function(reponse) {
                if (reponse.data.error) {
                    identifiantsIncorrectes.innerHTML = reponse.data.error
                    identifiantsIncorrectes.classList.remove('masque')
                    identifiantsIncorrectes.classList.add('affiche')

                    if (reponse.data.cause == 'Email')
                        email.classList.add('is-invalid')
                } else {
                    identifiantsIncorrectes.classList.remove('affiche')
                    identifiantsIncorrectes.classList.add('masque')

                    sessionStorage.setItem(
                        "x-access-token",
                        reponse.headers.authorization
                    );
                    sessionStorage.setItem("utilisateur", reponse.data.id);
                    window.location.replace("./accueil/index.html");

                }
            });
    }

})
checkbox.addEventListener('change', function() {
    if (this.checked) {
        mp.type = 'text'
    } else {
        mp.type = 'password'
    }
});