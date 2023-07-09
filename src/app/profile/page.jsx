"use client"
import { Navigation } from "@/components/Navigation"
import { Profile } from "@/layouts/Profile"
import { WithAuth } from "@/components/withAuth"
function ProfilePage(){
    return(
        <div>
            <header>
                <Navigation/>
            </header>
            <Profile/>


            
        </div>
    )
}
export default WithAuth(ProfilePage)

