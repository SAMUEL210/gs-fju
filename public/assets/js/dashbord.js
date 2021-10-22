const labels = [
    'EPHRAIM',
    'JUDA',
    'NEPHTALI',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Samedi 17 octobre 2021',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [12, 13, 18, 20],
        barThickness: 100,

    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

var myChart = new Chart(
    document.getElementById('rapportSamediDernier'),
    config
);

const labels1 = [
    'SAMEDI 03 OCTOBRE 2021',
    'SAMEDI 10 OCTOBRE 2021',
    'SAMEDI 17 OCTOBRE 2021',
];
const data1 = {
    labels: labels1,
    datasets: [{
        label: 'OCTOBRE',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [86, 40, 38],
        barThickness: 100,

    }]
};

const config1 = {
    type: 'bar',
    data: data1,
    options: {}
};

var myChart = new Chart(
    document.getElementById('rapportTousSamedis'),
    config1
);

var present = [
    { nom: 'MARONE', prenom: 'Samuel Ibou', tribu: 'Juda' },
    { nom: 'BOUYOBART', prenom: 'Gilles', tribu: 'Nephtalie' },
    { nom: 'ALBERTO', prenom: 'Landry', tribu: 'Ephraim' }
]

var absent = [
    { nom: 'MARONE', prenom: 'Samuel Ibou', tribu: 'Juda' },
    { nom: 'BOUYOBART', prenom: 'Gilles', tribu: 'Nephtalie' },
    { nom: 'ALBERTO', prenom: 'Landry', tribu: 'Ephraim' }
]

var presentDiv = document.querySelector('.present')
var absentDiv = document.querySelector('.absent')

for (i of present) {
    let li = document.createElement('li')
    let span = document.createElement('span')
    let form = document.createElement('form')
    let inputText = document.createElement('input')
    let inputButton = document.createElement('input')
    inputText.type = "text"
    inputText.className = 'masque'
    inputButton.type = 'submit'
    inputButton.className = 'btnbtn btn-info btn-sm m-1'
    inputButton.value = 'Infos'
    form.method = "get"
    form.appendChild(inputText)
    form.appendChild(inputButton)
    li.className = 'list-group-item d-flex justify-content-between align-items-center li-hover'
    li.innerHTML = i.prenom + " " + i.nom + ' de ' + i.tribu
    span.className = 'badge bg-success'
    span.innerHTML = "Present"
    li.appendChild(span)
    li.appendChild(form)
    presentDiv.appendChild(li)
}
for (i of absent) {
    let li = document.createElement('li')
    let span = document.createElement('span')
    let form = document.createElement('form')
    let inputText = document.createElement('input')
    let inputButton = document.createElement('input')
    inputText.type = "text"
    inputText.className = 'masque'
    inputButton.type = 'submit'
    inputButton.className = 'btnbtn btn-info btn-sm m-1'
    inputButton.value = 'infos'
    form.method = "get"
    form.appendChild(inputText)
    form.appendChild(inputButton)
    li.className = 'list-group-item d-flex justify-content-between align-items-center li-hover'
    li.innerHTML = i.prenom + " " + i.nom + ' de ' + i.tribu
    span.className = 'badge bg-danger'
    span.innerHTML = "Absent"
    li.appendChild(span)
    li.appendChild(form)
    absentDiv.appendChild(li)
}