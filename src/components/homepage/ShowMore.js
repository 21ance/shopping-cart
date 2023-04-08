import { Link } from "react-router-dom";

const ShowMore = (props) => {
  const { link } = props;

  return (
    <Link to={`/${link}`}>
      <span className="button-show-more">SHOW MORE</span>
    </Link>
  );
};

export default ShowMore;
