import React from "react";
import styles from './body.module.css';

class Body extends React.Component {
    state = {
        backgroundColor: 'white',
        text:'Welcome. Click any square',
    }

    titChange = (col) => {
        this.setState({text:`Kare ki klike a, se kare ki gen koulè ${col}`})
    }

    change = (col) => {
        this.setState({ backgroundColor: col });
        this.titChange(col);
    }
  
    render() {
        const tab = ['#8c978c', '#155aaf', '#671b6e', '#43f564', '#2434b4', '#f64d89'];

        return (
            <body style={{ backgroundColor: this.state.backgroundColor }} className={styles.body}>
                <div className={styles.content}>
                    <h2>{this.state.text}</h2>
                    {tab.map((el, index) => (
                        <div key={index} className={styles.box} style={{ backgroundColor: el }} onClick={() => this.change(el)}></div>
                    ))}
                </div>
            </body>
        );
    }
}

export default Body;
