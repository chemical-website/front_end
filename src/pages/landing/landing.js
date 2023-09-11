import { Fragment } from "react";
import Footer from "../../layout/footer/footer";
import NavigationBar from "../../layout/footer/NavigationBar";
import MainPage from "../../components/main page/MainPage";



const LandingPage = () => {
    return ( 
        <Fragment>
            <NavigationBar/>
            <MainPage />
            <Footer />
        </Fragment>
     );
}
 
export default LandingPage;