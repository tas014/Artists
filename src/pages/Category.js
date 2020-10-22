import React from 'react';
import MainCategory from '../components/MainCategory';
import Layout from '../containers/Layout'
import { useParams } from 'react-router-dom';

const Category = ()=> {
    const {id}=useParams();

    return (
        <div>
            <Layout>
                <MainCategory id={id} />
            </Layout>
        </div>
        )
}

export default Category