import React from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<>
			<Container flex="sm" className="jadwal-page">
				<div>
					<b className="title-page">Login</b>
				</div>
			</Container>
			<div className="bg-content-jadwal bg-content-login">
				<Container flex="sm" className="content-login">
					<Card style={{ width: '20rem' }}>
						<Card.Body>
							<img src={Logo} alt="Logo" className="logo" />
							<Form style={{ paddingBottom: '26px' }}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email"
										required
									/>
									<Form.Control.Feedback type="invalid">
										Email Address Kosong!
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Password"
										required
										minLength={8}
									/>
									<Form.Control.Feedback type="invalid">
										Password Kosong!
									</Form.Control.Feedback>
								</Form.Group>

								<Button
									variant="warning"
									type="submit"
									className="btn-orange"
									style={{ width: '18rem' }}
									as={Link}
									to="/admin"
								>
									Login
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Container>
			</div>
		</>
	);
};

export default LoginPage;
