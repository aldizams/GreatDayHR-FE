import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Container flex="sm" className="header">
			<img src={Logo} alt="logo" />
			<div className="headerBtn">
				<Button
					variant="warning"
					className="btn-orange"
					as={Link}
					to="/ruangan"
				>
					PINJAM
				</Button>
				<Button variant="dark" className="btn-black" as={Link} to="/">
					JADWAL
				</Button>
			</div>
		</Container>
	);
};

export default Header;
