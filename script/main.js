
const countries = "https://free.currencyconverterapi.com/api/v6/countries";
const currency = "https://free.currencyconverterapi.com/api/v6/currencies";

fetch(countries)
.then(resp => resp.json())
.then((data) => {
	// for(i = 0; i< Object.keys(data.results).length;i++){
	//     console.log(data.results[(Object.keys(data.results)[i])].currencyId)
	// }
	for(let i in data){
		let datas  = Object.values(data[i]);
		let currencyName = datas.map(alls => alls.alpha3).sort();
		for (i in currencyName){
			from_selection(currencyName[i]);
			to_selection(currencyName[i]);
			console.log(currencyName[i]);
		}
	}
})
function from_selection(currencyName){
		let opt = document.createElement("OPTION");
		let selection = document.createTextNode(currencyName);
		opt.setAttribute("value", currencyName);
		opt.appendChild(selection);
		document.getElementById("sel").appendChild(opt);
}

function to_selection(currencyName2){
		let opt = document.createElement("OPTION");
		let selection = document.createTextNode(currencyName2);
		opt.setAttribute("value", currencyName2);
		opt.appendChild(selection);
		document.getElementById("sel2").appendChild(opt);
}

