import React from "react";

import Aux from "../../hoc/Aux-cover/Aux-cover";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;