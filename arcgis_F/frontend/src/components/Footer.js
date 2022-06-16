/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
const Footer = () => {
    const [mode, setMode] = useState("auto");
    return (
        <div className="  bg-gris_bg">
            <footer id="footer" className="relative dark:bg-gray-900 pt-24">
                <div className="py-12 flex flex-col justify-center items-center">
                    
    
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">2022 Twitter COVID 19 Dashboard. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
