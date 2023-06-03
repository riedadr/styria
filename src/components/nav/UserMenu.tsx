"use client"

import { useSession } from "next-auth/react"

export default function UserMenu() {
    const { data: session, status } = useSession();

    console.log(session, status)

    if (status === 'unauthenticated') {
        return <>log in</>
    } else {
        return <>logged in</>
    }
}