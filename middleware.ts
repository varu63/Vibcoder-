import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { match } from "assert";
import { NextResponse } from "next/dist/server/web/spec-extension/response";
import { authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "./routes";
import { DEFAULT_ECDH_CURVE } from "tls";

const {auth} = NextAuth(authConfig)

export default auth((req)=>{
    // You can add custom logic here if needed
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    if(isApiAuthRoute){
        return null; // Allow NextAuth to handle API auth routes
    }
    if(isAuthRoute){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT , nextUrl))
        }
        return null;
    }
    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL("/auth/sign-in", nextUrl))
    }
    return null; // Allow the request to proceed for authenticated users or public routes
});


export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}