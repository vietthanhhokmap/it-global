import Header from "./Header/Header";
import Footner from "./Footer/Footer";
import  "./DefaultLayout.scss";
    
function DefaultLayout({children ,num}) {

    
    return (  
        <div>
            <div className="head">
                <Header num = {num}/>
            </div>
            <div className="Content">
                <div className="Content-item">
                    {children}
                </div>
            </div>
            <Footner/>
        </div>
    );
}

export default DefaultLayout;
