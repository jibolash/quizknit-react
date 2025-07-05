import { Button, Card, Col, Flex, Row, Spin, Typography } from "antd";
import React, { useState } from "react";
import { QuizKnitApi } from "../QuizKnitApi";
// import { sampleInput } from "./sampleData";
// import { sampleFlashCards } from "../sampleData";
import { RocketOutlined, SaveOutlined } from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";
import { SavedItemModal } from "../SavedItemModal";
import { useLocation } from "react-router-dom";
import { authClient } from "../../lib/auth-client";
import { Content } from "./Content";
import { QuizCol } from "./QuizCol";
import { Flashcard } from "./Flashcard";

export type QuizTextInput = {
  textInput: string;
  numberOfQuestions: string;
  difficultyLevel: string;
};

interface Option {
  text: string;
  isCorrectAnswer: boolean;
}

export interface Question {
  question: string;
  options: Option[];
}

export interface Quiz {
  _id: string;
  quizTitle: string;
  questions: Question[];
  dateCreated: string;
  userId: string;
}

export interface FlashcardItem {
  question: string;
  answer: string;
}

export interface FlashcardSet {
  _id: string;
  flashcardSetTitle: string;
  flashcards: FlashcardItem[];
  dateCreated: string;
  userId: string;
}

interface CreateQuizProps {
  tourSteps: {
    enterTextTab: React.MutableRefObject<null>;
    selectCategoryTab: React.MutableRefObject<null>;
    generateQuizButton: React.MutableRefObject<null>;
    viewQuiz: React.MutableRefObject<null>;
    exploreNavlink: React.MutableRefObject<null>;
  };
  setOpenTour: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateQuiz(props: CreateQuizProps) {
  const location = useLocation();
  const [value, setValue] = useState("");
  // sampleInput[Math.floor(Math.random() * sampleInput.length)].text
  const [generating, setGenerating] = useState(false);
  const [quiz, setQuiz] = useState<Quiz>();

  const [flashcardSet, setFlashcardSet] = useState<FlashcardSet>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedItemId, setSavedItemId] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState("5");
  const [difficultlyLevel, setDifficultlyLevel] = useState("easy");

  const { data: session } = authClient.useSession();

  const isQuiz = () => {
    return location.pathname === "/create-quiz";
  };

  const isFlashcard = () => {
    return location.pathname === "/create-flashcards";
  };

  const onGenerateQuiz = async () => {
    setGenerating(true);
    if (!value.trim()) {
      setGenerating(false);
      alert("No text provided!");
      return;
    }
    const quizTextInput: QuizTextInput = {
      textInput: value,
      numberOfQuestions: numOfQuestions,
      difficultyLevel: difficultlyLevel,
    };
    try {
      const createdQuiz = await QuizKnitApi.generateQuiz(quizTextInput);
      if (createdQuiz) {
        setQuiz(createdQuiz);
        setGenerating(false);
      }
    } catch (e) {
      setGenerating(false);
      alert("Could not generate quiz, please try again")!;
    }
  };

  const onGenerateFlashcards = async () => {
    setGenerating(true);
    if (!value.trim()) {
      setGenerating(false);
      alert("No text provided!");
      return;
    }
    const quizTextInput: QuizTextInput = {
      textInput: value,
      numberOfQuestions: numOfQuestions,
      difficultyLevel: difficultlyLevel,
    };
    try {
      const createdFlashcards = await QuizKnitApi.createFlashCards(
        quizTextInput
      );
      if (createdFlashcards) {
        setFlashcardSet(createdFlashcards);
        setGenerating(false);
      }
    } catch (e) {
      setGenerating(false);
      alert("Could not generate flashcard, please try again")!;
    }
  };

  const saveQuiz = async () => {
    if (!session || !session.user) {
      alert("You must be logged in to save a quiz.");
      return;
    }
    setSaving(true);
    if (quiz && quiz.questions.length > 0) {
      try {
        quiz.userId = session?.user.id;
        const savedItemId = await QuizKnitApi.saveQuiz(quiz);
        if (savedItemId) {
          setSavedItemId(savedItemId);
          setIsModalOpen(true);
          setSaving(false);
        }
      } catch (e) {
        alert("Could not save quiz, please try again later");
        setSaving(false);
      }
    }
  };

