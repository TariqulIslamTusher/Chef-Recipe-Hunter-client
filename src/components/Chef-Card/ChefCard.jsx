import React from 'react';

const ChefCard = ({singleInfo}) => {
    const {chefPicture}= singleInfo
    console.log(singleInfo);
    return (
        <div>
            <img src={chefPicture} alt="" />
            <h1>{singleInfo.chefName}</h1>
        </div>
    );
};

export default ChefCard;