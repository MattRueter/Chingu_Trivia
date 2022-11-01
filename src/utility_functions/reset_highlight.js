export function resetHighlight (){
	const allOptions = document.getElementById('optionsBox').children;
				for(let i=0; i < allOptions.length; i++){
					if(allOptions[i].classList[1]==='selectedOption'){
						allOptions[i].classList.remove('selectedOption');
					}
				}
}