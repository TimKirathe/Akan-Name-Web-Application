function Input() {
  let dob = document.getElementById("dobInput");
  let dobSliced1 = parseInt(dob.value.slice(0,2));
  let dobSliced2 = parseInt(dob.value.slice(2,4));
  let dobSliced3 = parseInt(dob.value.slice(5,7));
  let dobSliced4 = parseInt(dob.value.slice(8,10));
  var day = (((dobSliced1/4)-2*dobSliced1-1)+((5*dobSliced2/4))+((26*(dobSliced3+1)/10))+dobSliced4)%7;
  var dayOfBirth = parseInt(day.toFixed());
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var genderInput = document.getElementById("genderInput");
  let gender = genderInput.value.charAt(0).toUpperCase() + genderInput.value.slice(1);
  var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (gender==="Male" && dayOfBirth===0) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[0] + " and your Akan Name is " + maleAkanNames[0] + "!"
}
  else if (gender==="Male" && dayOfBirth===1) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[1] + " and your Akan Name is " + maleAkanNames[1] + "!"
}
  else if (gender==="Male" && dayOfBirth===2) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[2] + " and your Akan Name is " + maleAkanNames[2] + "!"
}
  else if (gender==="Male" && dayOfBirth===3) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[3] + " and your Akan Name is " + maleAkanNames[3] + "!"
  }
  else if (gender==="Male" && dayOfBirth===4) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[4] + " and your Akan Name is " + maleAkanNames[4] + "!"
}
  else if (gender==="Male" && dayOfBirth===5) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[5] + " and your Akan Name is " + maleAkanNames[5] + "!"
}
  else if (gender==="Male" && dayOfBirth===6) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[6] + " and your Akan Name is " + maleAkanNames[6] + "!"
}
  else if (gender==="Female" && dayOfBirth===0) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[0] + " and your Akan Name is " + femaleAkanNames[0] + "!"
}
  else if (gender==="Female" && dayOfBirth===1) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[1] + " and your Akan Name is " + femaleAkanNames[1] + "!"
}
  else if (gender==="Female" && dayOfBirth===2) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[2] + " and your Akan Name is " + femaleAkanNames[2] + "!"
}
  else if (gender==="Female" && dayOfBirth===3) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[3] + " and your Akan Name is " + femaleAkanNames[3] + "!"
}
  else if (gender==="Female" && dayOfBirth===4) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[4] + " and your Akan Name is " + femaleAkanNames[4] + "!"
}
  else if (gender==="Female" && dayOfBirth===5) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[5] + " and your Akan Name is " + femaleAkanNames[5] + "!"
}
  else if (gender==="Female" && dayOfBirth===6) {
    document.getElementById("akanNameOutput").innerHTML ="You were born on a " + daysOfWeek[6] + " and your Akan Name is " + femaleAkanNames[6] + "!"
}
  else {
    alert("Wrong input, please enter valid information.")
  }
}
