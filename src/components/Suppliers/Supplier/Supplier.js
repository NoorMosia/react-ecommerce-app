import React from 'react';

import Styles from './Supplier.css';

const Supplier = props => {

    const commaStringBuilder = (arr) => {
        let str = "";
        const numProds = arr.length;

        arr.forEach((prod, index) => {
            if(numProds < 2 ) {
                str += prod;
            } else if(index < numProds - 2 ) {
                str += prod + ", ";
            } else if(index === numProds - 2) {
                str += " " + prod;
            }
            else if(index === numProds -1) {
                str += " And " + prod;
            }
        });

        return str;
    }

    return (
        <div className={Styles.Supplier}>
            <div className={Styles.ImageContainer} >
                <img src={props.supplierData.imageUrl} alt={props.supplierData.name} />
            </div>
            <div className={Styles.Text} > 
                <div className={Styles.Name} >{props.supplierData.name} </div>
                <div className={Styles.Info} >Products: {commaStringBuilder(props.supplierData.products)} </div>
                <div className={Styles.Info} >locations: {commaStringBuilder(props.supplierData.locations)} </div>
                <div className={Styles.Info} >Telephone: {props.supplierData.telephone} </div>
                <div className={Styles.Info} >e-mail: {props.supplierData.email}</div>
            </div>
        </div>
    )
}

export default Supplier;