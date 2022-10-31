
export function resetColor(){
	const optionsDOM = document.getElementById('optionsBox').children;
	const children = optionsDOM.length;
		
	for(let i = 0; i<children; i++){
		optionsDOM[i].style.backgroundColor ='white';
	}
};