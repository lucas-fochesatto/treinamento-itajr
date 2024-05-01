import Header from "../components/Header"
import { Outlet } from "react-router-dom" 
import '../styles/Layout.css'

export default function Layout({itemsAdded}) {
    return(
        <div className="container">
            <Header itemsAdded={itemsAdded} />
            <main>
                <Outlet />
            </main>
        </div>
    )
}