import { Row, Col, Card, Typography, Flex } from "antd";
import { ThunderboltOutlined, QuestionOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

export function Create() {
  const navigate = useNavigate();
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
        <Typography.Title level={3}>
          What would you like to create?
        </Typography.Title>
      </Flex>
      <Row justify="center" gutter={[12, 12]}>
        <Col xs={24} sm={12} md={8} lg={8}>
          <Card hoverable onClick={() => navigate("/create-quiz")}>
            <Flex vertical>
              <Flex justify="center" vertical align="center">
                <QuestionOutlined style={{ fontSize: "4rem" }} />
                <Title level={2}>Quiz</Title>
              </Flex>
              <Paragraph style={{ marginBottom: 0, textAlign: "center" }}>
                Generate multiple choice questions to test knowledge and
                understanding
              </Paragraph>
            </Flex>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8}>
          <Card hoverable onClick={() => navigate("/create-flashcards")}>
            <Flex vertical>
              <Flex justify="center" vertical align="center">
                <ThunderboltOutlined style={{ fontSize: "4rem" }} />
                <Title level={2}>Flashcards</Title>
              </Flex>
              <Paragraph style={{ marginBottom: 0, textAlign: "center" }}>
                Create question and answer pairs for active recall and
                memorization
              </Paragraph>
            </Flex>
          </Card>
        </Col>
      </Row>
    </Flex>
  );
}
