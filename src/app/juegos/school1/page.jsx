"use client"
import { Navigation } from "@/components/Navigation"
import { WithAuth } from "@/components/withAuth"
import { SchoolView } from "@/layouts/SchoolView"
function SchoolActivity() {
    return (
        <>
            <Navigation />
            <center>
                <SchoolView />
            </center>


        </>
    )
}
export default WithAuth(SchoolActivity)
