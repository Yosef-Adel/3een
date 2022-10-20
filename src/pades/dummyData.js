import img1_0 from '../img/products/P1/1.jpg'
import img1_1 from '../img/products/P1/2.jpg'
import img1_2 from '../img/products/P1/3.jpg'
import img1_3 from '../img/products/P1/4.jpg'
import img1_4 from '../img/products/P1/5.jpg'
import img1_5 from '../img/products/P1/6.jpg'


import img2_0 from '../img/products/P2/1.jpg'
import img2_1 from '../img/products/P2/2.jpg'
import img2_2 from '../img/products/P2/3.jpg'
import img2_3 from '../img/products/P2/4.jpg'

import img3_0 from '../img/products/P3/0.jpg'
import img4_0 from '../img/products/P4/0.jpg'


const products = [
    {
        name: 'Distracted',
        price: 450,
        img : img1_0,
        allImg: [
            {
              image: img1_0
            },
            {
              image: img1_1
            },
            {
              image: img1_2
            },
            {
              image: img1_3
            },
            {
              image: img1_4
            },
            {
              image: img1_5
            }
          ],
        quantity: 2,
        collection: 'T-shirts',
        id:0

    },
    {
        name: 'Lost',
        price: 450,
        img :  img2_0,
        allImg: [
            {
              image: img2_0
            },
            {
              image: img2_1
            },
            {
              image: img2_2
            },
            {
                image: img2_3
            }
          ],
        quantity: 1,
        collection: 'T-shirts',
        id:1
    },
    {
        name: '',
        price: '',
        img :  img3_0,
        allImg: [ {image: img3_0} ],
        quantity: 0,
        collection: 'T-shirts',
        id:3
    },
    {
        name: '',
        price: '',
        img :  img4_0,
        allImg: [ {image: img4_0} ],
        quantity: 0,
        collection: 'T-shirts',
        id:4
    }


]

export default products
