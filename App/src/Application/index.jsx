import React from "react";

const RemoteProductApp = React.lazy(() => import("home/HomeApp"));


const Application = () => {
    return(
        <div>
            Applicaton
            <RemoteProductApp />
        </div>
    )
}

export default Application;