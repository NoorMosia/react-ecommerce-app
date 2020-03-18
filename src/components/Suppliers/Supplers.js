import React from 'react';

import Styles from './Suppliers.module.css';

import Supplier from './Supplier/Supplier';

const Suppliers = props => {

    const suppliersMapped = props.suppliers.map(sup => {
        return <Supplier key={sup.name} supplierData={sup} />
    })

    return (
        <div className={Styles.Suppliers}>
            {suppliersMapped}
        </div>
    )
}

export default Suppliers;