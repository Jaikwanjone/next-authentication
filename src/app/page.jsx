import Image from "next/image";
import Vercel from "../../public/vercel.svg";
import Container from "./components/Container";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <NavBar />
          <div className="  flex-grow text-center p-10">
            <h3 className="text-5xl">NextJs Dashboard</h3>
            <p>Become Full-Stack Developer with next.js</p>
            <div className="flex justify-center my-10">
              <Image src={Vercel} alt="Vercel Logo" width={300} height={0} />
            </div>
          </div>
          <Footer />
        </Container>
      </main>
    </div>
  );
}
