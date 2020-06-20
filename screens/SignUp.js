import React, { Component } from 'react';
import { Card,Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
export default class SignUp extends Component {
  render() {
    return (
      <Container>
       
        <Content>
            <Card style={{margin:10,padding:20}}>
          <Form>
              
                  {/* <Text style={{fontSize:30,paddingVertical:20}} > Log In</Text> */}
             
            <Item stackedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            
                <Button style={{justifyContent:'center',marginVertical:20}}>
                <Text>Sign Up</Text>
                </Button>
          
          </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}