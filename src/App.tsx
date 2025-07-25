import {
  ConfigProvider,
  Dropdown,
  Flex,
  MenuProps,
  Space,
  Tour,
  TourProps,
} from "antd";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { CreateQuiz } from "./quizknit/create/CreateQuiz";
import { ViewQuiz } from "./quizknit/ViewQuiz";
import { Explore } from "./quizknit/Explore";
import { useRef, useState } from "react";
import { NotFound } from "./NotFound";
import { SignIn } from "./SignIn";
import { authClient } from "./lib/auth-client";
import { UserQuizzes } from "./quizknit/UserQuizzes";
import { User } from "better-auth";
import Landing from "./Landing";
import { isMobile } from "react-device-detect";
import {
  LogoutOutlined,
  QuestionCircleOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Profile } from "./quizknit/Profile";
import { Test } from "./quizknit/Test";
import { Create } from "./quizknit/create/Create";
import { ViewFlashcardSet } from "./quizknit/ViewFlashcardSet";
import { UserFlashcardSets } from "./quizknit/UserFlashcardSets";

export interface QuizKnitUser extends User {
  hasPremium: boolean;
  priceId: string;
  customerId: string;
}

function App() {
  const { data: session } = authClient.useSession();
  const quizKnitUser = session?.user as QuizKnitUser;
  const navigate = useNavigate();

  const enterTextTab = useRef(null);
  const selectCategoryTab = useRef(null);
  const generateQuizButton = useRef(null);
  const viewQuiz = useRef(null);
  const exploreNavlink = useRef(null);
  const [openTour, setOpenTour] = useState<boolean>(false);

  const steps: TourProps["steps"] = [
    {
      title: "Enter text",
      description: "Enter text you want to generate a quiz from.",
      target: () => enterTextTab.current,
    },
    {
      title: "Select topic",
      description: "Select historical topic you want to generate a quiz from.",
      target: () => selectCategoryTab.current,
    },
    {
      title: "Generate Quiz",
      description: "Click here to generate a quiz.",
      target: () => generateQuizButton.current,
    },
    {
      title: "View Quiz",
      description:
        "Your AI generated quiz questions will appear here. You will be able to save the quiz afterwards.",
      target: () => viewQuiz.current,
    },
    {
      title: "Explore",
      description:
        "Test your knowledge by exploring quizzes created by other users.",
      target: () => exploreNavlink.current,
    },
  ];

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate("/login");
        },
      },
    });
  };

  const userProfileItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div style={{ cursor: "default" }}>
          <div>
            <strong>{quizKnitUser && quizKnitUser?.name}</strong>
          </div>
          <div>{quizKnitUser && quizKnitUser?.email}</div>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        >
          <Flex gap={6}>
            <UserOutlined />
            Profile
          </Flex>
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <span onClick={signOut} style={{ cursor: "pointer" }}>
          <Flex gap={6}>
            <LogoutOutlined />
            Sign Out
          </Flex>
        </span>
      ),
    },
  ];

  const libraryItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          onClick={() => navigate(`${quizKnitUser.id}/quizzes`)}
          style={{ cursor: "pointer" }}
        >
          <Flex gap={6}>
            <QuestionCircleOutlined />
            Quizzes
          </Flex>
        </span>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <span onClick={() => navigate(`${quizKnitUser.id}/flashcards`)}>
          <Flex gap={6}>
            <ThunderboltOutlined />
            Flashcards
          </Flex>
        </span>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#18181B",
        },
        components: {
          Button: {
            colorPrimary: "black",
            primaryColor: "white",
            defaultShadow: "0 0 0 rgba(0, 0, 0, 0.02)",
            primaryShadow: "0 0 0 rgba(0, 0, 0, 0.02)",
          },
          Input: {
            paddingBlock: 6,
          },
        },
      }}
    >
      <Flex vertical style={{ minHeight: "100vh" }}>
        <Flex vertical style={{ flexGrow: 1 }}>
          <Flex
            align="center"
            id="navbar"
            style={{
              height: "60px",
              borderBottom: "0.5px solid #e5e7eb",
            }}
            justify="space-between"
          >
            <NavLink
              to="/"
              style={{
                color: "black",
                fontSize: "20px",
                marginLeft: "12px",
              }}
            >
              <Flex align="end">
                <Space size={4}>
                  <Flex gap={8} justify="center" align="center">
                    <span className="logo">Q</span>
                    {isMobile ? (
                      ""
                    ) : (
                      <span style={{ fontWeight: 500, fontSize: "16px" }}>
                        Quiz Knit
                      </span>
                    )}
                  </Flex>
                </Space>
              </Flex>
            </NavLink>
            <Flex style={{ marginRight: "12px" }} gap={4}>
              <Flex gap={6}>
                <NavLink
                  to={"/create"}
                  className={({ isActive }) =>
                    isActive ? "activeNavLink" : "inactiveNavLink"
                  }
                  style={{ textDecoration: "none" }}
                >
                  Create
                </NavLink>
                <NavLink
                  to={"/explore"}
                  className={({ isActive }) =>
                    isActive ? "activeNavLink" : "inactiveNavLink"
                  }
                  style={{ textDecoration: "none" }}
                  ref={exploreNavlink}
                >
                  Explore
                </NavLink>
                {!session && (
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive ? "activeNavLink" : "inactiveNavLink"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </NavLink>
                )}
                {quizKnitUser && (
                  <Dropdown
                    menu={{ items: libraryItems }}
                    placement="bottomLeft"
                  >
                    <Space
                      style={{
                        color: "black",
                        padding: "20px 10px 20px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Library
                    </Space>
                  </Dropdown>
                )}
                {quizKnitUser && (
                  <Dropdown menu={{ items: userProfileItems }}>
                    <Space
                      style={{
                        color: "black",
                        padding: "20px 10px 20px 10px",
                        cursor: "pointer",
                      }}
                    >
                      <UserOutlined />
                    </Space>
                  </Dropdown>
                )}
              </Flex>
            </Flex>
          </Flex>
          <Flex id="main" justify="center">
            <Routes>
              <Route
                path="/create-quiz"
                element={
                  <CreateQuiz
                    tourSteps={{
                      enterTextTab,
                      selectCategoryTab,
                      generateQuizButton,
                      viewQuiz,
                      exploreNavlink,
                    }}
                    setOpenTour={setOpenTour}
                  />
                }
              />
              <Route
                path="/create-flashcards"
                element={
                  <CreateQuiz
                    tourSteps={{
                      enterTextTab,
                      selectCategoryTab,
                      generateQuizButton,
                      viewQuiz,
                      exploreNavlink,
                    }}
                    setOpenTour={setOpenTour}
                  />
                }
              />
              <Route path="/create" element={<Create />} />
              <Route path="/:userId/quizzes" element={<UserQuizzes />} />
              <Route
                path="/:userId/flashcards"
                element={<UserFlashcardSets />}
              />
              <Route path="/quiz/:id" element={<ViewQuiz />} />
              <Route path="/flashcards/:id" element={<ViewFlashcardSet />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/" element={<Landing />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </Flex>
        </Flex>
        <Flex
          justify="center"
          align="center"
          id="footer"
          style={{ height: "60px", margin: "0 12px 0 12px", fontSize: "14px" }}
        >
          <Flex gap={8} align="center" justify="center">
            <span className="logo-footer">Q</span>
            <span style={{ fontWeight: 500 }}>Quiz Knit</span>
          </Flex>
        </Flex>
      </Flex>
      <Tour open={openTour} onClose={() => setOpenTour(false)} steps={steps} />
    </ConfigProvider>
  );
}

export default App;
