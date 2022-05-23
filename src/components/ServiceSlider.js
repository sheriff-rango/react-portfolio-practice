import React, {useState, useEffect} from 'react'
import serviceData from '../data/serviceData'

function ServiceSlider() {
    // eslint-disable-next-line
    const [serviceList, setserviceList] = useState(serviceData)
    const [index, setIndex] = useState(0)
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const lastIndex = serviceList.length - 1
        
        if (index < 0){
            setIndex(lastIndex)
        }
        if (index > lastIndex){
            setIndex(0) 
        }

    },[index, serviceList])

    useEffect(() => {
        
        let slider = setInterval( () => {
            if (hover===true){
                setIndex(index+1)
            }
            
        }, 500)   
        
        return () => clearInterval(slider)
        
    }, [hover, index]);
    

    return (
        <section className="section">
            <div className="section-center" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {           
                serviceList.map( (s, sId) => {
                    let position = 'nextSlide'
                    
                    if (sId === index){
                        position = 'activeSlide'
                    }
        
                    if (sId === index - 1 || (index === 0 && sId === serviceList.length - 1) ){
                        position = 'lastSlide'
                    }
                    
                    return (
                        <article className={position} key={s.id}>
                            <h2 className="slide-header">{s.service}</h2>
                        </article>  
                    )   
                }) 
                
            }
            
            </div>
        </section>
        
    )
}

export default ServiceSlider