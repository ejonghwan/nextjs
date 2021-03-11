import React, { Fragment } from 'react';
import styles from './ItemList.module.css';
import Link from 'next/link';

const ItemList = ({ list }) => {
    return (
        <Fragment>
            <div>new products</div>
            <div className={styles.wrap}>
                {list.slice(0, 6).map(item => (
                    <div className={styles.item} key={item.id}>
                        <Link href="/default/[id]" as={`/default/${item.id}`}>
                            <a>
                            <img src={item.image_link} /><br />
                            <b>name : </b>{item.name}<br />
                            <b>price : </b>{item.price}<br />
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            <div>new products</div>
            <div className={styles.wrap}>
                {list.slice(6).map(item => (
                    <div className={styles.item} key={item.id}>
                        <Link href="/default/[id]" as={`/default/${item.id}`}>
                            <a>
                            <img src={item.image_link} /><br />
                            <b>name : </b>{item.name}<br />
                            <b>price : </b>{item.price}<br />
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default ItemList;