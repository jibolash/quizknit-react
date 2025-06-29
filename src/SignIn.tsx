import { GoogleOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { authClient } from "./lib/auth-client";
import { useNavigate } from "react-router-dom";
import React from "react";

export function SignIn() {
  const navigate = useNavigate();
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = React.useState(false);

  const googleSignIn = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: import.meta.env.VITE_CLIENT_URL,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
        },
        onError: () => {
          setLoading(false);
          alert("Could not login, Please try again later");
        },
      }
    );
  };

  if (session && session.user) {
    navigate("/");
  }

  return (
    <Flex
      style={{
        paddingLeft: "40px",
        paddingRight: "40px",
        marginTop: "12px",
      }}
      vertical
    >
      <Flex justify="center">
        <Typography.Title level={3}>Sign In</Typography.Title>
      </Flex>
      <Flex>
        <Button
          type="default"
          htmlType="submit"
          size="large"
          icon={loading ? <LoadingOutlined /> : <GoogleOutlined />}
          onClick={googleSignIn}
          disabled={loading}
          style={{ width: "350px" }}
        >
          Sign in with Google
        </Button>
      </Flex>
    </Flex>
  );
}
