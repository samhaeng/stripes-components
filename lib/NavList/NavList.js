import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

class NavList extends React.Component {
  constructor(props) {
    super(props);
    this.nav = null;
  }

  render() {
    return (
      <nav className={this.props.className}>
        <div ref={(ref) => { this.nav = ref; }} role="presentation">
          {this.props.children}
        </div>
      </nav>
    );
  }
}

NavList.propTypes = propTypes;

export default NavList;
