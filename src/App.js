import Animals from "./Components/Animals"
import Birds from "./Components/Birds"
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"


function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Animals></Animals>
            <Birds></Birds>
        </div>
    )
}
export default App