import Question from './components/Question.js'; //Import Question function
import HUD from './components/HUD.js'; //Import HUD function


const renderDOM = (html) => document.getElementById('view').innerHTML = html; //Set HTML in view

export const PlayScene = (props) => {   //Function for HTML view
    const {timer, score,trivia} = props;             //Destructure properties
    renderDOM(                          //render the Scene's HTML to DOM
    `${HUD(timer, score)}
    ${Question(trivia)}`
    )
}