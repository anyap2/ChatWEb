import { useEffect, useState, useContext } from "react"
import { Storage } from "../App"

export default function Messages() {

const {setList, list} = useContext(Storage)

    return (
        <div>
            {list?.map((item, index) => {
                return (
                    <p key={index}>
                        {item}
                    </p>
                )
            })}
        </div>
    )
}