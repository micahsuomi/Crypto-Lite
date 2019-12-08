import React from 'react';

const WalletItem = (props) => {
    return (
        <div className="wallet-item-container">
            <ul className="wallet-item-list">
                {props.key}
                <li>Name: {props.name}</li>
                <li>Easy of Use: {props.easyOfUse}</li>
                <li>Affiliate URL: {props.affiliate}</li>
                <li>Anonimity: {props.anonomity}</li>
                <li>Logo: {props.logo}</li>
                <li>Rating: {props.rating}</li>
                <li>Security: {props.security}</li>
                <li>Website: {props.website} </li>
                <li>Github: {props.github} </li>


            </ul>
        </div>
    )
}

export default WalletItem;
