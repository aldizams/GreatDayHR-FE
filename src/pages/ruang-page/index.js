import React from 'react';
import { Container } from 'react-bootstrap';
import { RuangCard } from '../../components';

const RuangPage = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	return (
		<div className="page">
			<Container flex="sm" className="jadwal-page">
				<div>
					<b className="title-page">Pilih Ruangan</b>
				</div>
				<div className="content-ruang">
					<RuangCard />
					<RuangCard />
					<RuangCard />
					<RuangCard />
				</div>
			</Container>
			<span className="titik" />
		</div>
	);
};

export default RuangPage;
