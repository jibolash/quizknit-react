import { Flex, Modal, Typography } from "antd";
import { isMobile } from "react-device-detect";

interface SavedQuizModalProps {
  quizId: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
}

export function SavedQuizModal({
  quizId,
  isModalOpen,
  setIsModalOpen,
}: SavedQuizModalProps) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
      <Flex vertical align="center">
        <h3>Your quiz has been saved!</h3>
        <p>Share it with the link below.</p>
        <Typography.Paragraph
          copyable
          style={{
            fontSize: isMobile ? "12px" : "16px",
            backgroundColor: "rgb(241, 245, 249)",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          {`${import.meta.env.VITE_CLIENT_URL}/quiz/${quizId}`}
        </Typography.Paragraph>
      </Flex>
    </Modal>
  );
}
