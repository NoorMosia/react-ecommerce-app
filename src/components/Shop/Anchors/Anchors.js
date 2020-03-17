import React from "react";

import Anchor from "./Anchor/Anchor";
import styles from "./Anchors.css";

import { IoIosAlbums, IoIosBasket, IoIosContacts } from "react-icons/io";

const Anchors = () => {
    return (
        <ul className={styles.Anchors}>
            <Anchor icon="ico" name="products" active>
                <IoIosBasket />
            </Anchor>
            <Anchor icon="ico" name="categories">
                <IoIosAlbums />
            </Anchor>
            <Anchor icon="ico" name="suppliers">
                <IoIosContacts />
            </Anchor>
        </ul>
    )
}

export default Anchors;