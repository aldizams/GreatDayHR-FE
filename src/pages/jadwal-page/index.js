import React from 'react';
import { Container } from 'react-bootstrap';
import { JadwalCard } from '../../components';

const JadwalPage = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

	return (
		<>
			<Container flex="sm" className="jadwal-page">
				<div>
					<b className="title-page">Jadwal Ruangan</b>
				</div>
			</Container>
			<div className="bg-content-jadwal">
				<Container flex="sm">
					<div className="content-jadwal">
						<JadwalCard />
					</div>
					<div className="content-jadwal">
						<JadwalCard />
					</div>
					<div className="content-jadwal">
						<JadwalCard />
					</div>
					<div className="content-jadwal">
						<JadwalCard />
					</div>
					<div className="content-jadwal">
						<JadwalCard />
					</div>
					<div className="content-jadwal">
						<JadwalCard />
					</div>
				</Container>
			</div>
		</>
	);
};

export default JadwalPage;
