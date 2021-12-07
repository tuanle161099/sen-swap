import { Card, Col, Row, Typography, Table } from 'antd'
import IonIcon from 'shared/ionicon'

const columns = [
  {
    title: 'TIME',
    dataIndex: 'time',
    render: (time: string) => (
      <Typography.Text type="secondary">
        <IonIcon name="newspaper-outline" />
        {time}
      </Typography.Text>
    ),
  },
  {
    title: 'TRANSACTION',
    className: 'transaction',
    dataIndex: 'transaction',
  },
  {
    title: 'PAID',
    dataIndex: 'paid',
  },
  {
    title: 'AMOUNT',
    dataIndex: 'amount',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
  },
]

const History = () => {
  const data = {
    key: 0,
    time: new Date().toDateString(),
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
      <Row gutter={[16, 16]}>
        <Col>
          <Typography.Text>Swap history</Typography.Text>
        </Col>
        <Col span={24}>
          <Table columns={columns} dataSource={sources} pagination={false} />
        </Col>
      </Row>
    </Card>
  )
}

export default History
