import React, { useCallback, useState, useEffect, useRef } from 'react'

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'

import comesticData from '../assets/fake-data/comestics'
import category from '../assets/fake-data/comesticsCategory'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'

const ComesticsCatalog = () => {
  const initFilter ={
    category: []
  }

  const comesticList = comesticData.getAllProducts()

  const [comestics, setComestics] = useState(comesticList)
  
  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) => {
    if (checked) {
        switch(type) {
            case "CATEGORY":
                setFilter({...filter, category: [...filter.category, item.categorySlug]})
                break
            default:
        }
    } else {
        switch(type) {
            case "CATEGORY":
                const newCategory = filter.category.filter(e => e !== item.categorySlug)
                setFilter({...filter, category: newCategory})
                break
            default:
        }
    }
  }
  const clearFilter = () => setFilter(initFilter)
  const updateProducts = useCallback(
    () => {
        let temp = comesticList

        if (filter.category.length > 0) {
            temp = temp.filter(e => filter.category.includes(e.categorySlug))
        }
        setComestics(temp)
    },
    [filter, comesticList],
  )
  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  const filterRef = useRef(null)

  const showHideFilter = () => filterRef.current.classList.toggle('active')
  return (
    <Helmet title="Mỹ Phẩm">
       <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            danh mục sản phẩm
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
                        data={comestics}
                    />
                </div>
        </div>
    </Helmet>
  )
}
export default ComesticsCatalog