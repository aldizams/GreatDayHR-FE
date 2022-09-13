import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { deleteJadwal } from '../../../services/api';

const AdminCard = (props) => {
	console.log(props);
	const [refresh, setRefresh] = useState(false);
	const tanggal = props.tanggal.slice(0, 10);
	const waktu = props.waktu.slice(0, 5);

	const deleteData = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				deleteJadwal(props.id).then(() => {
					setRefresh(!refresh);
					Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				});
			}
		});
	};
	return (
		<div className="jadwal-card admin-card">
			<div>
				<div>
					<b>{props.ruang}</b>
				</div>
				<div>
					<p>
						Tanggal: {tanggal} <br />
						Waktu: {waktu}
						<br />
						Durasi: {props.durasi} Jam
						<br />
						Nama: {props.nama}
						<br />
						Keterangan: {props.ket}
					</p>
				</div>
			</div>
			{/* <Button variant="primary" className="btn-biru">
				Update
			</Button> */}
			<Button
				variant="danger"
				className="btn-merah"
				onClick={() => {
					deleteData();
				}}
			>
				Delete
			</Button>
		</div>
	);
};

export default AdminCard;
