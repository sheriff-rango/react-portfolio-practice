import React, {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Loader from '../components/Loader';
import ServiceSlider from '../components/ServiceSlider';
import ServiceSliderMobile from '../components/ServiceSliderMobile';
import { BrowserView, MobileView } from 'react-device-detect';

function Service() {

    const [loading, setLoading] = useState(true);

    return (
        <AnimatePresence>
            {
                loading ? ( 
                    <motion.div key="pre-loader"><Loader setLoading={setLoading} />
                    </motion.div> 
                ) : (
                    <div className="wrapper" >
                       
                        <main className="page-main">
                            <h6>some things i've done over the years</h6>
                            <BrowserView> 
                                <ServiceSlider />
                            </BrowserView>
                            <MobileView>
                                <ServiceSliderMobile />
                            </MobileView>
                        </main>
                        
                    </div> 
                )
            }
        </AnimatePresence>                
    )
}

export default Service