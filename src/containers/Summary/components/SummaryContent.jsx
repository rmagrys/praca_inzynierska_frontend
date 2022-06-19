import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import { BarChart, LineChart, DoughnutChart } from './components';
import { getAllUserExpenses, getAllUserIncomes } from '../../../api/payment';
import { parseJwt } from '../../../api/jwt';

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
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const token = localStorage.getItem('token');
  const { user } = parseJwt(token);

  useEffect(() => {
    getAllUserExpenses(user, new Date().getFullYear()).then((res) =>
      setExpenses(res.data)
    );
  }, [user]);

  useEffect(() => {
    getAllUserIncomes(user, new Date().getFullYear()).then((res) =>
      setIncomes(res.data)
    );
  }, [user]);
  return (
    <StyledContentWrapper>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Wydatki" key="1">
          <BarChart data={expenses} />
        </TabPane>
        <TabPane tab="Przychody" key="2">
          <BarChart data={incomes} />
        </TabPane>
        <TabPane tab="Porównanie" key="3">
          <LineChart incomes={incomes} expenses={expenses} />
        </TabPane>
      </Tabs>
    </StyledContentWrapper>
  );
};

export default SummaryContent;
