import './Landing.css'
import Main from "../../widgets/Main/Main";
import Advantages from "../../widgets/Advantages/Advantages";
import Footer from "../../widgets/Footer/Footer";


function Landing() {
    return (
        <div className="landing_page">
            <Main />
            <Advantages />
            <Footer />
        </div>
    )
}



export default Landing;