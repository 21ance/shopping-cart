import ImageCover from "../../images/cover.png";
import ShowMore from "./ShowMore";

const Cover = () => {
  return (
    <section className="section-cover">
      <img className="cover-photo" src={ImageCover} alt="" />
      <div className="cover-texts">
        <span className="subtext">New collection</span>
        <h1>NEW STREETWEAR OUTFITS</h1>
      </div>
      <ShowMore link="casual" />
    </section>
  );
};

export default Cover;
