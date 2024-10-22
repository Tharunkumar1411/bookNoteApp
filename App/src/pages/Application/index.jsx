import React from "react";

const RemoteHomeApp = React.lazy(() => import("home/HomeApp"));


const Application = () => {
    return(
        <div>
            <RemoteHomeApp />
        </div>
    )
}

export default Application;