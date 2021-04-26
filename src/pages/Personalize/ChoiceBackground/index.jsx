import { useEffect, useState } from 'react';

import { PersonalizeContent, Preview, ChoiceOptions, Option } from '../_layout/styles';
import { PersonalizeLayout as Container } from '../_layout/Layout';
import { ProgressBarHeader } from '../_layout/ProgressBar';

import api from '../../../services/api'

import {useUser} from "../../../hooks/useUser"

export const PersonalizeBackground = () => {
  const { host, token } = useUser()
  const [backgrounds, setBackgrounds] = useState([])

  async function loadBackgrounds(){
    const response = await api.get(`/assets`)

    setBackgrounds(response.data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadBackgrounds();
  }, [token])

  return (
    <Container buttonContent="Seguinte" to="/personalize/image">
      <ProgressBarHeader active="background"/>

      <PersonalizeContent>
        <Preview>
          <img src="https://voucolar.com.br/wp-content/uploads/2019/11/Fundo-IPHONE-X-2.jpg" alt="Phone"/>
        </Preview>

        <ChoiceOptions>
          <h2>Fundos</h2>

          <div>
            {
              backgrounds.map( background =>{
                return(
                  <Option key={background.id}>
                    <img src={`${host}/files/${background.image}`} alt="Phone"/>
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

