import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const JadwalCard = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const tanggal = props.tanggal.slice(0, 10);
	const waktu = props.waktu.slice(0, 5);

	return (
		<div className="jadwal-card">
			<div>
				<div>
					<b>{props.ruang}</b>
				</div>
				<div>
					<p>
						{waktu} <br />
						{tanggal}
					</p>
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
					<div>Nama: {props.nama}</div>
					<div>Tanggal: {tanggal}</div>
					<div>Mulai: {waktu}</div>
					<div>Durasi: {props.durasi} Jam</div>
					<div>Keterangan:{props.ket}</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default JadwalCard;
