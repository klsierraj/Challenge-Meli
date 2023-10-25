import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ResultList from '../components/ResultList/ResultList';

import api from '../services/api';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { Head } from '../components/Head/Head';

const SearchPage = () => {
    const [products, setProducts] = useState([]);
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const query = params.get('search');

    useEffect(() => {
        api
            .get(`/api/items?q=${query}`)
            .then(({ data }) => {
                setProducts(data.items);
                setBreadcrumbs(data.categories)
            })
            .catch((err) => {
               console.log(err)
            });
    }, [query]); 

    return (
        <>
        <Head title="Resultados | Mercado Libre" />
          {breadcrumbs.length > 0 && <BreadCrumbs breadcrumbs={breadcrumbs} />}
            {products.length > 0 && <ResultList results={products} />}
        </>
    );
};

export default SearchPage;
