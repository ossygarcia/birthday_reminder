import React from 'react';

const List = ({ people }) => {
	return (
		<div>
			{people.map((person) => (
				<article key={person.id}>
					<img src={person.image} alt='' className='img' />
					<div className='list'>
						<h4>{person.name}</h4>
						<p>{person.date}</p>
						<p>{person.age}</p>
					</div>
				</article>
			))}
		</div>
	);
};

export default List;
