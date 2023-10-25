import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { ProductDetail } from '../components/Details/ProductDetail';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { Head } from '../components/Head/Head';



const DescriptionPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api
            .get(`/api/items/${id}`)
            .then(({ data }) => {
                setProduct(data.item);
                setCategories(data.categories);
            })
            .catch((err) => {
                console.log(err)
            });
    }, [id]);

  

    return (
        <>  
        <Head title="Descripción | Mercado Libre" />
             {categories.length > 0 && <BreadCrumbs breadcrumbs={categories} />}
            {product.id ? <ProductDetail product={product} /> : null}
        </>
    );
};

export default DescriptionPage;
