import { useEffect, useState } from "react";
import { Container, CategoriesBox, Content } from "./styles";

import api from '../../services/api'
import { useUser } from "../../hooks/useUser";

export function MainContent({children}) {
  const { token } = useUser()

  const [categories, setCategories] = useState([])

  async function loadCategories(){
    const response = await api.get(`/categories`)

    setCategories(response.data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadCategories();
  }, [token])

  return (
    <Container>
      <CategoriesBox>
        <h1>Categorias</h1>

        <div>
          {
            categories.map((category) =>{
              return(
                <a key={category.id} href={`/category/${category.id}`}>{category.name}</a>
              )
            })  
          }
        </div>
      </CategoriesBox>

      <Content>
        {children}
      </Content>
    </Container>
  );
}
      
      