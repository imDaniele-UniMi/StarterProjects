import React from 'react'
import { 
    Container, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon, 
    Text,
    Form
} from './SigninElements'

const SignIn = () => {
  return (
    <>
    <Container>
    <Icon to="/">Project</Icon>
        <FormWrap>            
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign in</FormH1>
                    <p style={{color:"#fff", textAlign:'center'}}>This page is work in progress for now</p><br/>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required placeholder="Inserisci l'email"/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required placeholder="Inserisci la password"/>
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password?</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn