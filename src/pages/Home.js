import React, {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Loader from '../components/Loader';


function Home() {

    const [loading, setLoading] = useState(true); 

    return (
        <AnimatePresence>
            {
                loading ? ( 
                    <motion.div key="pre-loader">
                        
                        <Loader setLoading={setLoading} />
                        
                        
                    </motion.div> 
                ) : (
                    <div className="wrapper">
                        
                        <main className="page-main">
                            <h2>I'm Nakiska, a 
                                <br/> creative director &amp; 
                                <br/> interaction designer 
                                <br /> based in Brooklyn.
                            </h2>
                        </main>
                        
                    </div> 
                )
            }
        </AnimatePresence>                
    )
}

export default Home