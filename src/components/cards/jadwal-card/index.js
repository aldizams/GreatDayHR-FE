import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const JadwalCard = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="jadwal-card">
			<div>
				<div>
					<b>Ruang A</b>
				</div>
				<div>
					<p>8PM 20-08-2022</p>
				</div>
			</div>
			<Button variant="warning" className="btn-orange" onClick={handleShow}>
				Detail
			</Button>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Detail</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>Nama: Aldiza Muhammad Satria</div>
					<div>Tanggal: 20-08-2022</div>
					<div>Mulai: 8PM</div>
					<div>Durasi: 3 Jam</div>
					<div>Keterangan: Meeting sama artis</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default JadwalCard;
