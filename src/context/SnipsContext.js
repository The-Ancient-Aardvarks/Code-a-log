import { useState } from "react";

const SnipsContext = createContext();
const SnipsProvider = ({children})=> {
    const [snips,setSnips] = useState([]);
    useEffect(() =>{
        try {
            const data= await getSnips();
            setSnips(data);
        } catch (e) {
            console.log(e.message);
            
        };
        fetchSnips();
    },[]);
    return <SnipsContext.Provider value={{snips,setSnips}}>{children}</SnipsContext.Provider>
};
export{SnipsContext,SnipsProvider};