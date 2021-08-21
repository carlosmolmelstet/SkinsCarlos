import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Search from '../../components/Search';
import { Container, Wrapper, Main, Background, SideBar } from './styles';

import { useParams } from 'react-router-dom';
import api from '../../api';
import SkinWrapper from '../../images/skinActive.svg';

interface Champion {
  data: Object;
}

interface Placa {
  id: string;
  name: string
}

interface Skin {
  chromas: boolean;
  id: string;
  name: string;
  num: number;
}

const Placas: React.FC = () => {
  const params = useParams<Placa>();
  const [champion, setChampion] = useState<Champion>();

  useEffect(() => {
    api.get(`11.16.1/data/pt_BR/champion/${params.name}.json`).then(response => {
      setChampion(response.data.data);
    });
  }, [params.name]);

  let backgroundImg = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_0.jpg`;
  
  if (!champion) {
    return (
      <h1>carregando.. </h1>
    );
  }

  function SelectSkin(num: number) {
    backgroundImg = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.name}_${num}.jpg`;
  }

  let skins: Array<Skin> = Object.values(champion)[0].skins;
  
  return (
    <Container>
      <Wrapper>
        <NavBar />
        <Main bg={backgroundImg}>
          <SideBar>
            <div className="header">
              <h2>SKINS DISPONÍVEIS</h2>
            </div>
            <div className="body">
              <div className="skinsList">
                {skins.map(skin => (
                  <div className="item" onClick={() => SelectSkin(skin.num)}>
                    <div className="thumbnail">
                      <img key={skin.id} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/" + params.name + "_" + skin.num + ".jpg"}></img>
                    </div>
                    <p>{skin.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </SideBar>
          <div className="overlay"></div>
          <h3>{params.name}</h3>
        </Main>
      </Wrapper>
      <Background bg={backgroundImg} />
    </Container>
  );
}

export default Placas;