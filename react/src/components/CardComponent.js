import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const CardComponent = (props) => {
  return (
    <div className="flex-[33%]">
      <Card
        hoverable
        onClick={props.onClick}
        cover={<img alt="places" src={props.src} />}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </div>
  );
};

export default CardComponent;
