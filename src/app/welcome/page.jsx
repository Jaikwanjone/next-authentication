import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import NavBar from "../components/Navbar";

const WelcomePage = () => {
  return (
    <Container>
      <NavBar />
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl"> Profile</h1>
              <p>Welcome, Jwan Set</p>
            </div>
            <div>
              <Link
                href="/create"
                className="bg-green-500 text-white py-2 px-3 rounded-md text-lg my-2 "
              >
                Create Post
              </Link>
            </div>
            {/* Ueer Posts Data */}
          </div>
          <div>
            <div className="shadow-xl my-10 p-10 rounded-xl">
              <h4 className="text-2xl"> Post Title</h4>
              <Image
                src="https://images.unsplash.com/photo-1715605408151-06ac7e287cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
                width={200}
                height={0}
                className="my-3 rounded-md"
              />
              <p>
                Lorm ipsum dolor,sit amet consectetur adipisicing elit. Modi
                similique dicta suscipit remerum tempore distinction nosturm?
                Asperiores eveniet doloremque eos modi quae nemo tenetur option.{" "}
              </p>
              <div className="mt-5">
                <Link
                  href="/edit"
                  className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2 "
                >
                  Edit
                </Link>
                <Link
                  href="/delete"
                  className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2 "
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;
