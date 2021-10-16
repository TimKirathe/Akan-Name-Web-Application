function dateInput() {
  let dob = document.getElementById("dobInput");
  let dobSliced1 = parseInt(dob.value.slice(0,2));
  let dobSliced2 = parseInt(dob.value.slice(2,4));
  let dobSliced3 = parseInt(dob.value.slice(5,7));
  let dobSliced4 = parseInt(dob.value.slice(8,10));
  (((dobSliced1/4)-2*dobSliced1-1)+((5*dobSliced2/4))+((26*(dobSliced3+1)/10))+DD)%7
}
