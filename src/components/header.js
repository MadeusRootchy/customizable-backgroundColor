import React from "react";
import styles from  './header.module.css';
import propType from 'prop-types';

class Header extends React.Component {
    render () {
        return (
            <div className={styles.header}>
                <button> {this.props.Home} </button>
                <button> {this.props.Contact} </button>
                <button> {this.props.About} </button>
            </div>
        )
    }
}

Header.propTypes = {
    Home : propType.array,
    Contact : propType.array,
    About : propType.array
}

export default Header;