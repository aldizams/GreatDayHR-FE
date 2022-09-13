import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const RuangCard = (props) => {
	console.log(props);
	return (
		<div className="ruang-card">
			<div>
				<b className="card-title">{props.name}</b>
			</div>
			<img src={props.img} alt="foto ruangan" />
			<Button
				variant="dark"
				className="btn-black"
				as={Link}
				to={`/ruangan/detail/${props.id}`}
				style={{ marginBottom: '20px' }}
			>
				Detail
			</Button>
		</div>
	);
};

export default RuangCard;
