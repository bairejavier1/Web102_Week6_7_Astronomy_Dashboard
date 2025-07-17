const Card = ({ title, value, icon }) => (
  <div className="card">
    <span className="card-icon">{icon}</span>
    <div>
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
    </div>
  </div>
);
export default Card;
