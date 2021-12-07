import { Row, Col } from 'antd'
import SwapChart from './chart'
import Swap from './swap'
import History from './history'

import 'app/static/styles/index.less'

const Page = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={8}>
        <Swap />
      </Col>
      <Col span={14}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <SwapChart />
          </Col>
          <Col span={24}>
            <History />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Page
