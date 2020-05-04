paintbrush = '';
//  Declaring paintbrush as an empty string global variable.

// declaring constant variables for form with id sizePicker
// declaring dimensiones which is the paragraph for instrictions. 
// declaring tablebody as the variable to hold the rows and columns. 

//  GLOBAL VARIABLES
const form = document.getElementById('sizePicker');
const dimensiones = document.getElementById('dimensiones');
var tablebody = document.createElement('TBODY');
var counter = 0; // counter for click
height = 0;
width = 0;
height2 = 0;
width2 = 0;
colorpick = document.querySelector("#colorPicker");
paintbrush = 'black'; // setting default color of paintbrush to black. 


//FUNCTION DEFINITIONS.

function drawTable() {
    // alert("Default")
    // document.body.style.color= 'darkblue';     

    console.log(counter);
    form.addEventListener('submit', function(event) {

        //  COMMENTS OF IF ELSE RIGHT BELOW
        //  ARE JUST USED FOR TESTING WHEN VALUES OF HEIGHT AND WIDTH CHANGE. 

        // if(height2 === height && width2 === width){
        //     document.body.style.backgroundColor ='blue';
        //     alert("values are the same");
        // }else{
        //     alert("Values are not the same.");
        // }

        console.log(counter);
        //  adding event listener for the submit button, to create the table rows inputted from the width height.

        event.preventDefault(); //  preventing default behavior of table disappearing after created

        height = document.getElementById("inputHeight").value; //  capturing the height number entered in the form

        width = document.getElementById("inputWidth").value; //capturing width of form.

        console.log(height, height2, width, width2);
        //  Adding resettings to cell colors if dimensions of width and height are the same. 


        var table = document.querySelector('#pixelCanvas'); // capturing table from html with its id number. 

        var tablebody = document.createElement('TBODY'); // creating tablebody variable. 
        table.appendChild(tablebody); // adding the table boddy to the table which needs to be done as a child.
        for (var i = 0; i < height; i++) { // creating for loop to run through each item in each row. 

            var tr = document.createElement('TR'); //  establishing row variable.
            tablebody.appendChild(tr); // appending row to the body.

            for (var j = 0; j < width; j++) { // running loop for colums 

                var td = document.createElement('TD'); // creating for this loop each time a cell data.
                td.addEventListener('click', function(evt) { // event listener. for click on table data cell
                    console.log('table item was clicked'); // printing log in console to see if detected click. 

                });


                tr.appendChild(td);
                // appending the final result of the row, which contains each cell data to the body.


            }
        }


        document.body.appendChild(table); // adding the table that was finished to the  body of the website..
        height2 = height;
        width2 = width;
    });

}

function cellcolor() {

    form.addEventListener('submit', function(event) {
        //  event listener to create after clicking submit button the listener ability
        // for earch cell. 

        let thetable = document.getElementById('pixelCanvas').getElementsByTagName('tbody')[0];
        //  thetable variable to be able to get the table body of the pixelCanvas id table. 
        // in case we may add more than one. 

        for (let therow of thetable.rows) { // accessing via loop each individual row. 


            for (let thecell of therow.cells) { // looping through each cell in each row. 

                thecell.addEventListener('click', function(event) { // event listener for each cell.

                    thecell.style.backgroundColor = paintbrush;
                    // changing upon clicking the color that 
                    // color that will paint the cell.
                });

            }
            counter += 1;
        }

    })

};

function logReset(event) {
    //  function to reset the screen
    table = document.querySelector('#pixelCanvas'); // selecting the table, 

    table.parentElement.removeChild(table); // using the parent element access to remove its table child.
    // this would completely delete the table and leave it blank.

    var x = document.createElement("TABLE"); // Creating a new table right after deleting the previous one. 
    x.setAttribute("id", "pixelCanvas");
    // setting the id attribute to the newly created table. This pixelCanvas is the same. as the original.

    document.body.appendChild(x);
    // appending the newly created table to the body.
}

function pintame(colorchange) { // function used to capture when the color palette button changes
    paintbrush = colorpick.value; //  establishing the color picked from the palette
    console.log(paintbrush); // just using to print to the console the color, to confirm it is working. 
    return paintbrush;

}

function submitReset() {
    form.addEventListener('click', function(event) {
        // event.preventDefault()
        if (height2 === height && width2 === width) {
            //  function to reset the screen
            table = document.querySelector('#pixelCanvas'); // selecting the table, 

            table.parentElement.removeChild(table); // using the parent element access to remove its table child.
            // this would completely delete the table and leave it blank.

            var x = document.createElement("TABLE"); // Creating a new table right after deleting the previous one. 
            x.setAttribute("id", "pixelCanvas");
            // setting the id attribute to the newly created table. This pixelCanvas is the same. as the original.

            document.body.appendChild(x);
            // appending the newly created table to the body.
        }
    });

}
if (counter === 0) {
    alert("Welcome to my Pixel Art maker Program!!!\n\n" +
        "My name is Jermaine Robinson,\n    " +
        "\nI am from Panama City, Panama in Central America. \n" +
        "Please read the instructions below to familiarize with the program\n" +
        "You can reach me at jael29@gmail.com for any job offers.\n\n" +
        "Thank you once again from playing my app");
    drawTable() // calling the draw table function.
    cellcolor() // calling to color cell.
    submitReset() // resetting if submit is pressed, and height and width values, have not changed.




}
// if (height2 === height && width2 === width){
//     logReset();
// }

form.addEventListener('reset', logReset); // calling the form reset button function.

// establishing the colorpick variable to the #colorPicker palette
colorpick.addEventListener('change', pintame);
// event listener that will be of the type change. and calling the function pintame