import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Axios from 'axios'

const Item = ({ item, name }) => {

    // const router = useRouter()
    // const { id } = router.query
    // const [item, setItem] = useState();

    // const getData = async () => {
    //     const res = await Axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline`)
    //     const data = await res.data
    //     setItem(data)
        
    // }


    // useEffect(() => {
    //     if(id && id > 0) {
    //         getData();
    //     }
    // }, [id])

    return (
        <div>
            {name}
            {item && (
                <Fragment>
                    
                    {console.log('item123', item)}
                    <img src={item.image_link} /><br />
                    {item.name}<br />
                    {item.id}<br />
                    {item.description}      
                </Fragment>
            )}
        </div>
    );
};

export default Item;

// serversiderendering
export async function getServerSideProps(context) {

    const id = context.params.id
    const res = await Axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline`)
    const data = await res.data

    return {
        props: {
            item: data,
            name: process.env.name
        }
    }
}