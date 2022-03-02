import React, { useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import {  Form, Button } from 'semantic-ui-react'


export default ({ getSession, authenticate}) => {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");



  const onSubmit = event => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email", Value: newEmail })
        ];

        user.updateAttributes(attributes, (err, results) => {
          if (err) console.error(err);
          console.log(results);
        });
      });
    });
  };

  return (
    <div>
      <Form onSubmit={onSubmit} style={{ marginTop:'3em', padding: '0'}}>
      <Form.Field>
        <input
          placeholder='New Email'
          value={newEmail}
          onChange={event => setNewEmail(event.target.value)}
          style={{boxShadow: '5px 5px 5px grey'}}
        />
        </Form.Field>
<Form.Field>
        <input
        placeholder='Confirm New Email'
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={{boxShadow: '5px 5px 5px grey'}}
        />
</Form.Field>
        <Button type="submit" style={{boxShadow: '5px 5px 5px grey'}}>Change Email</Button>
      </Form>
    </div>
  );
};