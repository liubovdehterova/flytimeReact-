import React, {Component} from 'react';

import FooterLink from './FooterLink';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <FooterLink />
                <div className="footer__copir">
                    © 2021 IT-компания Fly Time
                </div>
            </footer>
        );
    }
}

export default Footer;