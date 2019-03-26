import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;
const TopBarHeader = styled(Header)`
  background: black;
  position: fixed;
  width: 100%;
  height: 70px;
`;

export default TopBarHeader;
