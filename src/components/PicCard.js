import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Modal, Button } from "antd";

const PicCard = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log(data);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Card style={{ position: "relative", overflow: "hidden" }}>
        {item.image_id !== null ? (
          <Card.Img
            variant="top"
            alt={item?.thumbnail?.alt_text}
            src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
          />
        ) : (
          <Card.Img
            variant="top"
            alt="hinh_thay_the"
            src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          />
        )}
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "1rem",
              fontWeight: "normal",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div>
              Tên tranh :{" "}
              <span style={{ color: "#b5179e", fontWeight: "bold" }}>
                {item.title}
              </span>
              <br />
              <br />
              <span>
                Nội dung:{" "}
                <span style={{ color: "#0096c7", fontWeight: "bold" }}>
                  {item?.thumbnail?.alt_text || "Không đề cập."}
                </span>
              </span>
            </div>

            <span style={{ marginTop: "auto" }}>
              Điểm phê bình :{" "}
              <span style={{ color: "#b5179e", fontWeight: "bold" }}>
                {Number(item._score).toFixed(2)}
              </span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
                style={{ transform: "translateY(-2px)" }}
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>{" "}
              <Button
                onClick={showModal}
                style={{
                  marginTop: "5px",
                  background: "#ffbe0b",
                  fontWeight: "bold",
                  color:'#e63946',
                  borderRadius:'4px',
                }}
              >
                Full picture
              </Button>
              <Modal
                title={`Bức họa ${item.title}`}
                visible={isModalVisible}
                onCancel={handleCancel}
                mask="false"
                width="70vw"
                footer=""
                centered="true"
                destroyOnClose="true"
                bodyStyle={{
                  height: "auto",
                }}
              >
                <img
                  src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                  alt="full_pic"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                />
              </Modal>
            </span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default PicCard;
