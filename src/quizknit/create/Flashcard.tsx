import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Card, Flex, Space, Tag, Typography } from "antd";
import { FlashcardItem } from "./CreateQuiz";
import { useState } from "react";
import { motion } from "framer-motion";

interface FlashcardProps {
  flashcardItem: FlashcardItem;
}

export function Flashcard({ flashcardItem }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => setFlipped((prev) => !prev);
  return (
    <Card
      hoverable
      style={{
        perspective: "1000px",
        margin: "8px",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: 150,
          position: "relative",
          cursor: "pointer",
          transformStyle: "preserve-3d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={{ rotateX: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        onClick={handleClick}
      >
        <div
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
          }}
        >
          <Flex vertical align="center">
            <Tag>Question</Tag>
            <Typography.Title level={5} style={{ textAlign: "center" }}>
              {flashcardItem.question}
            </Typography.Title>
          </Flex>
          <Flex justify="center">
            <Typography.Text type="secondary">
              <Space>
                <EyeOutlined />
                Click to reveal answer
              </Space>
            </Typography.Text>
          </Flex>
        </div>

        <div
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        >
          {/* {flashCardItem.answer} */}
          <Flex vertical align="center">
            <Typography.Text style={{ textAlign: "center" }}>
              {flashcardItem.answer}
            </Typography.Text>
          </Flex>
          <Flex justify="center">
            <Typography.Text type="secondary">
              <Space>
                <EyeInvisibleOutlined />
                Click to hide answer
              </Space>
            </Typography.Text>
          </Flex>
        </div>
      </motion.div>
    </Card>
  );
}
