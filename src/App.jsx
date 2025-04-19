import "./styles/styles.css";
import soft from "../src/assets/img/soft.jpg";

function App() {
  return (
    <div
      className="bg-[#F1E5DA] min-h-svh font-averia"
      style={{
        backgroundImage: `url(${soft})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[#392F24] text-[2rem]">Welcome to React</h1>

      <p className="text-[#392F24]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa,
        fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis
        ornare diam commodo in vel dolor..
      </p>
    </div>
  );
}

export default App;
