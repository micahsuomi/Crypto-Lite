import React from 'react';
import './Footer.css';
const footerData = [{
                        name: 'My Portfolio',
                        link: 'https://michelezuccawebdeveloper.netlify.com/'
                    },
                    {
                        name: 'My GitHub',
                        link: 'https://github.com/micahsuomi'
                    }]

const Footer = () => {
    let formattedData = footerData.map((data) => <li className="footer-link"><a href={data.link}>{data.name}</a></li>)
    return (
        <footer className="footer">
            <ul className="footer-wrapper">{formattedData}</ul>
        </footer>
    )
}
export default Footer;
