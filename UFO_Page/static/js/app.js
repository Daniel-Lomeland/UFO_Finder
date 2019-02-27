var $tbody = document.querySelector("tbody");
var $date = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var tableData = data;

// Create function to render the data to table body

function renderTable(dataToRender) {
	$tbody.innerHTML = "";

	for (var i = 0; i < dataToRender.length; i++) {
		var currentSighting = dataToRender[i];
        var infos = Object.keys(currentSighting);
		var $row = $tbody.insertRow(i);
		for (var j = 0; j < infos.length; j++) {
			var info = infos[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = currentSighting[info];
		}
	}
}


// Create function to filter table based on input .

function handleSearchButtonClick() {
    var inputDate = $date.value;
	var filterData = []
	
	if (inputDate.length != 0) {
		filterData = tableData.filter(function(currentSighting){
			var sightingDate = currentSighting.datetime;
			return sightingDate.trim() === inputDate.trim();
		});
    }
    renderTable(filterData);
    event.preventDefault();
}

renderTable(tableData);