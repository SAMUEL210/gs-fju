let divJeunes = document.querySelector('.jeunes')
var Jeunes = [{
        nom: 'Ephraim',
        jeunes: ['Collaboratrice Auréliane', 'Ouvriere Cynthia', 'Collaboratrice Béartice', 'Landry', 'Franklin', 'Merdi']
    },
    {
        nom: 'Juda',
        jeunes: ['Collaboratrice Auréliane', 'Ouvriere Cynthia', 'Collaboratrice Béartice', 'Landry', 'Franklin', 'Merdi']
    },
    {
        nom: 'Nephtalie',
        jeunes: ['Collaboratrice Auréliane', 'Ouvriere Cynthia', 'Collaboratrice Béartice', 'Landry', 'Franklin', 'Merdi']
    }
]

for (var tribu in Jeunes) {
    let divP = document.createElement('div')
    let titre = document.createElement('h2')
    let div = document.createElement('div')
    let ul = document.createElement('ul')

    divP.className = 'tribuDiv text-center mx-2 mt-5'
    titre.innerHTML = Jeunes[tribu].nom
    ul.className = 'list-group text-center'

    for (let jeune in Jeunes[tribu].jeunes) {
        let li = document.createElement('li')
        let form = document.createElement('form')
        let inputText = document.createElement('input')
        let inputBsupr = document.createElement('input')
        let inputBinfo = document.createElement('input')

        inputText.type = "text"
        inputText.name = "iJ"
        inputText.value = Jeunes[tribu].jeunes[jeune]
        inputText.className = 'masque'

        inputBinfo.type = "submit"
        inputBsupr.type = "submit"

        inputBinfo.className = 'btnbtn btn-info btn-sm m-1'
        inputBsupr.className = 'btnbtn btn-danger btn-sm m-1'

        inputBinfo.value = 'Modifier'
        inputBsupr.value = 'Suprimmer'

        inputBsupr.name = 'suprimmer'
        inputBinfo.name = 'modifier'

        form.method = "get"
        form.appendChild(inputText)
        form.appendChild(inputBinfo)
        form.appendChild(inputBsupr)


        li.className = 'list-group-item d-flex justify-content-between align-items-center li-hover'
        li.innerHTML = Jeunes[tribu].jeunes[jeune]
        li.appendChild(form)
        ul.appendChild(li)
    }
    div.appendChild(ul)
    divP.appendChild(titre)
    divP.appendChild(div)
    divJeunes.appendChild(divP)


}