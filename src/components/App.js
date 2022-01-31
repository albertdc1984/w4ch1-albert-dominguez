import "./styles.css";
import Gentleman from "./Gentleman/Gentleman";
import Button from "./Button/Button";
import Info from "./Info/Info";

function App() {
  const gentlemenList = [
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      id: 2,
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ];

  return (
    <div>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info />
        <Button />
      </section>
      <main className="main">
        <ul className="gentlemen">
          <Gentleman gentleman={gentlemenList[0]} />
          <Gentleman gentleman={gentlemenList[1]} />
          <Gentleman gentleman={gentlemenList[2]} />
        </ul>
      </main>
    </div>
  );
}

export default App;