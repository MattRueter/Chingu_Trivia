import React, {useState} from 'react';

import '../css/index.css';
import Nav from './Nav.js';
import Container from './Container.js';
import {users} from '../data/user.js';

export default function App() {
  const [user, setUser] = useState(users[1])
	const [correct, setCorrect] = useState(user.currentSession.correct);
	const [incorrect, setIncorrect] = useState(user.currentSession.incorrect);

  return (
    <div>
      <Nav user={user} correct={correct} incorrect={incorrect}  />
      <Container />
    </div>
  );
}