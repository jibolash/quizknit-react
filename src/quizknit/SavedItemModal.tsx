import { Flex, Modal, Typography } from "antd";
import { isMobile } from "react-device-detect";

interface SavedItemModalProps {
  itemId: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
  title: string;
  savedItemType: string;
}

export function SavedItemModal({
  itemId,
  isModalOpen,
  setIsModalOpen,
  title,
  savedItemType,
}: SavedItemModalProps) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
      <Flex vertical align="center">
        <h3>{title}</h3>
        <p>You can also share it with the link below.</p>
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
