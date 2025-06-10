import { NextRequest, NextResponse } from "next/server";
import { httpRequestCounter } from "./app/api/metrics/route";

export function middleware(request: NextRequest) {
    const route = request.nextUrl.pathname
    const method = request.method
    httpRequestCounter.inc({ method, route, status: String(200) });
    return NextResponse.next()
}

export const config = {
  matcher: '/api/*',
}