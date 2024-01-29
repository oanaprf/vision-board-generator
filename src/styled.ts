import styled from "styled-components";
import { Flex as AntdFlex } from "antd";

export const AppContainer = styled(AntdFlex)`
  height: 100vh;
  width: 100vw;
  background-color: #f5f8fe;
  padding: 100px 200px;
  box-sizing: border-box;
`;

export const Flex = styled(AntdFlex)`
  width: 50%;
`;
