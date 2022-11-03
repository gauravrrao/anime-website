import React, { useContext } from 'react'
import { appreactor } from './Context'
import './pagination.css'


const Pagination = () => {

    const { setcurrentpage,totalpost, postperpage } = useContext(appreactor)
    let pages = []

    for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
        pages.push(i)
    }
    return (
        <div className='pagination'>
            {
                pages?.map((page, index) => {
                    return <button key={index} className="buttonp" onClick={()=>setcurrentpage(page)}>{page}</button>
                })
            }

        </div>
    )
}

export default Pagination