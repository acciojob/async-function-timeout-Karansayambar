//your JS code here. If required.

document.getElementById("btn").addEventListener("click", async() => {
	const text = document.getElementById("text").value;
	const delay = document.getElementById("delay").value;

	if(text && delay){
		let mypromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(text);
		}, delay);
	});
		let text2 = await mypromise;
		if(text2){
			const output = document.getElementById("output").textContent = text2;
		}
	}
})
