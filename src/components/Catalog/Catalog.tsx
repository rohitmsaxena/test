import React, {FC, useEffect, useState} from 'react';
import styles from './Catalog.module.css';
import {getCatalog} from "../../services/CatalogService";

interface CatalogProps {}

const Catalog: FC<CatalogProps> = () => {
    const [catalog, setCatalog] = useState([{}]);

    useEffect(() => {
        getCatalog().then(({data}) => {
            setCatalog(data);
        })
    });

    return (
        <div className={styles.Catalog} data-testid="Catalog">
            Catalog Component
        </div>
    );
}

export default Catalog;
