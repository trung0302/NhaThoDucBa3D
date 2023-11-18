import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function DefaultLayout({ children }) {
    return (
        <div>
            <div>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
