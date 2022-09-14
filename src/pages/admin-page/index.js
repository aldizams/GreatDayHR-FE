import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AdminCard } from '../../components';
import { getAllJadwal } from '../../services/api';

const AdminPage = () => {
	const [jadwal, setJadwal] = useState([]);
	const fetchApi = async () => {
		getAllJadwal().then((res) => {
			setJadwal(res.data);
		});
	};
	useEffect(() => {
		fetchApi();
		console.log(jadwal);
	}, [jadwal]);
	return (
		<>
			<Container flex="sm" className="jadwal-page">
				<div>
					<b className="title-page">Admin</b>
				</div>
			</Container>
			<div className="bg-content-jadwal">
				<Container flex="sm">
					{jadwal.map((item) => (
						<div className="content-jadwal">
							<AdminCard
								key={item.id}
								id={item.id}
								ruang={item.nama_ruang}
								tanggal={item.tanggal_pinjam}
								waktu={item.waktu_pinjam}
								durasi={item.durasi_pinjam.hours}
								nama={item.nama_peminjam}
								ket={item.ket_peminjaman}
							/>
						</div>
					))}
				</Container>
			</div>
		</>
	);
};

export default AdminPage;
