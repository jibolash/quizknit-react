import { LoadingOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { QuizKnitApi } from "./QuizKnitApi";
import { useEffect, useState } from "react";
import { useAsync } from "react-async-hook";
import { FlashcardSet } from "./create/CreateQuiz";
import { FlashcardSetCard } from "./FlashcardSetCard";

export function UserFlashcardSets() {
  const navigate = useNavigate();

  const [userFlashcardSets, setUserFlashcardSets] = useState<FlashcardSet[]>(
    []
  );
  const { userId } = useParams();

  const { loading: loadingUserFlashcardSets, execute: fetchUserFlashcardSets } =
    useAsync(() => QuizKnitApi.getUserFlashcardSets(userId || ""), [], {
      onSuccess(result) {
        setUserFlashcardSets(result);
      },
    });

  useEffect(() => {
    fetchUserFlashcardSets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingUserFlashcardSets) {
    return (
      <Flex wrap gap={"small"} style={{ margin: "12px" }}>
        <Spin indicator={<LoadingOutlined spin />} />
      </Flex>
    );
  }

  return (
    <Flex
      style={{
        flex: "auto",
        flexDirection: "column",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Flex align="center" justify="space-between">
        <h3>Your Flashcards</h3>
        <Flex gap={8}>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/create-flashcards")}
          >
            Create Flashcards
          </Button>
        </Flex>
      </Flex>
      <Row gutter={[12, 12]}>
        {userFlashcardSets.map((flashcardSet: FlashcardSet) => (
          <Col key={flashcardSet._id} xs={24} sm={12} md={8} lg={6}>
            <FlashcardSetCard flashcardSet={flashcardSet} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
}
