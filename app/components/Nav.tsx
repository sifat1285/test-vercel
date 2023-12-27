import Navbar from "./Navbar";
import { auth } from "../auth";

const Nav = async () => {
    const session = await auth();
    return ( 
        <div>
            <Navbar user={session?.user} />
        </div>
    );
}
 
export default Nav;