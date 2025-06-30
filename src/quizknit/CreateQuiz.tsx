import {
  Button,
  Card,
  Col,
  Flex,
  Row,
  Select,
  Spin,
  Tabs,
  Typography,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { QuizKnitApi } from "./QuizKnitApi";
import { sampleInput } from "./sampleData";
import { RocketOutlined, SaveOutlined } from "@ant-design/icons";
import { QuestionAndOptions } from "./QuestionAndOptions";
import { LoadingOutlined } from "@ant-design/icons";
import { SavedQuizModal } from "./SavedQuizModal";
import { Link } from "react-router-dom";
import { authClient } from "../lib/auth-client";
import { isMobile } from "react-device-detect";
import { CategoriesList } from "./CategoriesList";

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
  const [value, setValue] = useState(
    sampleInput[Math.floor(Math.random() * sampleInput.length)].text
  );
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState<Quiz>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savingQuiz, setSavingQuiz] = useState(false);
  const [savedQuizId, setSavedQuizId] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState("5");
  const [difficultlyLevel, setDifficultlyLevel] = useState("easy");

  const { data: session } = authClient.useSession();

  const onGenerateQuiz = async () => {
    setLoading(true);
    if (!value.trim()) {
      setLoading(false);
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
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      alert("Could not generate quiz, please try again")!;
    }
  };

  const saveQuiz = async () => {
    if (!session || !session.user) {
      alert("You must be logged in to save a quiz.");
      return;
    }
    setSavingQuiz(true);
    if (quiz && quiz.questions.length > 0) {
      try {
        quiz.userId = session?.user.id;
        const savedQuizId = await QuizKnitApi.saveQuiz(quiz);
        if (savedQuizId) {
          setSavedQuizId(savedQuizId);
          setIsModalOpen(true);
          setSavingQuiz(false);
        }
      } catch (e) {
        alert("Could not save quiz, please try again later");
        setSavingQuiz(false);
      }
    }
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
          <Typography.Title level={3}>Create New Quiz</Typography.Title>
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
              <Tabs
                defaultActiveKey="2"
                size="large"
                items={[
                  {
                    key: "1",
                    label: (
                      <span
                        ref={props.tourSteps && props.tourSteps.enterTextTab}
                      >
                        Paste Text
                      </span>
                    ),
                    children: (
                      <Flex style={{ width: "100%" }} vertical gap={8}>
                        <Typography.Text strong>
                          Paste the text content you want to generate a quiz
                          from
                        </Typography.Text>
                        <TextArea
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder="Type or paste text you want to generate a quiz from here"
                          autoSize={{ maxRows: 20, minRows: 20 }}
                          disabled={loading}
                          id="inputTextArea"
                        />
                      </Flex>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <span
                        ref={
                          props.tourSteps && props.tourSteps.selectCategoryTab
                        }
                      >
                        History Topics
                      </span>
                    ),
                    children: (
                      <Flex vertical gap={8}>
                        <Typography.Text strong>
                          Select Historical Topic
                        </Typography.Text>
                        <CategoriesList setValue={setValue} />
                      </Flex>
                    ),
                  },
                ]}
                // onChange={() => setValue("")}
              ></Tabs>
              <Flex justify="center" gap={12}>
                <Flex vertical gap={8}>
                  <strong>Number of questions</strong>
                  <Select
                    defaultValue="5"
                    style={{ width: "150px" }}
                    onChange={(value) => setNumOfQuestions(value)}
                    options={[
                      { value: "5", label: "5 questions" },
                      { value: "10", label: "10 questions" },
                      { value: "15", label: "15 questions" },
                      { value: "20", label: "20 questions" },
                    ]}
                  />
                </Flex>
                <Flex vertical gap={8}>
                  <strong>Difficulty level</strong>
                  <Select
                    defaultValue="easy"
                    style={{ width: "150px" }}
                    onChange={(value) => setDifficultlyLevel(value)}
                    options={[
                      { value: "easy", label: "Easy" },
                      { value: "difficult", label: "Difficult" },
                    ]}
                  />
                </Flex>
              </Flex>
              <Flex justify="center" ref={props.tourSteps.generateQuizButton}>
                <Button
                  type="primary"
                  onClick={onGenerateQuiz}
                  loading={loading}
                  icon={<RocketOutlined />}
                  disabled={value.length === 0}
                  size="large"
                  style={{
                    color: value.length === 0 ? "gray" : "white",
                    marginBottom: "12px",
                  }}
                >
                  Generate Quiz
                </Button>
              </Flex>
            </Flex>
          </Col>
          <Col xs={24} md={12}>
            <>
              <Flex ref={props.tourSteps.viewQuiz} vertical gap="12px">
                {quiz == undefined && (
                  <Card title={"Your AI generated quiz will appear here."}>
                    <Flex>
                      <Typography.Text>
                        Just looking around?{" "}
                        <Link to={"/explore"} style={{ color: "#18181B" }}>
                          <strong>Explore</strong>
                        </Link>{" "}
                        our curated quizzes
                      </Typography.Text>
                    </Flex>
                    {isMobile ? null : (
                      <Flex>
                        <Typography.Text>
                          Click{" "}
                          <strong
                            onClick={() => props.setOpenTour(true)}
                            style={{ cursor: "pointer", color: "#18181B" }}
                          >
                            here
                          </strong>{" "}
                          for a quick app tour.
                        </Typography.Text>
                      </Flex>
                    )}
                  </Card>
                )}
                {quiz && (
                  <Card title={quiz?.quizTitle}>
                    {quiz.questions.length > 0 &&
                      quiz.questions.map((questionItem, index) => (
                        <QuestionAndOptions
                          questionItem={questionItem}
                          index={index}
                          key={index}
                        />
                      ))}
                  </Card>
                )}
                {quiz && quiz.questions.length > 0 && (
                  <Flex justify="center">
                    <Button
                      type="primary"
                      icon={<SaveOutlined />}
                      onClick={saveQuiz}
                      loading={savingQuiz || loading}
                    >
                      Save Quiz
                    </Button>
                  </Flex>
                )}
                {loading && <Spin indicator={<LoadingOutlined spin />} />}
              </Flex>
            </>
          </Col>
        </Row>
      </Flex>
      <SavedQuizModal
        quizId={savedQuizId}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Flex>
  );
}
