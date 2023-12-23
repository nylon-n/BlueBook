// MemberProps.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import './memProps.css';

class MemberProps extends Component {
  handleSocials = (socialLink) => {
    window.open(socialLink, '_blank');
  };

  render() {
    const { memname, memrole } = this.props;

    return (
      <div>
        <h6>{memname}</h6>
        <div className='underline-cards' style={{ margin: '0 auto', width: '50px', borderBottom: '2px solid black' }}></div>
        <p>{memrole}</p>

      </div>
    );
  }
}

export default MemberProps;
