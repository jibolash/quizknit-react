import { Flex, Modal, Typography } from "antd";
import { isMobile } from "react-device-detect";

interface ShareItemModalProps {
  itemId: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
  savedItemType: string;
}

export function ShareItemModal({
  itemId,
  isModalOpen,
  setIsModalOpen,
  savedItemType,
}: ShareItemModalProps) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Share"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Flex vertical align="center">
        <p>{`Share ${savedItemType} with the link below.`}</p>
        <Typography.Paragraph
          copyable
          style={{
            fontSize: isMobile ? "10px" : "14px",
            backgroundColor: "rgb(241, 245, 249)",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          {`${import.meta.env.VITE_CLIENT_URL}/${savedItemType}/${itemId}`}
        </Typography.Paragraph>
      </Flex>
    </Modal>
  );
}
