import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// Get user by ID
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const user = await prisma.user.findUnique({
    where: { id },
  })

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  return NextResponse.json(user)
}

// Update user
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const data = await req.json()
  const { name, email } = data

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
  }

  const user = await prisma.user.update({
    where: { id },
    data: { name, email },
  })

  return NextResponse.json(user)
}

// Delete user
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  await prisma.user.delete({
    where: { id },
  })

  return NextResponse.json({ message: "User deleted" })
}
