const Footer = () => {
    return ( 
        <>
        <div clasName="flex flex-col h-screen justify-between">
        
            <footer className="w-full h-15 bg-black text-center text-white fixed bottom-0">
                &copy;{new Date().getFullYear()} VolunTech | CRUD First Girls
            </footer> 
        
        </div> 
        </>
     );
}
 
export default Footer;