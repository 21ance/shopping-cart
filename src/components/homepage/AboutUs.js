import AboutImage from "../../images/about-us.avif";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>ABOUT US</h2>
      <div className="about-us-content">
        <p className="p-border">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          nesciunt ullam fugiat cum ipsam repudiandae consequatur tempore unde.
          Iste ut, vitae obcaecati voluptatum dicta soluta? Accusamus quam
          eligendi ab perspiciatis. Accusamus asperiores pariatur, accusantium
          maiores nisi cupiditate eos eligendi, impedit voluptatibus porro ad
          exercitationem earum aperiam rerum voluptatum. Recusandae voluptatibus
          voluptate nemo dolorum consequuntur sint ex autem necessitatibus modi
          cupiditate. Totam libero illum assumenda voluptates at repudiandae
          quam, vero itaque eveniet quas hic neque vitae ad natus. Eius magnam
          earum corrupti ipsum libero, laboriosam vel at culpa quam nesciunt
          labore.
        </p>
        <img src={AboutImage} alt="about_us_cover" />
      </div>
    </section>
  );
};

export default AboutUs;
