import React from "react";

import Aux from "../../hoc/Aux-cover/Aux-cover";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <div>
                {props.children}
            </div>
        </Aux>
    )
}

export default Layout;