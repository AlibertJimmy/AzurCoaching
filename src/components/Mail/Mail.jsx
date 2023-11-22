// Import React Libraries
import React from 'react';

// Import PropType
import PropTypes from 'prop-types';

class CopyEmailLink extends React.Component {
  constructor (props) {
    super(props);
    this.emailLinkRef = React.createRef();
    this.state = {
      isCopied: false
    };
  }

  copyToClipboard = (e) => {
    e.preventDefault();
    const emailLink = this.emailLinkRef.current;
    const range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    this.setState({ isCopied: true });

    setTimeout(() => {
      this.setState({ isCopied: false });
    }, 2000);
  };

  render () {
    return (
      <span>
        <a
          href={`mailto:${this.props.email}`}
          ref={this.emailLinkRef}
          onClick={this.copyToClipboard}
        >
          {this.props.email}
        </a>
        {this.state.isCopied && (
          <span
            style={{
              position: 'fixed',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '10px',
              zIndex: 1000,
              ...this.props.style
            }}
          >
            Email Copied To Clipboard
          </span>
        )}
      </span>
    );
  }
}

const MailPopUpStyleType = PropTypes.shape({
  fontFamily: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired
});

CopyEmailLink.propTypes = {
  email: PropTypes.string.isRequired,
  style: MailPopUpStyleType.isRequired
};

export default CopyEmailLink;
