import { Flex, Radio, Space } from "antd";
import { Question } from "./CreateQuiz";
import { useEffect, useState } from "react";

interface QuestionsProps {
  questionItem: Question;
  index: number;
}

export function QuestionAndOptions({ questionItem, index }: QuestionsProps) {
  const [answer, setAnswer] = useState(null);
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    if (answer == null) {
      return;
    }
    setCorrectAnswerSelected(questionItem.options[answer].isCorrectAnswer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  return (
    <Flex
      vertical
      gap="5px"
      key={index}
      style={{
        padding: "8px",
        borderRadius: "8px",
        backgroundColor: "#FAFAFA",
        margin: "0px 0px 10px 0px",
      }}
    >
      <Flex>
        <strong>
          {index + 1}. {questionItem.question}
        </strong>
      </Flex>
      <Flex vertical gap="12px">
        <Radio.Group
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          value={answer}
        >
          <Space direction="vertical">
            {questionItem.options.map((option, index) => (
              <Radio value={index} key={index}>
                {option.text}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
        {correctAnswerSelected == false && (
          <Flex style={{ color: "red" }}>Wrong answer, try again</Flex>
        )}
        {correctAnswerSelected && (
          <Flex style={{ color: "green" }}>Correct!</Flex>
        )}
      </Flex>
    </Flex>
  );
}
