import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(req: Request) {
  const data = await req.json()
  const { name, email } = data

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
  }

  const user = await prisma.user.create({
    data: { name, email },
  })

  return NextResponse.json(user, { status: 201 })
}