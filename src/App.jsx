import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

// componente principale
function App() {
  function handleClick(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <div>
      {/* <Header></Header> */}
      {/* or like self closing tag*/}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              // props

              // title={CORE_CONCEPTS[0].title}
              // description={CORE_CONCEPTS[0].description}
              // image={CORE_CONCEPTS[0].image}
              // destructuring is the same
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          {/* menu tag never used */}
          <menu>
            {/* no self closing */}
            <TabButton onClick={() => handleClick("Components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("Props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("State")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
