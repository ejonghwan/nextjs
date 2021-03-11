import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Axios from 'axios'

const Item = ({ item, name }) => {

    const router = useRouter()
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
    console.log(router.isFallback)
    if(router.isFallback) {
        return (
            <div style={{padding: "100px"}}>...is loading</div>
        )
    }

    console.log(router.isFallback)
    return (
        <div>
            {name}
            {item && (
                <Fragment>
                    
                    {/* {console.log('item123', item)} */}
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


// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { id: 740 } },
//             { params: { id: 730 } },
//             { params: { id: 729 } },
//         ],
//         fallback: false,
//     }
// }

export async function getStaticPaths() {
    const res = await Axios.get(process.env.apiurl)
    const data = await res.data

    return {
    //   paths : [
    //     { params: { id: "495" } },
    //     { params: { id: "488" } },
    //     { params: { id: "477" } }, 
    //   ],
        paths: data.slice(0, 6).map(item => ({
            params: { id: item.id.toString() }
        })),
        fallback: true // See the "fallback" section below
    };
  }


// serversiderendering
export async function getStaticProps(context) {

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