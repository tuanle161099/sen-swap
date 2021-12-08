import { Col, Row, Typography } from 'antd'

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

const SwapInfo = () => {
  return (
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
  )
}

export default SwapInfo
