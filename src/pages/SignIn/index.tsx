import Link from "next/link";
import Image from "next/image";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";

// import api from "../../services/api";

import Input from "../../components/Input";
import Button from "../../components/Button";

import {
  ImageWrapper,
  Container,
  Content,
  AnimationContainer,
  Footer,
} from "./styles";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const imgSrc = "/home-background.png";

  const formRef = useRef<FormHandles>(null);

  const user = useSelector((state) => state);
  console.log(user);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <ImageWrapper>
        <Image src={imgSrc} layout="fill" />
      </ImageWrapper>
      <AnimationContainer>
        <Content>
          <h1>
            Olá, seja
            <br />
            bem-vindo!
          </h1>

          <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <p>Para acessar a plataforma, faça seu login.</p>

            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="user.name@gmail.com"
            />
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="******"
            />

            <Button type="submit">Entrar</Button>
          </Form>

          <Footer>
            <p>Esqueceu seu login ou senha?</p>
            <p>
              Clique <Link href="/">aqui</Link>
            </p>
          </Footer>
        </Content>
      </AnimationContainer>
    </Container>
  );
};

export default SignIn;
