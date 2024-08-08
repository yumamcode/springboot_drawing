document.addEventListener("DOMContentLoaded",()=>{
	
	const $addButton = document.getElementById("addButton");
	
	const addDrawingList = () => {
		const $addTarget = document.getElementById("addTarget");
		const $drawingList = document.getElementById("drawingList");
		const addTarget = $addTarget.value;
		
		if(addTarget == ""){
			alert("入力欄が空です。")
			return;
		}
		
		const $liElement = document.createElement("li");
		
		const $deleteButton = document.createElement("button");
		
		$deleteButton.type = "button";
		$deleteButton.textContent = "削除";
		$deleteButton.classList.add(["mx-2"]);
		
		const deleteDrawingItem = function() {
			
			this.parentNode.remove();
			
		}
		
		$deleteButton.addEventListener("click",deleteDrawingItem);
		$liElement.appendChild(document.createTextNode(addTarget));
		$liElement.appendChild($deleteButton);
		
		$drawingList.appendChild($liElement);

	}
	
	const clearAddTarget = ()=>{
		const $addTarget = document.getElementById("addTarget");
		$addTarget.value = "";
	}
	
	$addButton.addEventListener("click",addDrawingList);
	$addButton.addEventListener("click",clearAddTarget);
	
	const $startDrawingButton = document.getElementById("startDrawingButton");
	
	const startDrawing = () => {
		const $drawingList = document.getElementById("drawingList");
		const $liElements = $drawingList.children;
		
		const drawingList = [];
		
		for(element of $liElements){
			drawingList.push(element.textContent);
		}
		
		const ramdomNumber = Math.round(Math.random() * 1000) % $liElements.length;
		
		const drawingResult = drawingList.splice(ramdomNumber,1);
		
		const $drawingResult = document.getElementById("drawingResult");
		
		$drawingResult.textContent = drawingResult;
	}
	
	const clearDrawingResult = ()=>{
		const $drawingResult = document.getElementById("drawingResult");
		$drawingResult.textContent = "";
	}
	
	const clearAndStartDrawingWithInterval = (interval) =>{
		clearDrawingResult();
		setTimeout(startDrawing,interval);
	}
	
	$startDrawingButton.addEventListener("click",()=>clearAndStartDrawingWithInterval(500));
});

