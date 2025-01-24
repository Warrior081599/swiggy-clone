import { LINKEDIN_URL } from "../utils/constants";

const FooterComponent = () => {
  return (
    <div className="footer-component">
      <a href={LINKEDIN_URL}>linkedin</a>
      <h3>Banglore</h3>
      <h3>Phone: 1234567891</h3>
    </div>
  );
};

export default FooterComponent;
