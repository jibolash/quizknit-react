import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { QuizKnitApi } from "./QuizKnitApi";
import { useEffect, useState } from "react";
import { useAsync } from "react-async-hook";
import { Quiz } from "./create/CreateQuiz";
import { QuizCardList } from "./QuizCardList";

export function UserQuizzes() {
  const [userQuizzes, setUserQuizzes] = useState<Quiz[]>([]);
  const { userId } = useParams();
  const navigate = useNavigate();

  const { loading: loadingUserQuizzes, execute: fetchUserQuizzes } = useAsync(
    () => QuizKnitApi.getUserQuizzes(userId || ""),
    [],
    {
      onSuccess(result) {
        setUserQuizzes(result);
      },
    }
  );

  useEffect(() => {
    fetchUserQuizzes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingUserQuizzes) {
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
        <h3>Your Quizzes</h3>
        <Flex gap={8}>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/create-quiz")}
          >
            <PlusOutlined />
            Create Quiz
          </Button>
        </Flex>
      </Flex>
      <QuizCardList quizArr={userQuizzes} />
    </Flex>
  );
}
