
var current_page = 1;
var recordsPerPage = 5;
var table = document.getElementById("myTable");
var tbody = document.getElementById("tblBody")
var addRow = table.insertRow(0);
var rows = document.getElementById("tblRow")
var objJson = [
    {'authorName': 'Russell','authorId':'1313',},
    {'authorName': 'matt','authorId': '2545',},
    {'authorName': 'jake','authorId': '3345',},
    {'authorName': 'zeke','authorId': '4535',},
    {'authorName': 'phil','authorId': '5635',},
    {'authorName': 'marvin','authorId': '6634',},
    {'authorName': 'sam','authorId': '7532',},
    {'authorName': 'mike','authorId': '8645',},
    {'authorName': 'john','authorId': '9345',},
    {'authorName': 'drew','authorId': '1033',},
    {'authorName': 'cody','authorId': '1154',},
    {'authorName': 'zack','authorId': '1235',},
    {'authorName': 'fred','authorId': '1363',},
    {'authorName': 'will','authorId': '1463',},
    {'authorName': 'chris','authorId': '1563',},
    {'authorName': 'paul','authorId': '1675',},
    {'authorName': 'Solomon','authorId': '1745',},
    {'authorName': 'Billy','authorId': '1864',},
    {'authorName': 'David','authorId': '1974',},
    {'authorName': 'henry','authorId': '2074',},

];

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page)
        ;
    }
}
function changePage(page)
{   
    table.innerHTML = ""
    let count = 0;
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var page_span = document.getElementById("page");
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();
    
    for (let i = (page-1) * recordsPerPage; i < (page * recordsPerPage); i++) {
            
            addRow = table.insertRow(count);
            count++
            let cell = addRow.insertCell(0);
            let cell2 = addRow.insertCell(1);
            cell2.innerHTML = objJson[i].authorName;
            cell.innerHTML = objJson[i].authorId;
            addRow.append(cell , cell2)
            table.appendChild(addRow);
    }

    
    page_span.innerHTML = page;
    if (page == 1)
    {
        btn_prev.style.visibility = "hidden";
    }
    else{
        btn_prev.style.visibility = "visible";
    }
    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / recordsPerPage);
}

window.onload = function() {
    changePage(1);
    
};
