const Contact = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-6 p-2">Contact Us</h1>
      <form className="text-center">
        <input
          className="border-black border-1 m-2 p-2 "
          type="text"
          placeholder="Name"
        ></input>
        <input
          className="border-black border-1 m-2 p-2 "
          type="text"
          placeholder="Message"
        ></input>
        <button
          className="border-black border-1 m-2 p-2 bg-gray-100 rounded-xl hover:cursor-pointer hover:bg-gray-700 hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
