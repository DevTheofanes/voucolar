import { ChoiceYourPhone, Box } from './styles';
import { PersonalizeLayout as Container } from './_layout/Layout';
// import { ProgressBarHeader } from './_layout/ProgressBar';

export const Personalize = () => {
  return (
    <Container buttonContent="Seguinte" to="/personalize/background">
      {/* <ProgressBarHeader /> */}

      <Box>
        <ChoiceYourPhone>
          <h1>ESCOLHA O SEU CELULAR: </h1>

          <div>
            <select onChange={e => {}}>
              <option value="0">Apple</option>
            </select>

            <select onChange={e => {}}>
              <option value="0">Asus</option>
            </select>

            <select onChange={e => {}}>
              <option value="0">LG</option>
            </select>

            <select onChange={e => {}}>
              <option value="0">Motorola</option>
            </select>

            <select onChange={e => {}}>
              <option value="0">Samsung</option>
            </select>

            <select onChange={e => {}}>
              <option value="0">Xiaomi</option>
            </select>

            <select onChange={e => {}}>
              <option value="0">Xperia</option>
            </select>

            <select onChange={e => {}}>
              <option value="0">Zenfone</option>
            </select>
          </div>
        </ChoiceYourPhone>

        <div>
          <img src="https://voucolar.com.br/wp-content/uploads/2019/11/Fundo-IPHONE-X-2.jpg" alt="Phone"/>
        </div>
      </Box>
    </Container>
  );
}

