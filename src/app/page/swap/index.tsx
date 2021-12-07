import { Col, Row } from 'antd'
import SwapActions from './swapActions'
import SwapForm from './swapForm'

const Swap = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <SwapForm />
      </Col>
      <Col span={24}>
        <SwapActions />
      </Col>
    </Row>
  )
}

export default Swap