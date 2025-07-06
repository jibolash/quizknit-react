import {
  RobotOutlined,
  SaveOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Row, Col, Typography, Button, Space, Card, Flex, Tag } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { authClient } from "./lib/auth-client";
import { QuizKnitUser } from "./App";
import { useEffect } from "react";

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <RobotOutlined style={{ fontSize: "2rem" }} />,
    title: "AI Powered Generation",
    description:
      "Paste your own text or pick an historical topic and generate questions or flashcards in seconds.",
  },
  {
    icon: <ThunderboltOutlined style={{ fontSize: "2rem" }} />,
    title: "Instant Results",
    description:
      "Get your personalized quiz or flashcards in seconds. No waiting, no manual work - just instant learning.",
  },
  {
    icon: <SaveOutlined style={{ fontSize: "2rem" }} />,
    title: "Save & Share",
    description:
      "Keep for later or share with with students, peers, or friends with a shareable link",
  },
];

const steps = [
  {
    number: 1,
    title: "Select category of interest or Paste Your Content",
    description:
      "Select from a curated list or paste in any text from any article, lesson, or document. No formatting needed.",
  },
  {
    number: 2,
    title: "AI Does the Work",
    description:
      "QuizKnit instantly creates multiple-choice questions or flashcards based on your input.",
  },
  {
    number: 3,
    title: "Save or Share",
    description: "Save it for later, or share it with students or friends.",
  },
];

export default function Landing() {
  const navigate = useNavigate();

  const { data: session } = authClient.useSession();
  const quizKnitUser = session?.user as QuizKnitUser;

  console.log("quizkituser", quizKnitUser);
  useEffect(() => {
    if (quizKnitUser) {
      navigate("/create");
    }
  });

  return (
    <Flex vertical>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "70vh", backgroundColor: "white" }}
      >
        <Col xs={24} sm={20} md={16} lg={12} style={{ textAlign: "center" }}>
          <Tag color="magenta">Powered by AI</Tag>
          <Title>Create Quizzes and Flashcards in Seconds</Title>
          <Paragraph style={{ fontSize: "1.2rem", color: "rgba(0,0,0,0.65)" }}>
            Choose from broad historical topics or paste your own study
            materials, articles, and documents. Instantly create, save and share
            quizzes and flashcards
          </Paragraph>
          <Space size="middle" wrap>
            <Button
              type="primary"
              size="large"
              onClick={() => navigate("/create")}
            >
              Get Started!
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
            Create, study, and share quizzes and flashcards, powered by AI.
          </Paragraph>

          <Row gutter={[24, 24]}>
            {features.map((f) => (
              <Col key={f.title} xs={24} sm={12} md={8}>
                <Card hoverable variant="borderless">
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
            Start Now!
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
