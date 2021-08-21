import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import api from '../../api';
import { SelectPicker } from 'rsuite';
import { Container } from './styles';
import './rsuite-dark.css';

interface Param {
  name: string
}

const Search: React.FC = () => {
  const param = useParams<Param>();
  const [champions, setChampions] = useState<object>({});
  const history = useHistory();

  useEffect(() => {
    api.get(`11.16.1/data/pt_BR/champion.json`).then(response => {
      setChampions(response.data.data);
    });
  }, []);

  function ValidateChampion(name : string) {
    if(name) {
      history.push(`/champion/${name}`);
    } else {
      history.push(`/`);
    }
  }

  const data : Array<object> = [];
  Object.values(champions).map(champion => (
    data.push(
      {
        "label": champion["name"],
        "value": champion["id"],
        "role": champion["name"]
      }
    )
  ));

  return (
    <Container >
      <SelectPicker data={data} style={{ width: 224 }} name="name"  defaultValue={param.name} onChange={(value:string, event) => ValidateChampion(value)} />
    </Container>
  );
}

export default Search;