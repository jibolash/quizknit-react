import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { Collapse, List, Typography } from "antd";
import { Category } from "./historyItems";
import { CategoriesListItem } from "./CategoriesListItem";
import { useState } from "react";

interface CategoriesListProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  categories: Category[];
}

export const CategoriesList = ({
  setValue,
  categories,
}: CategoriesListProps) => {
  const [selected, setSelected] = useState(-1);

  function createItem(c: Category, index: number) {
    return {
      key: index,
      label: (
        <span>
          <Typography.Text strong>{c.label}</Typography.Text>
        </span>
      ),
      children: (
        <List
          dataSource={c.children}
          renderItem={(item, index) => (
            <CategoriesListItem
              parentCategory={c.label}
              index={index}
              item={item}
              setSelected={setSelected}
              isSelected={index === selected}
              setValue={setValue}
            />
          )}
        />
      ),
    };
  }

  return (
    <Collapse
      expandIconPosition="end"
      accordion
      expandIcon={({ isActive }) =>
        isActive ? <DownOutlined /> : <RightOutlined />
      }
      defaultActiveKey={["medieval"]}
      items={categories.map((c, index) => createItem(c, index))}
      style={{
        maxHeight: "455px",
        overflowY: "auto",
        scrollbarColor: "#1d1e1f #FAFAFA",
      }}
      onChange={() => setSelected(-1)}
    ></Collapse>
  );
};
