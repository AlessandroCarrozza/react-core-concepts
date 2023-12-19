import reactImg from "./assets/react-core-concepts.png";

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

// componente principale
function App() {
  return (
    <div>
      {/* <Header></Header> */}
      {/* oppure come self closing tag*/}
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
