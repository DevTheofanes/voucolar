import { PersonalizeContent, Preview, ChoiceOptions } from '../_layout/styles';
import { PersonalizeLayout as Container } from '../_layout/Layout';
import { ProgressBarHeader } from '../_layout/ProgressBar';
import { ImFolderUpload } from "react-icons/im";


export const PersonalizeImage = () => {
  return (
    <Container buttonContent="Seguinte" to="/personalize/stickers">
      <ProgressBarHeader active="image"/>

      <PersonalizeContent>
        <Preview>
          <img src="https://voucolar.com.br/wp-content/uploads/2019/11/Fundo-IPHONE-X-2.jpg" alt="Phone"/>
        </Preview>

        <ChoiceOptions>
          <h2>Adicione sua foto</h2>

          <form>
            <div>
              <label htmlFor="arquivo">DO COMPUTADOR</label>
              <input type="file" name="arquivo" id="arquivo"/>
              <ImFolderUpload size={92} color="#707070" htmlFor="arquivo"/>
            </div>
          </form>
        </ChoiceOptions>
      </PersonalizeContent>
    </Container>
  );
}

