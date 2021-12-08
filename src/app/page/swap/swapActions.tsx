import { Button, Card, Col, Row, Typography } from 'antd'
import SwapInfo from 'app/components/swapInfo'

const SwapActions = () => {
  return (
    <Card bordered={false}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Typography.Title level={5}>Review & Swap</Typography.Title>
        </Col>
        <Col span={24}>
          <SwapInfo />
        </Col>
        <Col span={24}>
          <Button type="primary" block>
            Swap
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default SwapActions
