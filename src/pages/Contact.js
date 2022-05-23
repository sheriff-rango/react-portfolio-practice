import React, {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Loader from '../components/Loader';

function Contact() {

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
                            <h6>if you like what you see, say hi</h6>
                            <h2>
                                <span className="contact-lead non-active">
                                hi@nakiskashaikh.com
                                </span>
                            </h2>
                        </main>
                        
                    </div> 
                )
            }
        </AnimatePresence>                
    )
}

export default Contact