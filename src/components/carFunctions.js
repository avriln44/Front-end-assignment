var carList = [];
export function addNewCar() {
    // Get vehicle information from form
    var name = document.getElementById("car-name").value;
    var brand = document.getElementById("brand").value;
    var color = document.getElementById("color").value;
    var year = document.getElementById("year").value;

    // Create a new vehicle object from the information you just got
    var newCar = {name: name, brand: brand, color: color, year: year};

    // Add new vehicle object to the list
    carList.push(newCar);

    // Notify the user that a new vehicle has been added to the list
    alert("New car has been added to the list.");

    // Reset form to prepare new cars
    document.getElementById("car-name").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("color").value = "";
    document.getElementById("year").value = "";
  }

  // Function to display a list of vehicles
export function displayCarList() {
    // Check if the list is empty
    if (carList.length === 0) {
      alert("Car list is empty.");
    } else {
      // Show list of vehicles
      var carListString = "";
      for (var i = 0; i < carList.length; i++) {
        carListString += "Car name: " + carList[i].name + ", brand: " + carList[i].brand + ", Color: " + carList[i].color + ", Year of manufacture: " + carList[i].year + "\n";
      }
      alert(carListString);
    }
  }


  
