import { Card } from "antd";
export default function MyCard() {
  return (
    <div>
      <Col className="gutter-row" xl={24} xs={8}>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{
            width: 300,
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </div>
  );
}
