import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const hashedPassword = await bcryptjs.hash(password, 7);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while registering the user",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
// export const POST = async (req) => {
//   try {
//     const { name, email, password } = await req.json();
//     console.log("Name", name);
//     console.log("Email", email);
//     console.log("Password", password);
//     return NextResponse.status(201).send({ message: "User registered." });
//   } catch (error) {
//     return NextResponse.status(500).send({
//       message: "An error occurred while registering the user",
//       error: error.message,
//     });
//   }
// };
