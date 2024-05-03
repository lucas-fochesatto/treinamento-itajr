import Header from "../components/Header"
import { Outlet } from "react-router-dom" 
import '../styles/Layout.css'

export default function Layout() {
    return(
        <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}