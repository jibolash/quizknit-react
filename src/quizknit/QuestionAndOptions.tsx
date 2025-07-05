import { Flex, Radio, Space, Typography } from "antd";
import { Question } from "./create/CreateQuiz";
import { useEffect, useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Option } from "./Option";

interface QuestionsProps {
  questionItem: Question;
  index: number;
}

const { Text } = Typography;

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
        padding: "12px",
        borderRadius: "8px",
        margin: "0px 0px 10px 0px",
        border: "1px solid #f0f0f0",
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
              <Option index={index} text={option.text} />
            ))}
          </Space>
        </Radio.Group>
        {correctAnswerSelected == false && (
          <Flex style={{ color: "red", justifyContent: " center" }} gap={6}>
            <Text strong style={{ color: "red" }}>
              <CloseCircleOutlined />
            </Text>
            <Text strong style={{ color: "red" }}>
              Wrong Answer, try again
            </Text>
          </Flex>
        )}
        {correctAnswerSelected && (
          <Flex style={{ color: "green", justifyContent: " center" }} gap={6}>
            <Text strong style={{ color: "green" }}>
              <CheckCircleOutlined />
            </Text>
            <Text strong style={{ color: "green" }}>
              Correct!
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
