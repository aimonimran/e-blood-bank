import React, { useMemo, useState } from 'react';
import CustomInputLabel from './../components/common/CustomInputLabel';
import { Link } from 'react-router-dom';

const Sidebar = ({ handleSelect, username }) => {
	const [route, setRoute] = useState(false);

	return (
		<div style={{ width: '20%' }}>
			<ul className='sidebar'>
				<h3>Welcome {username}!</h3>
				{!route && (
					<p style={{ color: '#fff', margin: '2rem 0 0.7rem 0' }}>
						Select your patient's blood type to filter donors.
					</p>
				)}
				{!route && (
					<CustomInputLabel
						label='Blood Type'
						color='white'
						onChange={(e) => handleSelect(e.target.value)}
						MenuItemList={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']}
					/>
				)}

				<div className='sidebar-li'>
					<li className='li-donor'>
						<Link
							onClick={() => setRoute((prevRoute) => !prevRoute)}
							to={`/${route ? '' : 'form'}`}
						>
							{route ? 'Donor List' : 'Click To Donate'}
						</Link>
					</li>
				</div>
			</ul>
		</div>
	);
};

export default Sidebar;