  const saveflashcardSet = async () => {
    if (!session || !session.user) {
      alert("You must be logged in to save flashcards.");
      return;
    }
    setSaving(true);
    if (flashcardSet && flashcardSet.flashcards.length > 0) {
      try {
        flashcardSet.userId = session?.user.id;
        const savedflashcardSetId = await QuizKnitApi.saveFlashcards(
          flashcardSet
        );
        if (savedflashcardSetId) {
          setSavedItemId(savedflashcardSetId);
          setIsModalOpen(true);
          setSaving(false);
        }
      } catch (e) {
        alert("Could not save flashcards, please try again later");
        setSaving(false);
      }
    }
  };

  const FlashCardsCol = () => {
    return (
      <Col xs={24} md={12}>
        <Flex vertical gap="12px">
          {flashcardSet == undefined && (
            <Card
              title={"Your AI generated flashcards will appear here."}
            ></Card>
          )}
          {flashcardSet && (
            <Card title={flashcardSet?.flashcardSetTitle}>
              {flashcardSet.flashcards?.length > 0 &&
                flashcardSet.flashcards.map((flashcardItem, index) => (
                  <Flashcard flashcardItem={flashcardItem} key={index} />
                ))}
            </Card>
          )}
          {flashcardSet &&
            flashcardSet.flashcards !== undefined &&
            flashcardSet.flashcards.length > 0 && (
              <Flex justify="center">
                <Button
                  type="primary"
                  icon={<SaveOutlined />}
                  loading={saving || generating}
                  onClick={saveflashcardSet}
                  size="large"
                >
                  Save Flashcards
                </Button>
              </Flex>
            )}
          {generating && <Spin indicator={<LoadingOutlined spin />} />}
        </Flex>
      </Col>
    );
  };

  const GenerateButton = () => {
    return (
      <Button
        type="primary"
        onClick={isQuiz() ? onGenerateQuiz : onGenerateFlashcards}
        loading={generating}
        icon={<RocketOutlined />}
        disabled={value.length === 0}
        size="large"
        style={{
          color: value.length === 0 ? "gray" : "white",
          marginBottom: "12px",
        }}
      >
        Generate {isQuiz() ? "Questions" : "Flashcards"}
      </Button>
    );
  };

  return (
    <Flex
      style={{
        flex: "auto",
        flexDirection: "column",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <Flex vertical>
        <Flex justify="center">
          {isQuiz() ? (
            <Typography.Title level={3}>Create Quiz</Typography.Title>
          ) : (
            <Typography.Title level={3}>Create Flashcards</Typography.Title>
          )}
        </Flex>

        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Flex
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                backgroundColor: "white",
                overflow: "hidden",
                border: "1px solid #f0f0f0",
                borderRadius: "8px",
              }}
              vertical
              gap="12px"
            >
              <Content
                tourSteps={props.tourSteps}
                value={value}
                setValue={setValue}
                setNumOfQuestions={setNumOfQuestions}
                setDifficultlyLevel={setDifficultlyLevel}
                generating={generating}
              />
              <Flex justify="center" ref={props.tourSteps.generateQuizButton}>
                <GenerateButton />
              </Flex>
            </Flex>
          </Col>
          {isQuiz() && (
            <QuizCol
              quiz={quiz}
              setOpenTour={props.setOpenTour}
              generating={generating}
              saveQuiz={saveQuiz}
              savingQuiz={saving}
            />
          )}
          {isFlashcard() && <FlashCardsCol />}
        </Row>
      </Flex>
      <SavedItemModal
        itemId={savedItemId}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={`Your ${
          isQuiz() ? "quiz" : "flashcards"
        } has been saved to your library.`}
        savedItemType={isQuiz() ? "quiz" : "flashcards"}
      />
    </Flex>
  );
}
