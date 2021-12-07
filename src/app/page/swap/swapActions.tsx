import { Button, Card, Col, Row, Typography } from 'antd'

const ExtraTypography = ({
  label = '',
  title = '',
}: {
  label?: string
  title?: string
}) => {
  return (
    <Row>
      <Col flex="auto">
        <Typography.Text type="secondary">{label}</Typography.Text>
      </Col>
      <Col>
        <Typography.Text>{title}</Typography.Text>
      </Col>
    </Row>
  )
}

const SwapActions = () => {
  return (
    <Card bordered={false}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Typography.Title level={5}>Review & Swap</Typography.Title>
        </Col>
        <Col span={24}>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <ExtraTypography label="Price impart" title="1.4%" />
            </Col>
            <Col span={24}>
              <ExtraTypography label="Price" title="0 SOL = 0 ETH" />
            </Col>
            <Col span={24}>
              <ExtraTypography label="Inverse price" title="0 SOL = 0 ETH" />
            </Col>
            <Col span={24}>
              <ExtraTypography label="Slippage toleance" title=" 0.5%" />
            </Col>
            <Col span={24}>
              <ExtraTypography
                label="Liquidity provider fee"
                title="0.00000001 SOL"
              />
            </Col>
            <Col span={24}>
              <ExtraTypography label="Route" title="SOL -> ETH" />
            </Col>
          </Row>
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
