import React, { Component } from 'react';
import Subject from "./components/Subject.js"


class App extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        { 
          subject: "Functional Programming Basics",
          resources: [
            {title: "Higher order functions by funfunfunction", url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84" },
            {title: "var, let and const by funfunfunction", url: "https://www.youtube.com/watch?v=sjyJBL5fkp8" },
            {title: "Arrow functions in JavaScript by funfunfunction", url: "https://www.youtube.com/watch?v=6sQDTgOqh-I" },
            {title: "Var, Let, or Const? (In-depth)", url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.xv9uppvae" },
            {title: "How it feels to learn JavaScript in 2016", url: "https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.olyvd43o1" }
          ]
        },
        {
          subject: "ES6 Fundamentals",
          resources: [
            {title: "Interactive ES5 to ES6 conversion guide", url: "http://stack.formidable.com/es6-interactive-guide/#/" },
            {title: "ES6 Cheat Sheet Compilation (part 1)", url: "https://www.youtube.com/watch?v=AfWYO8t7ed4" },
            {title: "ES6 Cheat Sheet Compilation (part 2)", url: "https://facebook.github.io/react/docs/thinking-in-react.html" }
          ]
        },
        {
          subject: "Fundamentals of React",
          resources: [
            {title: "Thinking in React", url: "https://facebook.github.io/react/docs/thinking-in-react.html" },
            {title: "Mindspace React Tutorial", url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
            {title: "LearnCode Academy React Tutorial", url: "https://youtu.be/fd2Cayhez58"}
          ]
        }
      ]
    };
  }
  //event handlers
  render() {
    return (
      <div>
        Parent Component
        <Subject subject={this.state.sections[0].subject} />
        <Subject subject={this.state.sections[1].subject} />
        <Subject subject={this.state.sections[2].subject} />
      </div>
    );
  }
}

export default App;
