import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import { QuizKnitApi } from "./QuizKnitApi";
import { useEffect, useState } from "react";
import { useAsync } from "react-async-hook";
import { Quiz } from "./CreateQuiz";
import { QuizCardList } from "./QuizCardList";

export function Explore() {
  const [allQuizzes, setAllQuizzes] = useState<Quiz[]>([]);

  const { loading: loadingQuizzes, execute: fetchAllQuizzes } = useAsync(
    () => QuizKnitApi.getAllQuizzes(),
    [],
    {
      onSuccess(result) {
        setAllQuizzes(result);
      },
    }
  );

  useEffect(() => {
    fetchAllQuizzes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingQuizzes) {
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
        <h3>Put your knowledge to the test with our curated quizzes.</h3>
      </Flex>
      <QuizCardList quizArr={allQuizzes} />
    </Flex>
  );
}
