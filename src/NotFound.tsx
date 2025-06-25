import { Flex } from "antd";

export function NotFound() {
  return (
    <Flex vertical justify="center" align="center" gap={20}>
      <Flex>404 | This page does not exist.</Flex>
    </Flex>
  );
}
