import { Collapse, List, Typography } from "antd";

const { Panel } = Collapse;
const { Text } = Typography;

interface ItemTitleAndDescription {
  title: string;
  description: string;
}

interface ItemPanelProps {
  panelKey: string;
  title: string;
  items: ItemTitleAndDescription[];
}

export const ItemPanel = ({ panelKey, title, items }: ItemPanelProps) => {
  return (
    <Panel
      header={
        <span>
          <Typography.Text strong>{title}</Typography.Text>
        </span>
      }
      key={panelKey}
    >
      <List
        size="small"
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<Text strong>{item.title}</Text>}
              description={item.description}
            />
          </List.Item>
        )}
        style={{
          marginTop: "-15px",
        }}
        bordered={false}
      />
    </Panel>
  );
};
