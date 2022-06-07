import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import { BarChart, LineChart, DoughnutChart } from './components';

const { TabPane } = Tabs;

const StyledContentWrapper = styled.div`
  margin: 0 20px;
  padding: 60px;
  background-color: var(--ghostWhite);
  box-shadow: rgb(43 52 69 / 10%) 0px 4px 16px;
  border-radius: 10px;
  flex-basis: 100%;
  max-width: 1200px;
`;

const SummaryContent = () => {
  return (
    <StyledContentWrapper>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Wydatki" key="1">
          <BarChart />
        </TabPane>
        <TabPane tab="Przychody" key="2">
          <DoughnutChart />
        </TabPane>
        <TabPane tab="Porównanie" key="3">
          <LineChart />
        </TabPane>
      </Tabs>
    </StyledContentWrapper>
  );
};

export default SummaryContent;
