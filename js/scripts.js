function dateInput() {
  let dob = document.getElementById("dobInput");
  let dobSliced1 = parseInt(dob.value.slice(0,2));
  let dobSliced2 = parseInt(dob.value.slice(2,4));
  let dobSliced3 = parseInt(dob.value.slice(5,7));
  let dobSliced4 = parseInt(dob.value.slice(8,10));
  var day = (((dobSliced1/4)-2*dobSliced1-1)+((5*dobSliced2/4))+((26*(dobSliced3+1)/10))+dobSliced4)%7
  var dayOfBirth = parseInt(day.toFixed());
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (dayOfBirth===0) {
  document.getElementById("dayOfBirthOutput").innerHTML = "You were born on a " + daysOfWeek[0] + "!"
}
  else if (dayOfBirth===1) {
  document.getElementById("dayOfBirthOutput").innerHTML = "You were born on a " + daysOfWeek[1] + "!"
}
  else if (dayOfBirth===2) {
  document.getElementById("dayOfBirthOutput").innerHTML = "You were born on a " + daysOfWeek[2] + "!"
}
  else if (dayOfBirth===3) {
  document.getElementById("dayOfBirthOutput").innerHTML = "You were born on a " + daysOfWeek[3] + "!"
}
  else if (dayOfBirth===4) {
  document.getElementById("dayOfBirthOutput").innerHTML = "You were born on a " + daysOfWeek[4] + "!"
}
  else if (dayOfBirth===5) {
  document.getElementById("dayOfBirthOutput").innerHTML = "You were born on a " + daysOfWeek[5] + "!"
}
  else if (dayOfBirth===6) {
  document.getElementById("dayOfBirthOutput").innerHTML = "You were born on a " + daysOfWeek[6] + "!"
  }
  else {
    alert("Wrong input, please enter a valid date of birth.")
  }
  function maleInput() {
    var akanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    if (dayOfBirth===3) {
      alert("Your Akan Name is " + akanNames[3] + "!")
    }
  }
}
