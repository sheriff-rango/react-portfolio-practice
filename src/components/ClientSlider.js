import React, {useState, useEffect} from 'react'
import clientData from '../data/clientData'

function ClientSlider() {
    // eslint-disable-next-line
    const [clientList, setclientList] = useState(clientData)
    const [index, setIndex] = useState(0)
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const lastIndex = clientList.length - 1
        
        if (index < 0){
            setIndex(lastIndex)
        }
        if (index > lastIndex){
            setIndex(0)
        }

    },[index, clientList])

    useEffect(() => {
        let slider = setInterval( () => {
            if (hover===true){
                setIndex(index+1)
            }
        }, 500)
        return () => clearInterval(slider)
    }, [hover, index])

    return (
        <section className="section">
            <div className="section-center" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            { 
                clientList.map( (c, cId) => {
                    let position = 'nextSlide'
                    
                    if (cId === index){
                        position = 'activeSlide'
                    }

                    if (cId === index - 1 || (index === 0 && cId === clientList.length - 1) ){
                        position = 'lastSlide'
                    }
                    
                    return (

                        <article className={position} key={c.id}>
                            <h2 className="slide-header">{c.client}</h2>
                        </article>
                    )
                })
            }
            </div>
        </section>
        
    )
}

export default ClientSlider
