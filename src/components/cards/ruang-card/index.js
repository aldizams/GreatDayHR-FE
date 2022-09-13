import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const RuangCard = () => {
	return (
		<div className="ruang-card">
			<div>
				<b className="card-title">Ruang A</b>
			</div>
			<img
				src="https://images.unsplash.com/photo-1503423571797-2d2bb372094a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
				alt="foto ruangan"
			/>
			<Button
				variant="dark"
				className="btn-black"
				as={Link}
				to="/ruangan/detail"
				style={{ marginBottom: '20px' }}
			>
				Detail Ruang
			</Button>
		</div>
	);
};

export default RuangCard;
