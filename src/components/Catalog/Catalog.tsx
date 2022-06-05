import React, {FC, useEffect, useState} from 'react';
import styles from './Catalog.module.css';
import {getCatalog} from "../../services/CatalogService";
import Book from "../Book/Book";
import {BookType} from "./BookType";

interface CatalogProps {}

const Catalog: FC<CatalogProps> = () => {
    const [catalog, setCatalog] = useState<BookType[]>([]);

    useEffect(() => {
        getCatalog().then(({data}) => {
            setCatalog(data);
        })
    });

    return (
        <div className={styles.Catalog} data-testid="Catalog">
            <React.Fragment>
                {catalog && catalog.map((book: BookType) => (
                    <Book key={book.id} book={book} />
                ))}
            </React.Fragment>
        </div>
    );
}

export default Catalog;
