import { NextResponse } from "next/server"

export async function DELETE() {
  const res = NextResponse.json({ message: "Logged out" }, { status: 200 })

  //! Cookie’yi temizle
  res.cookies.set("session", "", {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 0, //! hemen sil
  })

  return res
}