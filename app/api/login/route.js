import { NextResponse } from "next/server"
import db from "@/db.json"

export async function GET(req) {
  try{

  const { searchParams } = new URL(req.url)
  const email = searchParams.get("email")
  const password = searchParams.get("password")

  if (!email || !password) {
    return NextResponse.json(
      { message: "Missing credentials" },
      { status: 400 }
    )
  }

  const user = db.users.find((u) => u.email === email && u.password === password)

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    )
  }

  //! Response oluştur
  const res = NextResponse.json(user, { status: 200 })

  //! Cookie set et
  res.cookies.set("session", user.id, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60, //! 1 saat
  })

  return res
  }catch(err){
    return NextResponse.json({message: "Internal Server Error"}, {status: 500})
  }
}
