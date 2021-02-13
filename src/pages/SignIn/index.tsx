import Link from "next/link";
import Image from "next/image";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { useCallback, useEffect, useRef, useState } from "react";
import { DefaultRootState, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import api from "../../services/api";
import { useToast } from "../../hooks/toast";
import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { User } from "../../context/modules/authentication/types";
import { addUser } from "../../context/modules/authentication/actions";

import {
  ImageWrapper,
  Container,
  Content,
  AnimationContainer,
  Footer,
  Error,
} from "./styles";

interface UserData extends DefaultRootState {
  authentication: {
    user: User;
  };
}

interface Errors {
  email?: string;
  password?: string;
}

const SignIn = () => {
  const imgSrc = "/home-background.png";

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const dispatch = useDispatch();
  const { authentication: state } = useSelector((state: UserData) => state);

  const [errors, setErrors] = useState<Errors>({ email: null, password: null });
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    api.get("users").then((response) => {
      setUsers(response.data);
    });
  }, [state]);

  const handleSubmit = useCallback(
    async (data: User) => {
      try {
        setErrors({ email: null, password: null });
        formRef.current?.setErrors({});
        if (!state.user) {
          const schema = Yup.object().shape({
            email: Yup.string()
              .required("E-mail obrigatório")
              .email("Digite um e-mail válido"),
            password: Yup.string().required("Senha obrigatória"),
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          const foundUserByEmail = users.filter(
            (mappedUser) => mappedUser.email === data.email
          );

          if (foundUserByEmail.length !== 0) {
            const checkPassword = foundUserByEmail.filter(
              (mappedUser) => mappedUser.password === data.password
            );

            if (checkPassword.length !== 0) {
              dispatch(addUser(data));
              addToast({
                type: "success",
                title: "Login realizado com sucesso!",
                description: "Acesso com usuário já existente",
              });
              return state;
            }

            addToast({
              type: "error",
              title: "Falha no login, cheque as credenciais",
            });
            return state;
          }

          api.post("/users", data);
          dispatch(addUser(data));
          addToast({
            type: "success",
            title: "Login realizado com sucesso!",
            description: "Um novo usuário foi criado.",
          });
        } else {
          addToast({
            type: "info",
            title: "Um usuário já está logado!",
            description: "Recarregue a página para deslogar",
          });
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          setErrors(formRef.current?.getErrors());
          // addToast({
          //   type: "error",
          //   title: "Erro no login",
          //   description:
          //     "Ocorreu um erro ao fazer login, cheque as credenciais",
          // });
          return;
        }
      }
    },
    [dispatch, users, addToast]
  );

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
