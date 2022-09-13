import React from 'react';
import { Container } from 'react-bootstrap';
import { AdminCard } from '../../components';

const AdminPage = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

	return (
		<>
			<Container flex="sm" className="jadwal-page">
				<div>
					<b className="title-page">Admin</b>
				</div>
			</Container>
			<div className="bg-content-jadwal">
				<Container flex="sm">
					<div className="content-jadwal">
						<AdminCard />
					</div>
					<div className="content-jadwal">
						<AdminCard />
					</div>
					<div className="content-jadwal">
						<AdminCard />
					</div>
					<div className="content-jadwal">
						<AdminCard />
					</div>
					<div className="content-jadwal">
						<AdminCard />
					</div>
					<div className="content-jadwal">
						<AdminCard />
					</div>
				</Container>
			</div>
		</>
	);
};

export default AdminPage;
