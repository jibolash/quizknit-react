import { Flex, Select, Tabs, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { CategoriesList } from "./CategoriesList";
import { categories, historicalFigures } from "./historyItems";
import { useLocation } from "react-router-dom";

interface ContentProps {
  tourSteps: {
    enterTextTab: React.MutableRefObject<null>;
    selectCategoryTab: React.MutableRefObject<null>;
  };
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setNumOfQuestions: React.Dispatch<React.SetStateAction<string>>;
  setDifficultlyLevel: React.Dispatch<React.SetStateAction<string>>;
  generating: boolean;
}

export function Content({
  tourSteps,
  value,
  generating,
  setValue,
  setNumOfQuestions,
  setDifficultlyLevel,
}: ContentProps) {
  const location = useLocation();

  const isQuiz = () => {
    return location.pathname === "/create-quiz";
  };

  return (
    <>
      <Tabs
        defaultActiveKey="2"
        size="large"
        items={[
          {
            key: "1",
            label: (
              <span ref={tourSteps && tourSteps.enterTextTab}>Paste Text</span>
            ),
            children: (
              <Flex style={{ width: "100%" }} vertical gap={8}>
                {isQuiz() && (
                  <Typography.Text strong>
                    Paste text you want to generate a quiz from and click
                    Generate Quiz below
                  </Typography.Text>
                )}
                {location.pathname === "/create-flashcards" && (
                  <Typography.Text strong>
                    Paste text you want to generate flashcards from and click
                    Generate below
                  </Typography.Text>
                )}
                <TextArea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={`Type or paste text you want to generate ${
                    isQuiz() ? "a quiz" : "flashcards"
                  } from here`}
                  autoSize={{ maxRows: 20, minRows: 20 }}
                  disabled={generating}
                  id="inputTextArea"
                />
              </Flex>
            ),
          },
          {
            key: "2",
            label: (
              <span ref={tourSteps && tourSteps.selectCategoryTab}>
                History Topics
              </span>
            ),
            children: (
              <Flex vertical gap={8}>
                <Typography.Text strong>
                  Select an historical topic and click Generate Quiz below
                </Typography.Text>
                <CategoriesList setValue={setValue} categories={categories} />
              </Flex>
            ),
          },
          {
            key: "3",
            label: <span>Historical Figures</span>,
            children: (
              <Flex vertical gap={8}>
                <Typography.Text strong>
                  Select an historical figure and click Generate Quiz below
                </Typography.Text>
                <CategoriesList
                  setValue={setValue}
                  categories={historicalFigures}
                />
              </Flex>
            ),
          },
        ]}
        onChange={() => setValue("")}
      ></Tabs>
      <Flex justify="center" gap={12}>
        <Flex vertical gap={8}>
          <strong>Number of {isQuiz() ? "questions" : "flashcards"}</strong>
          <Select
            defaultValue="5"
            style={{ width: "150px" }}
            onChange={(value) => setNumOfQuestions(value)}
            options={[
              {
                value: "5",
                label: `5 ${isQuiz() ? "questions" : "flashcards"}`,
              },
              {
                value: "10",
                label: `5 ${isQuiz() ? "questions" : "flashcards"}`,
              },
              {
                value: "15",
                label: `5 ${isQuiz() ? "questions" : "flashcards"}`,
              },
              {
                value: "20",
                label: `5 ${isQuiz() ? "questions" : "flashcards"}`,
              },
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
    </>
  );
}
