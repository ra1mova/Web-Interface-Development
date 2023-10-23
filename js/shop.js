const main = document.createElement('main')
main.className = 'container'
document.body.append(main)

const div = document.createElement('div')
div.id = 'divBlock'
main.append(div)

const textH1 = document.createElement('h1')
textH1.id = 'textH1'
textH1.innerHTML = 'Shopping IPhone'
main.prepend(textH1)

const nightMode = document.createElement('img')
nightMode.id = 'nightMode'
nightMode.setAttribute('src', './image/dayAndNight.png')
textH1.append(nightMode)

nightMode.addEventListener('click', () => {
	let theme = document.getElementById('theme')

	if (theme.getAttribute('href') == './css/light-mode.css') {
		theme.href = './css/night-mode.css'
	}else{
		theme.href = './css/light-mode.css'
	}
})



// create first div block

let todosArray = [
	{
		like: false,
		imgUrl: 'https://www.myphone.kg/files/media/7/7691.jpg',
		name: 'IPhone 11',
		color: 'black',
		count: 1,
		cost: 800,
		price: 800,
	},
	{
		like: true,
		imgUrl: 'https://svetofor.info/images/detailed/208/smartfon-apple-iphone-12-256-gb-ram-4-gb-product-red%E2%84%A2.jpg',
		name: 'IPhone 12',
		color: 'red',
		count: 1,
		cost: 900,
		price: 900,
	},
	{
		like: true,
		imgUrl: 'https://svetofor.info/images/detailed/250/smartfon-apple-iphone-13-pro-1024-gb-ram-gb-sierra-blue-1.jpg',
		name: 'IPhone 13',
		color: 'blue',
		count: 1,
		cost: 1000,
		price: 1000,
	},
]

const renderAllItems = () => {
	div.innerHTML = ''

	todosArray.forEach((item) => {
		renderBlock(item)
	})
}

function renderBlock(item) {
	const firstDivBlock = document.createElement('div')
	firstDivBlock.className = 'divBlockElements'
	div.append(firstDivBlock)

	const deleteAndLikeElements = document.createElement('div')
	deleteAndLikeElements.className = 'deleteAndLikeElements'
	firstDivBlock.prepend(deleteAndLikeElements)

	const deleteImg = document.createElement('img')
	deleteImg.setAttribute('src', './image/icons8-delete-64.png')
	deleteImg.className = 'elementDelete'
	deleteAndLikeElements.prepend(deleteImg)

	deleteImg.addEventListener('click', () => {
		todosArray = todosArray.filter((element) => element.name !== item.name)
		renderAllItems()
	})

	const likeImg = document.createElement('img')
	const likeImgUrl =
		item.like === true
			? './image/diselike.png'
			: './image/iconLike.png'

	likeImg.setAttribute('src', likeImgUrl)
	likeImg.className = 'elementLike'
	deleteAndLikeElements.append(likeImg)

	likeImg.addEventListener('click', () => {
		todosArray.forEach((element) => {
			if (element.name === item.name) {
				const newLike = !element.like
				element.like = newLike
			}
		})
		renderAllItems()
	})

	const blockPhone = document.createElement('div')
	blockPhone.className = 'blockPhone'
	firstDivBlock.append(blockPhone)

	const imgPhone = document.createElement('img')
	imgPhone.setAttribute('src', item.imgUrl)

	imgPhone.className = 'imgPhone'
	blockPhone.prepend(imgPhone)

	const nameIsPhone11 = document.createElement('h3')
	nameIsPhone11.innerHTML = item.name
	nameIsPhone11.className = 'nameIsPhone11'
	blockPhone.append(nameIsPhone11)

	let brElement = document.createElement('br')
	nameIsPhone11.append(brElement)

	let spanElement = document.createElement('span')
	spanElement.innerHTML = item.color
	nameIsPhone11.append(spanElement)

	const plusAndMinusIcons = document.createElement('div')
	plusAndMinusIcons.className = 'PlusAndMinusIcons'
	firstDivBlock.append(plusAndMinusIcons)

	const elementPlus = document.createElement('button')
	elementPlus.innerHTML = '+'
	elementPlus.className = 'elementPlus'
	plusAndMinusIcons.prepend(elementPlus)
	elementPlus.addEventListener('click', () => {
		todosArray.map((element) => {
			if (element.name === item.name) {
				element.count++
				element.cost = element.cost + element.price
			}
			return element
		})

		renderAllItems()
	})

	const elementNumber = document.createElement('p')
	elementNumber.innerHTML = item.count
	elementNumber.className = 'elementNumber'
	plusAndMinusIcons.append(elementNumber)

	const elementMinus = document.createElement('button')
	elementMinus.innerHTML = '-'
	elementMinus.className = 'elementMinus'
	plusAndMinusIcons.append(elementMinus)

	const costElement = document.createElement('p')
	costElement.innerHTML = item.cost
	costElement.className = 'costElement'
	firstDivBlock.append(costElement)

	elementMinus.addEventListener('click', () => {
		todosArray.map((element) => {
			if (element.name === item.name && element.count > 1) {
				element.count--
				element.cost = element.cost - element.price
			}
			return element
		})
		renderAllItems()
	})
}

renderAllItems()