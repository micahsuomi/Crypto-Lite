import React from 'react';
import '../../assets/style/footer.css';
const footerData = [{
                        name: 'My Portfolio',
                        link: 'https://michelezuccawebdeveloper.netlify.com/'
                    },
                    {
                        name: 'My GitHub',
                        link: 'https://github.com/micahsuomi'
                    }]

const Footer = () => {
    let formattedData = footerData.map((data, index) => <li className="footer-link" key={index}><a href={data.link}>{data.name}</a></li>)
    return (
        <footer className="footer">
            <ul className="footer-wrapper">{formattedData}</ul>
        </footer>
    )
}
export default Footer;
