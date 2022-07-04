const skincare_01 = require('../images/comestics/skincare(1).png').default
const skincare_02 = require('../images/comestics/skincare(2).png').default

const comestics = [
  {
    title: "Sữa rửa mặt Laroche Posay",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "skincare",
    slug:"sua-rua-mat-laroscheposay",
    path: "comestics",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 1",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham-soc-da",
    slug:"sua-rua-mat-laroscheposay",
    path: "comestics",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 2",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham-soc-da",
    slug:"sua-rua-mat-laroscheposay",
    path: "comestics",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 3",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham soc da",
    slug:"sua-rua-mat-laroscheposay",
    path: "comestics",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 4",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham soc da",
    slug:"sua-rua-mat-laroscheposay",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 5",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham soc da",
    slug:"sua-rua-mat-laroscheposay",
    path: "comestics",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 6",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham soc da",
    slug:"sua-rua-mat-laroscheposay",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 7",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham soc da",
    slug:"sua-rua-mat-laroscheposay",
    path: "comestics",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 8",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham soc da",
    slug:"sua-rua-mat-laroscheposay",
    path: "comestics",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 9",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham soc da",
    slug:"sua-rua-mat-laroscheposay",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 10",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham soc da",
    slug:"sua-rua-mat-laroscheposay",
    path: "comestics",
    description: " Sữa rửa mặt xịn"
  },
  {
    title: "Sữa rửa mặt Laroche Posay 11",
    price: '200000',
    image01: skincare_01,
    image02: skincare_02,
    categorySlug: "cham soc da",
    slug:"sua-rua-mat-laroscheposay",
    path: "comestics",
    description: " Sữa rửa mặt xịn"
  }
]

const getAllProducts = () => comestics

const getProducts = (count) => {
    const max = comestics.length - count
    const min = 0
    console.log("max", max)
    const start = Math.floor(Math.random() * (max - min) + min)
    return comestics.slice(start, start + count)
}

const getProductBySlug = (slug) => comestics.find(e => e.slug === slug)


const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const comesticData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default comesticData