import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { RuangCard } from '../../components';
import { getAllRuangan } from '../../services/api';

const RuangPage = () => {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	const [ruang, setRuang] = useState([]);

	const fetchApi = async () => {
		getAllRuangan().then((res) => {
			setRuang(res.data);
		});
	};
	useEffect(() => {
		fetchApi();
		console.log(ruang);
	}, []);

	return (
		<div className="page">
			<Container flex="sm" className="jadwal-page">
				<div>
					<b className="title-page">Pilih Ruangan</b>
				</div>
				<div className="content-ruang">
					{ruang.map((item) => (
						<RuangCard
							key={item.id}
							id={item.id}
							img={item.img_ruang}
							name={item.nama_ruang}
							detail={item.ket_ruang}
						/>
					))}
				</div>
			</Container>
			<span className="titik" />
		</div>
	);
};

export default RuangPage;
