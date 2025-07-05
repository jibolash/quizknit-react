import { Button, Card, Col, Flex, Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { QuestionAndOptions } from "../QuestionAndOptions";
import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import { Quiz } from "./CreateQuiz";

interface QuizColProps {
  quiz?: Quiz;
  setOpenTour: (value: React.SetStateAction<boolean>) => void;
  generating: boolean;
  saveQuiz: () => Promise<void>;
  savingQuiz: boolean;
}

export const QuizCol = ({
  quiz,
  setOpenTour,
  generating,
  saveQuiz,
  savingQuiz,
}: QuizColProps) => {
  return (
    <Col xs={24} md={12}>
      <Flex vertical gap="12px">
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
                    onClick={() => setOpenTour(true)}
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
              loading={savingQuiz || generating}
              size="large"
            >
              Save Quiz
            </Button>
          </Flex>
        )}
        {generating && <Spin indicator={<LoadingOutlined spin />} />}
      </Flex>
    </Col>
  );
};
