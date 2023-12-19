import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// randomic word from reactDescription array
const description = reactDescription[genRandomInt(reactDescription.length - 1)];

// creation new component
function Header() {
  return (
    // the () of return if more of 1 line markup
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// CaseSensitive
function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={`${props.title} image`} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

// componente principale
function App() {
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
              title="Components"
              description="The core UI building block"
              img={componentsImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block"
              img={componentsImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block"
              img={componentsImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block"
              img={componentsImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
