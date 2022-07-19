import React from 'react'
import {useGlobalContext} from "./Context";
const Stories = () => {
    const {hits}=useGlobalContext()
    return (<>
        {hits.map((elem)=>{
            return(
                <div>
                    {/* {elem.title} */}
                </div>
            )
        }) }
    </>
      )
}

export default Stories