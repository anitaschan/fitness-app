import "./card.css";
import fitnessIcon from '../../assets/fitness.png'

export const Card = () => {
  return (
    <article className="card-container">
      <i className="card-icon">
        <img src={fitnessIcon} width={100} />
      </i>
      <div className="card-details">
        <p>Title</p>
        <p>Title</p>
        <p>Title</p>
      </div>
    </article>
  );
};
