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
        },
        {
          subject: "Events in React",
          resources: [
            {title: "Handling Events - React", url: "https://facebook.github.io/react/docs/handling-events.html" },
            {title: "React Stateless Functional Components", url: "https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.jblm2w9dp"},
            {title: "YouTube - ReactJS Basics - #7 Events & ReactJS", url: "https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8"},
            {title: "Understanding JavaScript’s Function.prototype.bind", url: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/"},
            {title: "REACT JS TUTORIAL #5 - Javascript Events & Data Changes in React", url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be"}
          ]
        }
      ]
    };
  }

  addResourceToSections = (childSubject, childResource) => {
    let allSections = this.state.sections;
    let thisSection = allSections.filter((section) => section.subject === childSubject)[0];
    
    thisSection.resources.push(childResource);

    this.setState({
      sections: allSections
    });

  }
  //event handlers
  render() {
    return (
      <div className="container">
        Parent Component
        {this.state.sections.map(section => {
          return (<Subject key={section.subject} items={section} addResource={this.addResourceToSections.bind(this)}/>);
        })}
      </div>
    );
  }
}

export default App;
