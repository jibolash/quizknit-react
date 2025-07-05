import {
  MoreOutlined,
  CalendarOutlined,
  PlayCircleOutlined,
  ShareAltOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Flex, Card, Dropdown, Button, MenuProps } from "antd";
import { FlashcardSet } from "./create/CreateQuiz";
import { ShareItemModal } from "./ShareItemModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FlashcardSetCardProps {
  flashcardSet: FlashcardSet;
}
export function FlashcardSetCard({ flashcardSet }: FlashcardSetCardProps) {
  const [flashcardSetToShare, setFlashcardSetToShare] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = (id: string) => {
    setFlashcardSetToShare(id);
    setIsModalOpen(true);
  };

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <span
          onClick={() => showModal(flashcardSet._id)}
          style={{ cursor: "pointer" }}
        >
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
            <strong>{flashcardSet.flashcardSetTitle}</strong>
            <Dropdown menu={{ items }} placement="top">
              <MoreOutlined />
            </Dropdown>
          </Flex>
          <Flex>
            {flashcardSet.dateCreated && (
              <p style={{ color: "gray", margin: "0", fontSize: "12px" }}>
                <CalendarOutlined />{" "}
                {new Date(flashcardSet.dateCreated).toDateString()}
              </p>
            )}
          </Flex>
          <Flex>
            <p style={{ color: "gray", margin: "0", fontSize: "12px" }}>
              <FileOutlined /> {`${flashcardSet.flashcards.length} cards`}
            </p>
          </Flex>
          <Flex>
            <Button
              style={{ width: "100%" }}
              size="middle"
              onClick={() => navigate(`/flashcards/${flashcardSet._id}`)}
            >
              <PlayCircleOutlined />
              Study Cards
            </Button>
          </Flex>
        </Flex>
      </Card>
      <ShareItemModal
        itemId={flashcardSetToShare}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        savedItemType={"flashcards"}
      />
    </>
  );
}
