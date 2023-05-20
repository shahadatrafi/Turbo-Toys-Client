import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Turbo Toys | ${title}`;
    },[title])
}

export default useTitle;