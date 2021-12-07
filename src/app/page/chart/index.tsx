import { Card, Col, Radio, Row, Space, Typography } from 'antd'
import SenChart from './chart'

const SwapChart = () => {
  return (
    <Card bordered={false}>
      <Row gutter={[16, 16]}>
        <Col flex="auto">
          <Space direction="vertical">
            <Typography.Text>SwapChart</Typography.Text>
            <Typography.Title level={2}>0.24 </Typography.Title>
          </Space>
        </Col>
        <Col>
          <Radio.Group defaultValue="week">
            <Radio.Button value="day">Day</Radio.Button>
            <Radio.Button value="week">Week</Radio.Button>
            <Radio.Button value="month">Month</Radio.Button>
            <Radio.Button value="year">Year</Radio.Button>
          </Radio.Group>
        </Col>
        <Col span={24}>
          <SenChart
            chartData={[12, 123, 141, 2, 512, 12, 113]}
            labels={['01/12', '02/12', '03/12', '04/12', '05/12']}
          />
        </Col>
      </Row>
    </Card>
  )
}

export default SwapChart
