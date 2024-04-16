import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TopBar from "./TopBar";
import MainContents from "./MainContents";

function Main() {
    return (
        <div>
            <Header />
            <TopBar />
            <MainContents />
            <Footer />
        </div>
    )
}

export default Main