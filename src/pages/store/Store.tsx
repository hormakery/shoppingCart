import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import storeItems from '../../data/storeItems'
import StoreItems from '../../components/storeItems/StoreItems'

const Store = () => {
  return (
    
     <Container>
      <h1 className='mb-3' style={{ color: "green" }}>store</h1>
      <Row md={2} xs={1} lg={3} classname="g-3">
       {storeItems.map(item=>(
         
         <Col key={item.id} className="mb-4">
        <StoreItems  img-Url={''} {...item} />
        </Col>
       ))}
      </Row>
    
       </Container>
  )
}

export default Store
