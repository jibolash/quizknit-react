import { Col, Row } from "antd";
import { Quiz } from "./create/CreateQuiz";
import { QuizCard } from "./QuizCard";

interface QuizCardListProps {
  quizArr: Quiz[];
}

export function QuizCardList({ quizArr }: QuizCardListProps) {
  return (
    <Row gutter={[12, 12]}>
      {quizArr.map((quiz: Quiz) => (
        <Col key={quiz._id} xs={24} sm={12} md={8} lg={6}>
          <QuizCard quiz={quiz} />
        </Col>
      ))}
    </Row>
  );
}
