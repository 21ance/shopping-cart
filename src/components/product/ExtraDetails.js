import { MdOutlineLocalShipping, MdSecurity, MdPayment } from "react-icons/md";

import { BsCash } from "react-icons/bs";

const ExtraDetails = () => {
  return (
    <section className="extra-details">
      <Details
        icon={<MdOutlineLocalShipping />}
        title="Free Shipping"
        para1="Free standard shipping"
        para2="5 - 7 days delivery"
      />
      <Details
        icon={<MdSecurity />}
        title="Return Policy"
        para1="Members get free online returns"
      />
      <Details
        icon={<MdPayment />}
        title="Card"
        para1="Accepts debit and credit cards"
      />
      <Details
        icon={<BsCash />}
        title="COD"
        para1="Cash on delivery is available"
      />
    </section>
  );
};

const Details = (props) => {
  const { icon, title, para1 = "", para2 = "" } = props;
  return (
    <div className="details">
      <span className="icon"> {icon}</span>
      <h4 className="title">{title}</h4>
      {para1 !== "" && <p className="para1">{para1}</p>}
      {para2 !== "" && <p className="para2">{para2}</p>}
    </div>
  );
};

export default ExtraDetails;
