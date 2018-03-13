var mercury = {
  name: 'mercury',
  text: `Mercury is the smallest planet in the Solar System. It's the closest planet to the Sun and due to its proximity it is not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis and up until 1965 it was thought that the same side of Mercury constantly faced the Sun. Thirteen times a century Mercury can be observed from the Earth passing across the face of the Sun in an event called a transit.`,
};

var venus = {
  name: 'venus',
  text: `Venus is the second planet from the Sun and is the second brightest object in the night sky after the Moon. Named after the Roman goddess of love and beauty, Venus is the second largest terrestrial planet and is sometimes referred to as the Earth’s sister planet due the their similar size and mass. The surface of the planet is obscured by an opaque layer of clouds made up of sulphuric acid.`,
};

var earth = {
  name: 'earth',
  text: `Earth is the third planet from the Sun and is the largest of the terrestrial planets. The Earth is the only planet in our solar system not to be named after a Greek or Roman deity. The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life.`,
};

var mars = {
  name: 'mars',
  text: `Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance. Mars is a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.`,
};
var jupiter = {
  name: 'jupiter',
  text: `The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a “gas giant”.`,
};
var saturn = {
  name: 'saturn',
  text: `Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei. Like Jupiter, Saturn is a gas giant and is composed of similar gasses including hydrogen, helium and methane.`,
};
var uranus = {
  name: 'uranus',
  text: `Uranus is the seventh planet from the Sun. While being visible to the naked eye, it was not recognised as a planet due to its dimness and slow orbit. Uranus became the first planet discovered with the use of a telescope. Uranus is tipped over on its side with an axial tilt of 98 degrees. It is often described as “rolling around the Sun on its side”.`,
};
var neptune = {
  name: 'neptune',
  text: `Neptune is the eighth planet from the Sun making it the most distant in the solar system. This gas giant planet may have formed much closer to the Sun in early solar system history before migrating to its present position.`,
};


//array of objects
var planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

//write the click function first
function showInfo(){

//remove whats in div in first place.
//this is here to clear out the div every time after the first time. This way you don't have multiple planets after each click.
document.getElementById('planet-names').innerHTML= '' ;

   //grab the input
   var userInput = document.getElementById('planet').value;
   console.log(userInput);

 //Match input to one of our objects. Loop through and return a match
 for(var i=0; i<planets.length; i++) {
   if(userInput.toLowerCase() === planets[i].name) { //do we have a match?
     //call second function nested inside this one
     // resizePlanet();

   var header = document.createElement('h5');
   header.setAttribute('style', 'padding: 5px; text-transform:uppercase; text-align:center');
   var paragraph = document.createElement('p');
   paragraph.setAttribute('style', 'padding: 10px; border: 1px solid grey; border-radius: 5px; text-align:left');
   var div = document.createElement('div');

   //created elements with the planet info
   header.textContent = planets[i].name;
   paragraph.textContent = planets[i].text;

   document.getElementById('planets').value;


   //add head and p to our div
   div.appendChild(header);
   div.appendChild(paragraph);

   //display to user
   var planetName = document.getElementById('planet-names');
   planetName.appendChild(div);}
    // } else{
    //   document.getElementById('planet-names').innerHTML = "Please enter the name of a planet.";}
  }
}

//highlight planet user chooses with a 2nd function?
// function resizePlanet(){
//   if(userInput.toLowerCase() === planets[i].name) {
//     planets.setAttribute('style', "box-shadow:0px 12px 22px 1px #333");
//   }
// }
