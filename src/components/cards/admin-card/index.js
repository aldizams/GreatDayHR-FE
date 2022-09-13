import React from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AdminCard = () => {
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
				// axios.delete(`http://localhost:8000/gedung/${item}`).then(() => {
				// 	setRefresh(!refresh);
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				// });
			}
		});
	};
	return (
		<div className="jadwal-card admin-card">
			<div>
				<div>
					<b>Ruang A</b>
				</div>
				<div>
					<p>8PM 20-08-2022</p>
				</div>
				<div>
					<p>Aldiza Muhammad Satria</p>
				</div>
				<div>
					<p>Untuk meeting dengan artis</p>
				</div>
			</div>
			<Button variant="primary" className="btn-biru">
				Update
			</Button>
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
