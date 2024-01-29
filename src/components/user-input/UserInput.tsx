import { useState } from "react";
import { Input, Flex, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { GenerateButton } from "./styled";

const UserInput = () => {
  const [goals, setGoals] = useState([""]);

  const onChangeGoal =
    (index: number) =>
    ({ target: { value } }: { target: { value: string } }) =>
      setGoals((goals) =>
        goals.map((goal, goalIndex) => (index === goalIndex ? value : goal))
      );

  const onAddGoal = () => setGoals((goals) => [...goals, ""]);

  return (
    <Flex gap="small" style={{ flex: 0.8 }}>
      <Flex align="center" vertical gap="small" style={{ flexBasis: "100%" }}>
        {goals?.map((goal, index) => (
          <Input
            placeholder="Enter your goal"
            variant="filled"
            value={goal}
            onChange={onChangeGoal(index)}
            key={`input-${index}`}
            size="large"
          />
        ))}
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={onAddGoal}
          disabled={goals.some((goal) => !goal)}
        />
      </Flex>
      <GenerateButton type="primary" shape="round" size="large">
        Generate
      </GenerateButton>
    </Flex>
  );
};

export default UserInput;
