import Container from "@/app/components/Container";
import Image from "next/image";
import Link from "next/link";
import AdminNav from "../components/AdminNav";
import SideNav from "../components/SideNav";
import Footer from "../components/footer";

const AdminUserManagePage = () => {
  return (
    <Container>
      <AdminNav />
      <div className="flex-grow">
        <div className="container mx-auto">
          <div className="flex mt-10">
            <SideNav />
            <div className="p-10">
              <h3 className="text-3xl mb-3"> Manage Post</h3>
              <p>A List of posts retrieved from a MongoDB database</p>
              <div className="shadow-lg overflow-x-auto ">
                <table className="text-left rounded-md mt-3 table-fixed w-full">
                  <thead>
                    <tr className="bg-gray-400">
                      <th className=" p-5">Posts ID</th>
                      <th className=" p-5">Post Title</th>
                      <th className=" p-5">Post Image</th>
                      <th className=" p-5">Post Content</th>
                      <th className=" p-5">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-5">12233456</td>
                      <td className="p-5">This is post title.</td>
                      <td className="p-5">
                        <Image
                          className="my-3 rounded-md"
                          src="https://images.unsplash.com/photo-1715605408151-06ac7e287cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
                          width={80}
                          height={0}
                        />
                      </td>
                      <td className="p-5">this is post content</td>
                      <td className="p-5">
                        <Link
                          className="bg-gray-500 text-white border py-2 px-3 rounded text-lg my-2"
                          href="/admin/posts/edit"
                        >
                          Edit
                        </Link>
                        <Link
                          className="bg-red-500 text-white border py-2 px-3 rounded text-lg my-2"
                          href="/admin/posts/delete"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default AdminUserManagePage;
