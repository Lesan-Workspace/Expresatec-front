"use client"
import { Ayuda } from "@/layouts/Ayuda"
import { Navigation } from "@/components/Navigation"
import { WithAuth } from "@/components/withAuth"
 function  AyudaPage() {
    return (

        <div>
            <header>
                <Navigation />
            </header>
            <div>
                <Ayuda />
            </div>

        </div>


    )

}
export default WithAuth(AyudaPage)

