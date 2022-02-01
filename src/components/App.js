import "../styles.css";
import Gentleman from "./Gentleman/Gentleman";
import Button from "./Button/Button";
import Info from "./Info/Info";

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
  {
    id: 4,
    name: "Dr Mario",
    status: "Alive and kicking",
    profession: "Babysitter",
    twitter: "@supaMario84",
    picture: "mario_small.jpg",
    alternativeText: "Ahítaltío pointing at you",
    selected: true,
  },
];
export const getInitial = (gent) => {
  const { name } = gent;
  const nameParts = name.split(" ");
  if (nameParts[0].length < 3) {
    return nameParts[1].charAt(0).toUpperCase();
  }
  return nameParts[0].charAt(0).toUpperCase();
};

const selectedGentlemen = gentlemenList.filter(
  (gentleman) => gentleman.selected
).length;
console.log(selectedGentlemen);

function App() {
  return (
    <div>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info actives={selectedGentlemen} />
        <Button classB="button button--select" text={"Select All"} />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemenList.map((gentlemanData) => {
            return <Gentleman eachPerson={gentlemanData} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
