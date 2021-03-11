import { useEffect, useState } from 'react';
import ItemList from '../src/components/ItemList'
import Head from 'next/head'
import AppLayout from '../src/components/AppLayout'
import Axios from 'axios'


export default function Home({ list }) {

  // const [list, setList] = useState([])
  // const [isLoading, setIsloading] = useState(true)

  // const url = process.env.NEXT_PUBLIC_API_URL;

  //  async function getData() {
  //    await Axios.get(url).then((res) => {
  //     // console.log('asd', res.data)
  //     setList(res.data)
  //     setIsloading(false)
  //     // console.log(list)
  //     // console.log('list', list)
  //   })
  // }

  // useEffect(() => {
  //   getData()
  // }, [])


  return (
    <div>
      <Head>
        <title>넥스트 제이에스</title>
      </Head>
      <AppLayout>
        {/* {isLoading ? (
          <div>...isloading</div>
        ) : (
          <ItemList list={list}/>
        )} */}
		    <ItemList list={list}/>
        
      </AppLayout>
    </div>
  )
}


export async function getStaticProps(context) {

    const res = await Axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
    const data = await res.data
    
    return {
      props: {
        list: data,
      }
    }
}