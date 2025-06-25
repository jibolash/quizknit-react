import { Flex, Modal, Typography } from "antd";
import { isMobile } from "react-device-detect";

interface SharedQuizModalProps {
  quizId: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
}

export function ShareQuizModal({
  quizId,
  isModalOpen,
  setIsModalOpen,
}: SharedQuizModalProps) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Share Quiz"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Flex vertical align="center">
        <p>Share quiz with the link below.</p>
        <Typography.Paragraph
          copyable
          style={{
            fontSize: isMobile ? "12px" : "16px",
            borderRadius: "8px",
          }}
        >
          {`${import.meta.env.VITE_CLIENT_URL}/quiz/${quizId}`}
        </Typography.Paragraph>
      </Flex>
    </Modal>
  );
}
