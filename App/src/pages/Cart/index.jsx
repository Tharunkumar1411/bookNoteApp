import React from "react";

const RemoteCartApp = React.lazy(() => import("home/CartApp"));


const CartPage = () => {
    return(
        <div>
            <RemoteCartApp />
        </div>
    )
}

export default CartPage;