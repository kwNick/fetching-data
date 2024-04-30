import Image from 'next/image';
import React from 'react'

const page = async () => {
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error('failed to fetch data!');

        }
        return response.json();
    };
    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
            throw new Error('failed to fetch data!');

        }
        return response.json();
    };
    const apiData = await getData();
    const apiProducts = await getProducts();
    return (
        <div>
            <p>Dashboard!</p>
            {/* {
                JSON.stringify(apiProducts)
            } */}
            {
                apiProducts?.products.map((x: { id: string, images: [] }) => (
                    x.images.map((x: any) => (
                        <div className='w-auto h-auto'>
                            <Image src={x} alt="pic" height={500} width={500} className='w-auto h-auto' />
                        </div>
                    ))
                ))
            }
        </div>
    )
}

export default page