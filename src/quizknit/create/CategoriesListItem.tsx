import { Flex, Typography } from "antd";
import { useState } from "react";

interface CategoriesListItemProps {
  item: {
    title: string;
    description: string;
  };
  isSelected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  parentCategory: string;
}
export const CategoriesListItem = ({
  index,
  item,
  isSelected,
  setSelected,
  setValue,
  parentCategory,
}: CategoriesListItemProps) => {
  const [isHovered, setHovered] = useState(false);

  const getBackgroundColor = () => {
    if (isSelected) {
      return "black";
    }
    if (isHovered) {
      return "#F4F4F5";
    }
    return "white";
  };

  const getTextColor = () => {
    if (isSelected) {
      return "white";
    }
    return "black";
  };

  const onSubCategoryClicked = () => {
    setSelected(index);
    setValue(`${parentCategory}, ${item.title}, ${item.description}`);
  };

  const categoryItemStyle = {
    backgroundColor: getBackgroundColor(),
    transition: "background-color 0.3s",
    padding: "1rem",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <Flex
      vertical
      style={categoryItemStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSubCategoryClicked}
    >
      <Typography.Text strong style={{ color: getTextColor() }}>
        {item.title}
      </Typography.Text>
      <Typography.Text style={{ color: getTextColor() }}>
        {item.description}
      </Typography.Text>
    </Flex>
  );
};
