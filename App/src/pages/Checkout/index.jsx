import React from "react";

const RemoteCheckoutApp = React.lazy(() => import("home/CheckoutApp"));

const CheckoutPage = () => {
    return(
        <div>
            <RemoteCheckoutApp />
        </div>
    )
}

export default CheckoutPage;