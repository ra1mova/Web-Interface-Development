 



async function whichNation() {
    let firstName = document.querySelector('#firstName').value;

    let urlToNationliApi = `https://api.nationalize.io/?name=${firstName}`
    const flagContainer = document.getElementById('flagContainer')

    flagContainer.textContent = ""

    const response = await fetch(urlToNationliApi)

    const data = await response.json()
    console.log(data);


    for (let nation of data.country) {
        console.log(nation);

        let flagImageUrl = `https://countryflagsapi.com/png/${nation.country_id}`

        let imgElement = document.createElement('img')
        imgElement.src = flagImageUrl
        flagContainer.append(imgElement)
        
    }
}

document.querySelector('#myButton').addEventListener('click', whichNation)