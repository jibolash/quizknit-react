import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import { useParams } from "react-router-dom";
import { QuizKnitApi } from "./QuizKnitApi";
import { useEffect, useState } from "react";
import { useAsync } from "react-async-hook";
import { Quiz } from "./CreateQuiz";
import { QuizCardList } from "./QuizCardList";

export function UserQuizzes() {
  const [userQuizzes, setUserQuizzes] = useState<Quiz[]>([]);
  const { userId } = useParams();

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
      <Flex justify="center">
        <h3>Your Library</h3>
      </Flex>
      <QuizCardList quizArr={userQuizzes} />
    </Flex>
  );
}
