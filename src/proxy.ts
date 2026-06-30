import core from "@/config/core";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const publicPaths = ['/', '/login'];
    const isPublicPath = publicPaths.some((p) => p.startsWith(path));

    if (isPublicPath) {
        return NextResponse.next();
    }

    const isAuthenticated = await core.session.isAuthenticated();

    if (!isAuthenticated) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('callbackUrl', path);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};