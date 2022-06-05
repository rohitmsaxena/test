import React, { FC } from 'react';
import styles from './Book.module.css';
import {BookType} from "../Catalog/BookType";
import {Box, Card, CardContent, Typography} from "@mui/material";

interface BookProps {
    book: BookType
}

const Book: FC<BookProps> = ({book}) => (
    <Box component="div" sx={{
        width: 200,
        height: 200,
        m: 3,
        display: "inline-flex"
    }}>
        <Card sx={{
            width: 200,
            height: 200
        }}>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                {book.name}
            </Typography>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {book.author}
                </Typography>
            </CardContent>
        </Card>
    </Box>

);

export default Book;
