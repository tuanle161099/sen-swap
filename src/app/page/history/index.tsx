import moment from 'moment'

import { Card, Col, Row, Typography, Table, Button } from 'antd'
import { HISTORY_COLUMN } from './column'
import IonIcon from 'shared/ionicon'

import './index.less'

const History = () => {
  const data = {
    key: 0,
    time: moment().format('DD MMM, YYYY hh:mm'),
    transaction: 'Swap Solana',
    paid: 'Solana - Ethereum',
    amount: 0,
    status: 'success',
  }
  const sources = [1, 2, 3, 4, 5].map((e) => {
    data.key = e
    data.amount = e * Math.random()
    return { ...data }
  })

  return (
    <Card bordered={false}>
      <Row gutter={[16, 16]} justify="center">
        <Col>
          <Typography.Text>Swap history</Typography.Text>
        </Col>
        <Col span={24}>
          <Table
            columns={HISTORY_COLUMN}
            dataSource={sources}
            pagination={false}
            rowClassName={(record, index) =>
              index % 2 ? 'odd-row' : 'even-row'
            }
          />
        </Col>
        <Col>
          <Button type="text" icon={<IonIcon name="chevron-down-outline" />}>
            View more
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default History
