import React from "react";
import { Row, Col } from "react-bootstrap";
import PicCard from "./PicCard";

const SearchResult = ({ result }) => {
  console.log(result);
  if (!result) {
    return null;
  }
  if (result.length === 0) {
    return <p>Không có kết quả. Hãy thử chủ đề khác.</p>;
  }
  return (
    <Row>
      <div className="container fluid">
        <h1
          style={{
            color: "#fcbf49",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          BEST PICTURES
        </h1>
      </div>
      {result.map((item, index) => {
        return (
          <Col key={item.id} xs={12} md={4} lg={3}>
            <PicCard item={item}/>
          </Col>
        );
      })}
    </Row>
  );
};

export default SearchResult;
