import  React from "react" ; 
import ReactDOM from "react-dom" ;
import './style.css';
import board from "./images/board1.jpg"
import pi from "./images/pi.png"
import e from "./images/e.png"
import phi from "./images/phi.png"

const title = "" ; 

const numbers = {
  pi: {
    image: pi,
    facts: ['The Greek letter "π", is the first letter of the Greek word "perimetros", meaning "circumference"',
     'The conjecture that π is normal (meaning that no digit occurs more frequently than any other) has not been proven or disproven', 
     'A Babylon clay tablet dated 1900–1600 BC has a geometrical statement that treats π as 25/8 = 3.125 (earliest written approximation)']
  },
  e: {
    image: e,
    facts: ["This constant is a relatively new discovery, in the early seventeenth century unnamed usurers observed it while studying compound interest", 
    'The area up to any x-value of the function y= e^x is also equal to e^x', 
    "e is use in calculus while π is used in baby geometry "
     ]
  },
  phi: {
    image: phi,
    facts: ['A golden triangle is an isosceles triangle in which the ratio between the duplicated side and the base is the golden ratio (phi): a/b = phi' ,
    "Is one of the irrational numbers that are also algebraic numbers "
  ]
  }
};

const background = (
  <img 
 className="background" 
 alt="board" 
 src={board} 
 />
 ) 

const showBackground = false; 

const images= []; 

for (const number in numbers ) {
   images.push(
     <img 
     key={number} 
     className='number'
      alt= {number} 
      src= {numbers[number].image} 
      ariaLabel={number} 
      role='button'
      onClick = {displayFact}
      />
      )} ;

const numberFacts  = ( 
  <div > 
<h1> {title || "Click a number for a fun fact!"} </h1> 
{showBackground && background } ;
 <p id="fact" > </p>
 <div className="numbers">{images}</div> 
 </div> 

 ) ;

function displayFact  (e)   {
const number =  numbers[e.target.alt] ; 
const randomNumber = Math.floor (Math.random() * number.facts.length) ; 
const randomFact = number.facts[randomNumber] ; 
document.getElementById('fact').innerHTML = randomFact; 
}



ReactDOM.render(numberFacts, document.getElementById("root"))

