window.addEventListener('DOMContentLoaded', function () {
    let header1 = document.createElement("h1");
    let header2 = document.createElement("h2");
    let header3 = document.createElement("h3");
    let header4 = document.createElement("h4");
    let header5 = document.createElement("h5");
    let header6 = document.createElement("h6");
    let headerText1 = document.createTextNode("This is an h1")
    let headerText2 = document.createTextNode("This is an h2")
    let headerText3 = document.createTextNode("This is an h3")
    let headerText4 = document.createTextNode("This is an h4")
    let headerText5 = document.createTextNode("This is an h5")
    let headerText6 = document.createTextNode("This is an h6")
    let headerArray = [header1, header2, header3, header4, header5, header6];
    let headerTextArray = [headerText1, headerText2, headerText3, headerText4, headerText5, headerText6];
    let colorArray = ["black", "mediumspringgreen", "aquamarine", "powderblue", "bisque", "goldenrod", "coral"];
    let count = 1;
    function colorChange() {
        this.style.color = colorArray[Math.floor(Math.random() * 10)];
    }

    for (let i = 0; i < headerArray.length; i++) {

        document.body.appendChild(headerArray[i]);
        headerArray[i].appendChild(headerTextArray[i]);
        headerArray[i].className = "h" + (Number([i]) + 1);
        headerArray[i].addEventListener('dblclick', colorChange)
    };

    let btnList = document.getElementsByClassName("listbtn");
    let btn = btnList[0];
    btn.addEventListener('click', function() {

        let listItem = document.createElement("li");
        let listItemText = document.createTextNode("This is list item " + count);
        listItem.appendChild(listItemText);
        document.body.appendChild(listItem);
        count++;
        listItem.addEventListener('click', colorChange);
        listItem.addEventListener('dblclick', function () {
            listItem.remove();
        });
    });


});