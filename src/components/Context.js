import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

let appreactor = React.createContext()

const Context = ({ children }) => {

    const [search, setsearch] = useState("naruto")

    const [postperpage, setpostperpage] = useState(5)
    const [currentpage, setcurrentpage] = useState(1)

    const [gone, setgone] = useState()
    useEffect(() => {

        let getapi = async () => {
            let data = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)
            let response = await data.json()
            setgone(response.data)
        }
        getapi()
    }, [search])


    let lastpostindex = currentpage * postperpage
    let firstpostindex = lastpostindex - postperpage

    let currentpost = gone?.slice(firstpostindex, lastpostindex);

    let totalpost=gone?.length
    return (
        <div>
            <appreactor.Provider value={{ setsearch, gone, currentpost,postperpage, totalpost,setcurrentpage,currentpage }}>
                {children}
            </appreactor.Provider>
        </div>
    )
}

export default Context

export { appreactor }