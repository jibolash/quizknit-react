import {
  RobotOutlined,
  SaveOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Row, Col, Typography, Button, Space, Card, Flex, Tag } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <RobotOutlined style={{ fontSize: "2rem" }} />,
    title: "AI-Powered Generation",
    description:
      "QuizKnit analyzes your content and generates relevant questions automatically.",
  },
  {
    icon: <ThunderboltOutlined style={{ fontSize: "2rem" }} />,
    title: "Instant Results",
    description:
      "Get your personalized quiz in seconds. No waiting, no manual work - just instant learning.",
  },
  {
    icon: <SaveOutlined style={{ fontSize: "2rem" }} />,
    title: "Save & Share Quizzes",
    description:
      "Keep your quizzes for later or share them with students, peers, or friends with a shareable link",
  },
];

const steps = [
  {
    number: 1,
    title: "Paste Your Content",
    description:
      "Paste in any text from any article, lesson, or document. No formatting needed.",
  },
  {
    number: 2,
    title: "AI Generates Your Quiz",
    description:
      "QuizKnit instantly creates smart, multiple-choice questions based on your input.",
  },
  {
    number: 3,
    title: " Take, Save or Share",
    description:
      "Take the quiz right away, save it for later, or share it with students or friends.",
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Flex vertical>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "70vh", backgroundColor: "white" }}
      >
        <Col xs={24} sm={20} md={16} lg={12} style={{ textAlign: "center" }}>
          <Tag color="magenta">Powered by AI</Tag>
          <Title>Turn Any Text Into A Quiz in Seconds</Title>
          <Paragraph style={{ fontSize: "1.2rem", color: "rgba(0,0,0,0.65)" }}>
            Transform your study materials, articles, and documents into
            engaging quizzes. Take the quiz right away, save it for later, or
            share it with students or friends.
          </Paragraph>
          <Space size="middle" wrap>
            <Button
              type="primary"
              size="large"
              onClick={() => navigate("/create")}
            >
              Get Started
            </Button>
          </Space>
          <Flex justify="center" style={{ marginTop: "20px" }}>
            <Typography.Text>
              Just looking around?{" "}
              <Link to={"/explore"} style={{ color: "#18181B" }}>
                <strong>Explore</strong>
              </Link>{" "}
              our curated quizzes
            </Typography.Text>
          </Flex>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{
          padding: "4rem 1rem",
          backgroundColor: "#FAFAFA",
        }}
      >
        <Col xs={24} sm={22} md={20}>
          <Title level={2} style={{ textAlign: "center" }}>
            Powerful Features
          </Title>
          <Paragraph
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: "rgba(0,0,0,0.65)",
              marginBottom: "2rem",
            }}
          >
            Everything you need to create, take and share quizzes powered by
            artificial intelligence.
          </Paragraph>

          <Row gutter={[24, 24]}>
            {features.map((f) => (
              <Col key={f.title} xs={24} sm={12} md={8}>
                <Card hoverable bordered={false}>
                  <Space direction="vertical" size="small">
                    {f.icon}
                    <Title level={4}>{f.title}</Title>
                    <Paragraph style={{ marginBottom: 0 }}>
                      {f.description}
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Row
          justify="center"
          style={{ padding: "4rem 1rem 2rem", backgroundColor: "white" }}
        >
          <Col xs={24} sm={20} md={16} style={{ textAlign: "center" }}>
            <Title level={2}>How It Works</Title>
            <Paragraph
              style={{ color: "rgba(0,0,0,0.65)", marginBottom: "2rem" }}
            >
              Create your first quiz in three simple steps.
            </Paragraph>
          </Col>
        </Row>
        <Row
          justify="space-around"
          style={{ padding: "0 1rem 0 1rem", backgroundColor: "white" }}
        >
          {steps.map((step) => (
            <Col
              key={step.number}
              xs={24}
              sm={8}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "#111",
                  color: "#fff",
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                {step.number}
              </div>
              <Title level={4}>{step.title}</Title>
              <Paragraph style={{ color: "rgba(0,0,0,0.65)" }}>
                {step.description}
              </Paragraph>
            </Col>
          ))}
        </Row>
      </Row>
      <Row
        justify="center"
        align="middle"
        style={{ padding: "4rem 1rem", backgroundColor: "#FAFAFA" }}
      >
        <Col xs={24} sm={20} md={16} style={{ textAlign: "center" }}>
          <Title level={2}>Ready to Transform Your Teaching & Learning?</Title>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/create")}
          >
            Start Creating Quizzes
          </Button>
          <Flex justify="center" style={{ margin: "20px" }}>
            <Typography.Text>
              Just looking around?{" "}
              <Link to={"/explore"} style={{ color: "#18181B" }}>
                <strong>Explore</strong>
              </Link>{" "}
              our curated quizzes
            </Typography.Text>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
}
