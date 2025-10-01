import { NextResponse } from "next/server";

export function middleware(req) {
  const session = req.cookies.get("session")?.value;
  const { pathname } = req.nextUrl;

  const protectedRoutes = ["/profile"];
  const authRoutes = ["/login", "/signup"]; //! giriş yapanların görememesi gereken pathler

  //! Korunan sayfalara erişim kontrolü
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  //! Auth sayfalarına erişim kontrolü
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (session) {
      return NextResponse.redirect(new URL("/", req.url)); //! anasayfaya yönlendirdim
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/login",
    "/signup"
  ],
};
