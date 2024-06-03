import { Fragment } from "react";
import Footer from "../../layout/footer/footer";
import NavigationBar from "../../layout/header/NavigationBar";
import MainPage from "../../components/main page/MainPage";
import LanguageSelector from "../../components/languageSelector/lang";



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