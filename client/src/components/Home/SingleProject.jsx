import React from 'react'
import { Card, ConfigProvider } from "antd";
const SingleProject = (props) => {
    const { img, title } = props;
    const { Meta } = Card;
    const postStyle = {
      color: "white", // Text color
      
      width: 240,
    };
  return (
    <ConfigProvider theme={{ token: {
        colorText: "#fff",
        colorTextDescription: "#fff"
      } }}>
        <Card
          className="bg-teal-500 shadow bg-opacity-65 hover:bg-opacity-100 transition"
          hoverable
          style={postStyle}
          cover={
            <img
             className='object-cover'
              alt="example"
              src={img}
              style={{height: "200px"}}
            />
          }
        >
              <Meta
              className='text-center'
                style={{ color: !"white" }}
                title={title}
              />
        </Card>
      </ConfigProvider>
  )
}

export default SingleProject