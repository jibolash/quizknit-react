import { Button, Flex, Input } from "antd";
import { Typography } from "antd";
import { QuizKnitUser } from "../App";
import { authClient } from "../lib/auth-client";

const { Text } = Typography;

export function Profile() {
  const { data: session } = authClient.useSession();
  const quizKnitUser = session?.user as QuizKnitUser;

  const deleteUser = async () => {
    if (
      confirm(
        "Are you sure you want to delete your account? All you saved quizzes will be permanently deleted!"
      )
    ) {
      await authClient.deleteUser({ callbackURL: "/" });
    }
  };

  return (
    <Flex
      style={{
        marginLeft: "20px",
        marginRight: "20px",
      }}
      justify="center"
      vertical
    >
      <Flex justify="center">
        <h3>Profile</h3>
      </Flex>
      <Flex
        justify="center"
        vertical
        gap={12}
        style={{
          width: "350px",
          border: "1px solid #f0f0f0",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Flex vertical gap={6} align="center">
          <img
            src={(quizKnitUser && quizKnitUser?.image) || ""}
            style={{ height: "175px", width: "175px" }}
          />
        </Flex>
        <Flex vertical gap={6}>
          <Text strong>Full Name</Text>
          <Input value={quizKnitUser.name} disabled />
        </Flex>
        <Flex vertical gap={6}>
          <Text strong>Email</Text>
          <Input value={quizKnitUser.email} disabled />
        </Flex>
        {/* <Flex vertical onClick={deleteUser}>
          <Button danger>Delete Account</Button>
        </Flex> */}
      </Flex>
    </Flex>
  );
}
