var room = "gallery";
var suspect = "Mr. Van Cleve";

var weapon = "";
var solved = false;

if ( room === "dining room" ) {
    weapon="knife";
    if(suspect==="Mr. Parkes") {
    solved=true;
    }
} else if (room==="billiards room" ) {
    weapon = "pool stick";
    if(suspect==="Mrs. Sparr"){
    solved=true;
    }
}  else if (room === "gallery"  ) {
      weapon = "trophy";
      if(suspect === "Mr. Van Cleve"){
      solved=true;
      }
} else if(room === "ballroom") {
    weapon = "poison";
      if(suspect === "Mr. Kalehoff"){
    solved=true;
      }
}

if (solved) {
  console.log( suspect + " did it in the " +room+ " with the " + weapon+"!"    /* your message goes here*/);
}
