import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';

import Layout from '../../components/Layout';

import { CardTitle, CardText } from '../../components/Card/styles';
import Card from '../../components/Card';

import SaoPauloImg from '../../assets/sp.jpg';
import PalmeirasImg from '../../assets/palmeiras.png';

import {
  Container,
  MainTitle,
  SportsTitle,
  Empty,
  Categories,
  Main,
  Sidebar,
  News,
  SidebarItem,
} from './styles';

interface ICategories {
  id: string;
  name: string;
}

interface INews {
  id: string;
  user_id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  text: string;
  created_at?: string;
  updated_at?: string;
}

const Feed: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [news, setNews] = useState<INews[]>([]);

  const getCategories = useCallback(async () => {
    const response = await api.get('/categories');
    setCategories(response.data);
  }, []);

  const getNews = useCallback(async () => {
    const response = await api.get('/news');
    setNews(response.data);
  }, []);

  useEffect(() => {
    getCategories();
    getNews();
  }, [getCategories, getNews]);

  return (
    <Layout>
      <Container>
        <MainTitle>
          <strong>Destaques</strong> de hoje
        </MainTitle>

        <SportsTitle>
          <strong>Mundo</strong> do esporte
        </SportsTitle>

        <Empty />

        <Categories>
          <Card>
            <CardTitle>Categorias</CardTitle>

            {categories.map((category) => (
              <span key={category.id}>
                <CardText>{category.name}</CardText>
              </span>
            ))}
          </Card>
        </Categories>

        <Main>
          {news.map((singleNews) => (
            <News key={singleNews.id}>
              <img src={singleNews.image} alt={singleNews.title} />

              {categories.map((category) =>
                singleNews.categories.map((newsCategory) => {
                  return (
                    category.id === newsCategory ?? (
                      <span key={newsCategory}>{category.name}</span>
                    )
                  );
                }),
              )}

              <h2>{singleNews.title}</h2>
            </News>
          ))}
        </Main>

        <Sidebar>
          <Card>
            <SidebarItem>
              <CardTitle>
                <img src={SaoPauloImg} alt="Sao Paulo" />
                São Paulo
              </CardTitle>
              <span>2</span>
            </SidebarItem>

            <SidebarItem>
              <CardTitle>
                <img src={PalmeirasImg} alt="Palmeiras" />
                Palmeiras Clube
              </CardTitle>
              <span>2</span>
            </SidebarItem>

            <CardText>
              Tenha estatísticas para a disputa São Paulo vs. Palmeiras durante
              a Libertadores 2020. As semifinais acontecerão hoje às 20:00.
            </CardText>
          </Card>
        </Sidebar>
      </Container>
    </Layout>
  );
};

export default Feed;
