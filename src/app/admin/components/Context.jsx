import { FaRegNewspaper, FaUsers } from "react-icons/fa6";
const Context = () => {
  return (
    <div className="px-10 rounded-lg">
      <div className="flex">
        <div className="shadow-lg w-[300px] m-3 p-10 rounded-lg">
          <h3 className=" flex items-center ">
            <FaUsers className=" mr-2" />
            Total Users
          </h3>
          <p className="text-5xl mt-1-">29</p>
        </div>
        <div className="shadow-lg w-[300px] m-3 p-10 rounded-lg">
          <h3 className=" flex items-center ">
            <FaRegNewspaper className=" mr-2" />
            Total Posts
          </h3>
          <p className="text-5xl mt-1-">102</p>
        </div>
      </div>
    </div>
  );
};

export default Context;
