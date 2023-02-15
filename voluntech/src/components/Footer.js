const Footer = () => {
    return ( 
        <>
        <div class="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>VolunTech</h4>
                        <ul>London, United Kingdom</ul>
                    </div>
                    <div className="col">
                        <ul>Instagram: voluntech</ul>
                        <ul>Twitter: @voluntech</ul>
                    </div>
                </div>
                <hr />
             <div className="row">
                   &copy;{new Date().getFullYear()} VolunTech | All rights reserved | Terms of Service | Privacy
            </div>   
        </div>
    </div>  

        </>
     );
}
 
export default Footer;