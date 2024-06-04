import { setItem } from "localforage";

function donatedItem={
    const donated =localStorage.getItem('donated');
    if(donated){
        return donated;
    }
    else{
       setItem('donated',{})
    }
}

export {donatedItem}