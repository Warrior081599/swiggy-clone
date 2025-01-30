import { LINKEDIN_URL } from "../utils/constants";

const FooterComponent = () => {
  return (
    <div className="flex flex-row justify-between mx-4 mb-[30px]">
      <a
        className="m-3 flex justify-center font-bold  rounded-xl bg-gray-100 w-[100px] text-ali hover:bg-gray-600  hover:rounded-xl hover:text-white hover:p-2 "
        href={LINKEDIN_URL}
      >
        linkedin
      </a>
      <h3 className="m-3 flex justify-center font-bold  rounded-xl bg-gray-100 w-[100px] text-ali hover:bg-gray-600  hover:rounded-xl hover:text-white hover:p-2 ">
        Banglore
      </h3>
      <h3 className="m-3 flex justify-center font-bold  rounded-xl bg-gray-100 w-[200px] text-ali hover:bg-gray-600  hover:rounded-xl hover:text-white hover:p-2 mr-8 hover:w-[250px]">
        Phone: +91-7992271556
      </h3>
    </div>
  );
};

export default FooterComponent;
