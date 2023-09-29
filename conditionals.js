//make a keyless car !
//this car will only let you drive if you are over 18.make it do the following:


//using prompt()  and alert(),ask a user for their age.
//if they say they are below 18, respond with:
//"sorry , you are too young for this ride.powering off"

//if they say they are 18 respond with:
//"congratulations on your first ride of the year. enjoy your ride!"

//if they say they are over 18 respond with:
//powering on.enjoy the ride.












var age = prompt("what is your age?");


if (Number(age) < 18 ) {
    alert("sorry , you are too young to drive this car . Powering off");
} else if (Number(age) > 18){
    alert("Powering on. enjoy the ride!");
} else if (Number(age) === 18) {
    alert("congratulations on your first year of driving . enjoy the ride!");
}