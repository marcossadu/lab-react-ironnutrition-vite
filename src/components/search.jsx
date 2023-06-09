import { Input } from "antd"
import { useState } from "react"


export default function Search({value, onSearchChange}){

    

    return <>
    
    <label htmlFor="search"> Buscar </label>
    <Input id="search" name="search" value={value} onChange={(e) => setSearch(e.target.value)} ></Input>
    </>

}