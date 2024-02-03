import { Col } from "react-bootstrap";

export const PhotographyCard = ({ imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="photo-imgbx">
        <img src={imgUrl} />
      </div>
    </Col>
  )
}