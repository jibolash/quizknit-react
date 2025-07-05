import { Card } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";

export function Test() {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => setFlipped((prev) => !prev);

  return (
    <Card style={{ width: 300, margin: "auto" }}>
      <div
        style={{
          position: "relative",
          height: 150,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {/* Question Side */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: flipped ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          When did World War II begin and end?
        </motion.div>

        {/* Answer Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: flipped ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          It began on September 1, 1939, and ended on September 2, 1945.
        </motion.div>
      </div>
    </Card>
  );
}
