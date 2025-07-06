import {
  MoreOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
  FileOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { Flex, Card, Dropdown, Button, MenuProps } from "antd";
import { Quiz } from "./create/CreateQuiz";
import { ShareItemModal } from "./ShareItemModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface QuizCardProps {
  quiz: Quiz;
}
export function QuizCard({ quiz }: QuizCardProps) {
  const [quizToShare, setQuizToShare] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = (id: string) => {
    setQuizToShare(id);
    setIsModalOpen(true);
  };

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <span onClick={() => showModal(quiz._id)} style={{ cursor: "pointer" }}>
          <Flex gap={4}>
            <ShareAltOutlined />
            Share
          </Flex>
        </span>
      ),
    },
  ];

  return (
    <>
      <Card>
        <Flex vertical gap={8}>
          <Flex align="baseline" gap={8} justify="space-between">
            <strong>{quiz.quizTitle}</strong>
            <Dropdown menu={{ items }} placement="top">
              <MoreOutlined />
            </Dropdown>
          </Flex>
          <Flex>
            {quiz.dateCreated && (
              <p style={{ color: "gray", margin: "0", fontSize: "12px" }}>
                <CalendarOutlined /> {new Date(quiz.dateCreated).toDateString()}
              </p>
            )}
          </Flex>
          <Flex>
            <p style={{ color: "gray", margin: "0", fontSize: "12px" }}>
              <FileOutlined /> {`${quiz.questions.length} questions`}
            </p>
          </Flex>
          <Flex>
            <Button
              style={{ width: "100%" }}
              size="middle"
              type="primary"
              onClick={() => navigate(`/quiz/${quiz._id}`)}
            >
              <CaretRightOutlined />
              Take Quiz
            </Button>
          </Flex>
        </Flex>
      </Card>
      <ShareItemModal
        itemId={quizToShare}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        savedItemType="quiz"
      />
    </>
  );
}
