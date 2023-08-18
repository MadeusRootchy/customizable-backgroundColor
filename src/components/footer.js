import React  from "react";
import styles from './footer.module.css';

class Footer extends React.Component {
    render () {
         return ( 
            <div className={styles.footer}>
                <h4>All rights reserved &copy; {this.props.group} 2023</h4>
            </div>
         )
    }
}

Footer.defaultProps = {
    group : 'Code9Class'
}

export default Footer;