import React from 'react';

const Accordion = () => {
    return (
        <div>
            <div className="accordion w-75 m-auto my-5" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How does React work?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      One of the biggest advantages of using React is that you can infuse HTML code with JavaScript. Users can create a representation of a DOM node by declaring the Element function in React.
      JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript. In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.
      A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page. Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What are the differences between Props and State?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      In props, the Data is passed from one component to another. In state, the Data is passed within the component only.Props are Immutable (cannot be modified).	State is Mutable ( can be modified).
      Props can be used with state and functional components.	State can be used only with the state components/className component (Before 16.0).
      Props are read-only.	State is both read and write.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        For what reasons are useEffect used for other than data load?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Running on state change: validating input field.<br></br>
      Running on state change: live filtering.<br></br>
      Running on state change: trigger animation on new array value.<br></br>
      Running on props change: update paragraph list on fetched API data update.<br></br>
      Running on props change: updating fetched API data to get BTC updated price.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Accordion;