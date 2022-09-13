import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { JadwalCard } from '../../components';
import { getAllJadwal } from '../../services/api';

const JadwalPage = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	const [jadwal, setJadwal] = useState([]);

	const fetchApi = async () => {
		getAllJadwal().then((res) => {
			setJadwal(res.data);
		});
	};
	useEffect(() => {
		fetchApi();
		console.log(jadwal);
	}, []);

	return (
		<>
			<Container flex="sm" className="jadwal-page">
				<div>
					<b className="title-page">Jadwal Ruangan</b>
				</div>
			</Container>
			<div className="bg-content-jadwal">
				<Container flex="sm">
					{jadwal.map((item) => (
						<div className="content-jadwal">
							<JadwalCard
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

export default JadwalPage;
