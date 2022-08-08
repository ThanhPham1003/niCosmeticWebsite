import React, { useCallback, useState, useEffect, useRef } from 'react'

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'

import types from '../assets/fake-data/product-type'
import productData from '../assets/fake-data/products'

import cosmeticsCategory from '../assets/fake-data/cosmeticsCategory'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'

const Catalog = () => {



    const initFilter = {
        cosmeticsCategory: [],
        types: []

    }

    const productList = productData.getAllProducts()

    const [products, setProducts] = useState(productList)

    const [info, setInfo] = useState('');

    const [searchingProduct, setSearchingProduct] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const searchFilter = (text) => {
        if(text) {
            const newData = searchingProduct.filter((item) => {
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setProducts(newData);
          setInfo(text);
        }else{
          setProducts(searchingProduct);
          setInfo(text);
        }
      }

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch(type) {
                // case "CATEGORY":
                //     setFilter({...filter, category: [...filter.category, item.categorySlug]})
                //     break
                case "COSMETIC":
                    setFilter({...filter, cosmeticsCategory: [...filter.cosmeticsCategory, item.categorySlug]})
                    break
                case "TYPES":
                    setFilter({...filter, types: [...filter.types, item.type]})
                    break
                default:
            }
        } else {
            switch(type) {
                // case "CATEGORY":
                //     const newCategory = filter.category.filter(e => e !== item.categorySlug)
                //     setFilter({...filter, category: newCategory})
                //     break
                case "COSMETIC":
                    const newCosmetic = filter.cosmeticsCategory.filter(e => e !== item.categorySlug)
                    setFilter({...filter, cosmeticsCategory: newCosmetic})
                    break
                case "TYPES":
                    const newType= filter.types.filter(e => e !== item.type)
                    setFilter({...filter, types: newType})
                    break    
                default:
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)

    const updateProducts = useCallback(
        () => {
            let temp = productList
            if(info){
                temp = temp.filter((item) => {
                    const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                    const textData = info.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                  });
            }
            if (filter.cosmeticsCategory.length > 0) {
                temp = temp.filter(e => filter.cosmeticsCategory.includes(e.categorySlug))
            }
            if (filter.types.length > 0) {
                temp = temp.filter(e => filter.types.includes(e.type))
            }
            setProducts(temp)
            setSearchingProduct(temp)
        },
        [filter, productList, info],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])


    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')
    
    return (
        <Helmet title="Sản Phẩm">
            <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div> 
                    <div className='catalog__filter__searchbar'>
                        <input className='catalog__filter__searchbar__input' 
                            type="text" 
                            placeholder='Tìm kiếm sản phẩm...' 
                            value={info}
                            onChange={(e) => searchFilter(e.target.value)}
                        />
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Danh Mục
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                cosmeticsCategory.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("COSMETIC", input.checked, item)}
                                            checked={filter.cosmeticsCategory.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Khác
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                            checked={filter.category.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Loại Sản Phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                types.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("TYPES", input.checked, item)}
                                            checked={filter.types.includes(item.type)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={clearFilter}>xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__filter__toggle">
                    <Button size="sm" onClick={() => showHideFilter()}>bộ lọc</Button>
                </div>
                <div className="catalog__content">
                    <InfinityList
                        data={products}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
