import React from 'react';

const SectionTitle = ({heading, paragraph}) => {
    return (
        <div>
            <h3 className='text-3xl font-bold mb-3'>{heading}</h3>
            <p className='text-md'>{paragraph}</p>
        </div>
    );
};

export default SectionTitle;