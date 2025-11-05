import { Link } from "react-router-dom";

export default function Logo(){
    return (
        <div className="flex items-center gap-3">
            <img src="../assets/logo.svg"></img>
            <li>
            <Link to="/" className="text-2xl font-bold text-[#007C4E] hover:text-green-500">TOY’S HOUSE</Link>
            </li>
        </div>
    );
}