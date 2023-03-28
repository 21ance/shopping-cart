import ImageCover from "../images/cover.png";

const Cover = () => {
  return (
    <section className="section-cover">
      <img className="cover-photo" src={ImageCover} alt="" />
      <div className="cover-texts">
        <span className="subtext">New collection</span>
        <h1>NEW STREETWEAR OUTFITS</h1>
      </div>
      <button>SHOW MORE</button>
    </section>
  );
};

export default Cover;
