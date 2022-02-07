import React from 'react';

//We need to import react since the below code is not HTML but it is JSX, to parse it then we must include react. It will parse and create a virtual DOM 

const Card = ({id,name,email}) => {
	return (

		<div className ='tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5'>
			<img alt="robots" src = {`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>	

		);

}
export default Card;