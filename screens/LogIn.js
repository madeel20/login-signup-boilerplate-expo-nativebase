import React, { Component } from "react";
import {
  Card,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from "native-base";
export default class LogIn extends Component {
  render() {
    return (
    //   <Container style={{ marginTop: "25%", padding: 20 }}>
    <Container>
        <Content>
          <Card style={{ padding: 20 }}>
            <Form>
              {/* <Text style={{ fontSize: 30, paddingVertical: 20 }}> Log In</Text> */}

              <Item stackedLabel>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>

              <Button style={{ justifyContent: "center", marginTop: 20 }}>
                <Text>Log In</Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate('Sign Up')} transparent style={{ justifyContent: "center",marginTop:5 }}>
                <Text>Sign Up</Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate('Employee Login')} transparent>
                <Text style={{color:'red'}}>Are you an Employee ?</Text>
              </Button>
              
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}
