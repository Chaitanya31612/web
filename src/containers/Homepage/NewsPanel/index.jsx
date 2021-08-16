import styles from './newspanel.module.css';
import { getDeviceType } from 'helpers';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { appColors } from 'styles/colors';
import data from './dummy';
import NewsItem from './NewsItem';

const NewsPanel = () => {
  return (
    <Container>
      <Head>News</Head>
      <div className={styles.newsContainer}>
        {data.map((item) => (
          <NewsItem
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            month={item.month}
          />
        ))}
      </div>
    </Container>
  );
};

export default NewsPanel;

const Container = styled.div`
  padding: 10vh 10vw;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Head = styled.h1`
  color: ${appColors.homeText};
  font-size: ${getDeviceType() === 'mobile' ? '28px' : '32px'};
  font-weight: 600;
  margin-bottom: ${getDeviceType() === 'mobile' ? '50px' : '70px'};
  text-decoration: underline;
  text-decoration-color: ${appColors.homeDecor};
  text-underline-offset: 10px;
  text-align: center;
  padding: 0 0;
`;
