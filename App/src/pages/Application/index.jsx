import React from "react";

const RemoteProductApp = React.lazy(() => import("home/HomeApp"));


const Application = () => {
    return(
        <div>
            <RemoteProductApp />
        </div>
    )
}

export default Application;