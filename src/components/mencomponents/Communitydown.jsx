import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../../style/women/community.css";
import { branditem } from "../../data/ima";
const Card = ({ ele }) => (
  <div className="card">
    <img src={ele.src} alt="img" height="300px" width="100%" />
  </div>
);

export const Communitydown = () => {
  return (
    <div className="container">
      <ReactCaroussel slidesToShow={4} slidesToScroll={1} infinite={true}>
        {branditem.map((ele, index) => (
          <Card key={index} ele={ele} />
        ))}
      </ReactCaroussel>
    </div>
  );
};
