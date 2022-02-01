import Button from "../Button/Button";
import { getInitial } from "../App";

const Gentleman = ({ eachPerson }) => {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`./img/${eachPerson.picture}`}
          alt={eachPerson.alternativeText}
        />
        <span className="gentleman__initial">{getInitial(eachPerson)}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{eachPerson.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {eachPerson.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>{" "}
            {eachPerson.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{" "}
            {eachPerson.twitter}
          </li>
        </ul>
      </div>
      <Button classB={"icon gentleman__icon fas fa-check"}></Button>
      <Button
        classB={"icon gentleman__icon gentleman__icon--delete fas fa-times"}
      ></Button>
    </li>
  );
};

export default Gentleman;
