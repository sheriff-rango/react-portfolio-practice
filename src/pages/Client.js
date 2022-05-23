import React, {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Loader from '../components/Loader';
import ClientSlider from '../components/ClientSlider';
import ClientSliderMobile from '../components/ClientSliderMobile';
import { BrowserView, MobileView } from 'react-device-detect';

function Client() {

    const [loading, setLoading] = useState(true);

    return (
        <AnimatePresence>
            {
                loading ? ( 
                    <motion.div key="pre-loader"><Loader setLoading={setLoading} />
                    </motion.div> 
                ) : (
                    <div className="wrapper">
                        <main className="page-main">
                            <h6>some brands i've made cool stuff with</h6>
                            <BrowserView>
                                <ClientSlider />
                            </BrowserView>
                            <MobileView>
                                <ClientSliderMobile />
                            </MobileView>
                        </main>
                    </div> 
                )
            }
        </AnimatePresence>                
    )
}

export default Client