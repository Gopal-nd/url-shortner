'use server'
import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function  submitTheLink(original:string){
console.log(original)
const link = await prisma.link.create({
    data:{
        original:original,
    }
})

const shortlink = link.id
return shortlink
}