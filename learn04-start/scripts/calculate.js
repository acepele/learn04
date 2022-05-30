function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";

    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";


}

function estimate() {
    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * .65);
    document.getElementById("rm1cost").value = cost;

    var totalCost = cost;
    document.getElementById("estimate").innerHTML = (name + ", the estimate is: " + totalCost)

}

const el = document.getElementById('rooms');

const room2 = document.getElementById('room2');

el.addEventListener('change', function handleChange(event) {
    if (event.target.value === 'show') {
        room2.style.display = 'block';
    } else {
        room2.style.display = 'none';
    }
});


const el1 = document.getElementById('rooms');

const room3 = document.getElementById('room3');

el1.addEventListener('change', function handleChange(event) {
    if (event.target.value === 'show') {
        room3.style.display = 'block';
    } else {
        room3.style.display = 'none';
    }
});