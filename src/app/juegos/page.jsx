"use client"
import { Juegos } from "@/layouts/Juegos"
import { Navigation } from "@/components/Navigation"
import { WithAuth } from "@/components/withAuth"
 function JuegosPage() {
    return (
        <div>
            <header>
                <Navigation />
            </header>

            <Juegos />


        </div>
    )
}
export default WithAuth(JuegosPage)

