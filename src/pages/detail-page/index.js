import React, { useEffect, useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import { DetailCard } from '../../components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getByIdRuangan } from '../../services/api';

const DetailPage = () => {
	const [modalShow, setModalShow] = useState(false);
	const handleClose = () => setModalShow(false);
	const handleShow = () => setModalShow(true);
	const navigate = useNavigate();
	const params = useParams();
	const [ruang, setRuang] = useState([]);

	const fetchApi = async () => {
		getByIdRuangan(params.id).then((res) => {
			setRuang(res.data);
		});
	};
	useEffect(() => {
		fetchApi();
		console.log(ruang.nama_ruang);
	}, []);

	const modalSuccess = () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Peminjaman Success',
			showConfirmButton: false,
			timer: 1300,
		});
	};

	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

	return (
		<>
			{ruang.map((item) => (
				<>
					<span className="bar" />
					<div className="bg-content-detail">
						<Container flex="sm">
							<Button
								variant="warning"
								className="btn-orange detail-back-btn"
								as={Link}
								to="/ruangan"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									fill="currentColor"
									className="bi bi-backspace-fill back-icon"
									viewBox="0 0 16 16"
								>
									<path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
								</svg>
							</Button>{' '}
							<div>
								<b className="title-page">{item.nama_ruang}</b>
							</div>
							<div className="detail-content">
								<DetailCard detail={item.detail_ruang} />
							</div>
						</Container>
					</div>
					<Container flex="sm" className="detail-pinjam">
						<Button
							variant="warning"
							className="btn-orange detail-pinjam-btn"
							onClick={() => handleShow()}
						>
							PINJAM RUANGAN
						</Button>

						<Modal show={modalShow} onHide={handleClose} centered>
							<Modal.Header closeButton>
								<Modal.Title>Form Peminjaman Ruang</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlInput1"
									>
										<Form.Label>Name</Form.Label>
										<Form.Control type="text" placeholder="Great Day HR" />
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlInput1"
									>
										<Form.Label>Date</Form.Label>
										<Form.Control type="date" placeholder="yyyy-mm-dd" />
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlInput1"
									>
										<Form.Label>Waktu Mulai</Form.Label>
										<Form.Control type="time" placeholder="hh:mm" />
										<Form.Label>Durasi</Form.Label>
										<Form.Control type="time" placeholder="hh:mm" />
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Label>Keterangan</Form.Label>
										<Form.Control as="textarea" rows={3} />
									</Form.Group>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<Button
									variant="dark"
									className="btn-black"
									onClick={handleClose}
								>
									Close
								</Button>
								<Button
									variant="warning"
									className="btn-orange"
									onClick={() => {
										handleClose();
										modalSuccess();
										setTimeout(() => navigate('/'), 1300);
									}}
								>
									Pinjam
								</Button>
							</Modal.Footer>
						</Modal>
					</Container>
				</>
			))}
		</>
	);
};

export default DetailPage;
