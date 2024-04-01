import { useState, useEffect } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);    //  in this context, true indicates that the initial state value of onlineStatus is set to true, meaning that by default, the component's online status is considered as online. Later in the component's lifecycle, this state can be updated using the setOnlineStatus function to reflect changes in the online status.

    // check if online
    useEffect(() => {               

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })

    },[]);
    //boolean value

    return onlineStatus;

};

export default useOnlineStatus; 