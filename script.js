// GET: https://api.dictionaryapi.dev/api/v2/entries/en/<word>


function constructContent(word) {
	axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
	.then((res) => {
		const data = res.data

		console.log(data[0])

		const container = document.querySelectorAll('.meaning-container')
		const animation = document.querySelector('.animation-search')

		container[0].innerHTML = 

		`<h2>${word}</h2><hr>` + 
		data[0].meanings.map(m => {
			return `<div class="meanings-wrapper">
			<div class="meaning-span">
			<p><i>${m.partOfSpeech}</i></p>
			<ul>`
			+
			m.definitions.map(obj => {
				return `<li>${obj.definition}</li>`
			})
			+
			`</ul>
			</div>
			</div>` 
		})
		data[0].meanings.map(m => {
			return `<div class="meaning-container"><p>Synonyms for ${word} :</p>` +
			m.synonyms.map(synonym => {
				return `<span>${synonym}</span>`
			}) +
			`</div>`
		})	

		animation.style.display = 'none';
		
		container.forEach(c => c.style.display = 'block')

	})
	.catch((err) => alert('Something went wrong'))
}


function submitForm(e) {
	e.preventDefault()
	const word = document.getElementById('search').value;
	constructContent(word)
}
