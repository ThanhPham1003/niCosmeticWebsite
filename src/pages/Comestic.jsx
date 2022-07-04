import React from 'react'

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import comesticData from '../assets/fake-data/comestics'

const Comestic = props => {

  const product = comesticData.getProductBySlug(props.match.params.slug)
  const relatedProducts = comesticData.getProducts(8)

  React.useEffect(() => {
    window.scrollTo(0,0)
    console.log("333333", product)
}, [product])
  return(
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    path={item.path}
                                />   
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
  )
}
export default Comestic