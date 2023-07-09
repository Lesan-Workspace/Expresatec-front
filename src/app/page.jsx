"use client"
import { Main } from "@/layouts/Main"
import { Navigation } from "@/components/Navigation"
import { WithAuth } from "@/components/withAuth"
 function Home() {


  return (
    <div>
      <header>
        <Navigation />

      </header>
      <div>
        <Main />
      </div>


    </div>

  )

}

export default WithAuth(Home)


