import Link from "next/link";
import Container from "../components/Container";
import NavBar from "../components/Navbar";

const CreatePage = () => {
  return (
    <Container>
      <NavBar />
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
          <Link
            href="/welcome"
            className="bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2"
          >
            Go Back
          </Link>
          <hr className="my-3" />
          <div className="flex flex-col items-center gap-4 ">
            <h3 className="text-xl font-bold text-gray-700">Create Post</h3>
            <form action="">
              <input
                type="text"
                className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-xl my-2 "
                placeholder="Post title"
              />
              <input
                type="text"
                className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-xl my-2 "
                placeholder="Post Img Url"
              />
              <textarea
                cols="30"
                rows="10"
                className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-xl my-2 "
                placeholder="Enter your Post content"
              ></textarea>
              <button
                type="submit"
                name="create"
                className=" bg-green-500 text-white border py-2 px-3 rounded-md text-lg my-2 w-full "
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreatePage;
