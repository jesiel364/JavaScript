var res = document.querySelector('div#res')
var c = 1
var b = 3

function exec_tarefas () {
	
	while(c <= b){
		res.innerHTML += `<p id="${c}">&#9989;${c} passo concluido!</p>`
		
		if (b > 6){
			res.setAttribute('style', 'overflow-y: scroll;')
		}
		c++

	}

}



function add_task () {
	if (b > 6){
			res.setAttribute('style', 'overflow-y: scroll;')
		}else{
			res.setAttribute('style', 'overflow-y: inherit;')
		}
	b = 7
	res.innerHTML += `<p id="${c}">&#9989;${c} tarefa adicionada!</p>`
	c++

	if(c != 0){
		p1 = document.querySelector('p#p1')
		res.removeChild(p1)}
}

function rem_task () {;
	var p = document.getElementById(c-1)
	if (b > 6){
			res.setAttribute('style', 'overflow-y: scroll;')
		}else{
			res.setAttribute('style', 'overflow-y: inherit;')

		}
	res.removeChild(p)
	c--
	while(c == 1){
	
	res.innerHTML = `<p id="p${c}">Sem tarefas</p>`
	break;
}
}
