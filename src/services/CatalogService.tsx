import axios from "axios";

const base = 'http://127.0.0.1:3001';

const getCatalog = () => {
    return axios.get(`${base}/catalog/all`);
}

const getCatalogById = (id: number) => {
    return axios.get(`${base}/catalog`, {params: id});
}

export {
    getCatalog,
    getCatalogById
}

// export default getCatalog;
