import { Link } from "react-router-dom"
export function Navigation(){
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <h2>GitHub Search</h2>
            <span>
                <Link className="mr-2" to="/">Home</Link>
                <Link to="/gitHub-search/">Favorite</Link>
            </span>
        </nav>
    )
}