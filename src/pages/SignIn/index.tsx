import Link from "next/link";
import Image from "next/image";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { useCallback, useRef, useState } from "react";
import { DefaultRootState, useDispatch, useSelector } from "react-redux";

import { useToast } from "../../hooks/toast";
import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { User } from "../../context/modules/authentication/types";
import { addUserRequest } from "../../context/modules/authentication/actions";

import {
  ImageWrapper,
  Container,
  Content,
  AnimationContainer,
  Footer,
  Error,
} from "../../styles/SignIn/styles";

interface IAuthenticationState extends DefaultRootState {
  authentication: {
    user: User;
    nonExistentUserCheck: boolean;
    alreadyLoggedCheck: boolean;
  };
}

interface Errors {
  email?: string;
  password?: string;
}

const SignIn = () => {
  const imgSrc = "/home-background.png";
  const { authentication: state } = useSelector(
    (state: IAuthenticationState) => state
  );

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const dispatch = useDispatch();

  const [errors, setErrors] = useState<Errors>({ email: null, password: null });

  const checkState = useCallback(() => {
    if (state.alreadyLoggedCheck) {
      addToast({
        type: "info",
        title: "Um usuário já está logado!",
        description: "Recarregue a página para deslogar",
      });
      return;
    }

    if (state.nonExistentUserCheck) {
      addToast({
        type: "error",
        title: "Falha no login, cheque as credenciais",
      });
      return;
    }

    addToast({
      type: "success",
      title: "Login realizado com sucesso!",
    });
    return;
  }, []);

  const handleSubmit = useCallback(
    async (data: User) => {
      try {
        setErrors({ email: null, password: null });
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(addUserRequest(data));

        setTimeout(() => {
          checkState();
        }, 500);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          setErrors(formRef.current?.getErrors());
          return;
        }
      }
    },
    [addToast, dispatch]
  );

  return (
    <Container>
      <ImageWrapper>
        <Image src={imgSrc} layout="fill" quality={100} />
      </ImageWrapper>
      <AnimationContainer>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <h1>
              Olá, seja
              <br />
              bem-vindo!
            </h1>
            <p>Para acessar a plataforma, faça seu login.</p>

            <div>
              <label htmlFor="email">E-mail</label>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="user.name@gmail.com"
              />
              {errors.email && (
                <Error>{formRef.current?.getErrors().email}</Error>
              )}
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
              />
              {errors.password && (
                <Error>{formRef.current?.getErrors().password}</Error>
              )}
            </div>
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
