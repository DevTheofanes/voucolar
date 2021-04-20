import { useEffect, useState } from 'react';

import { PersonalizeContent, Preview, ChoiceOptions, Option } from '../_layout/styles';
import { PersonalizeLayout as Container } from '../_layout/Layout';
import { ProgressBarHeader } from '../_layout/ProgressBar';

import api from '../../../services/api'

export const PersonalizeStickers = () => {
  const [stickers, setStickers] = useState([])

  async function loadStickers(){
    const response = await api.get(`/assets/figure`)

    setStickers(response.data)
  }

  useEffect(() => {
    api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadStickers();
  }, [])

  return (
    <Container buttonContent="Seguinte" to="/personalize/text">
      <ProgressBarHeader active="stickers"/>

      <PersonalizeContent>
        <Preview>
          <img src="https://voucolar.com.br/wp-content/uploads/2019/11/Fundo-IPHONE-X-2.jpg" alt="Phone"/>
        </Preview>

        <ChoiceOptions>
          <h2>STICKERS E PERSONALIZAÇÃO</h2>

          <div>           
            {
              stickers.map(sticker =>{
                return(
                  <Option key={sticker.id}>
                    <img className="stickers" src={`http://voucolar.bestapp.com.br:8002/files/${sticker.image}`} alt="Phone"/>
                  </Option>
                )
              })
            }
          </div>
        </ChoiceOptions>
      </PersonalizeContent>
    </Container>
  );
}

