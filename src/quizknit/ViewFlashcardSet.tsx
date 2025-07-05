import { Button, Flex, Spin } from "antd";
import { useAsync } from "react-async-hook";
import { useParams } from "react-router-dom";
import { QuizKnitApi } from "./QuizKnitApi";
import { useEffect, useState } from "react";
import { FlashcardSet } from "./create/CreateQuiz";
import { LoadingOutlined, ShareAltOutlined } from "@ant-design/icons";
import { ShareItemModal } from "./ShareItemModal";
import { Flashcard } from "./create/Flashcard";

export function ViewFlashcardSet() {
  const { id } = useParams();
  const [flashcardSet, setFlashcardSet] = useState<FlashcardSet>();
  const [flashcardSetLoaded, setFlashcardSetLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { loading: loadingFlashcardSet, execute: loadFlashcardSet } = useAsync(
    () => QuizKnitApi.getFlashcardSetWithId(id || ""),
    [],
    {
      onSuccess(result) {
        setFlashcardSetLoaded(true);
        setFlashcardSet(result);
      },
      onError() {
        alert("Could not view flashcards!");
        setFlashcardSetLoaded(false);
      },
    }
  );

  useEffect(() => {
    try {
      loadFlashcardSet();
    } catch (e) {
      alert("Could not load flashcards!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingFlashcardSet) {
    return (
      <Flex vertical gap="12px" style={{ marginTop: "12px" }}>
        <Spin indicator={<LoadingOutlined spin />} />
      </Flex>
    );
  }

  if (!flashcardSetLoaded) {
    return (
      <Flex
        vertical
        gap="12px"
        style={{
          marginTop: "12px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <p>Could not load flashcards, please confirm the link is correct</p>
      </Flex>
    );
  }

  return (
    <Flex
      vertical
      gap="12px"
      style={{
        marginTop: "12px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Flex align="center" justify="space-between">
        <h3>{flashcardSet?.flashcardSetTitle}</h3>
        <Button
          type="default"
          shape="circle"
          icon={<ShareAltOutlined />}
          onClick={() => setIsModalOpen(true)}
        />
      </Flex>
      {flashcardSet && (
        <Flex vertical>
          {flashcardSet.flashcards?.length > 0 &&
            flashcardSet.flashcards.map((flashcardItem, index) => (
              <Flashcard flashcardItem={flashcardItem} key={index} />
            ))}
        </Flex>
      )}
      <ShareItemModal
        itemId={flashcardSet?._id || ""}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        savedItemType="flashcards"
      />
    </Flex>
  );
}
