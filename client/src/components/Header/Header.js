import React from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import CONSTANTS from '../../constants';
import {  clearUserStore, headerRequest } from '../../actions/actionCreator';

import RenderButtons from './RenderLoginButton';
import RenderMarkap from './RenderMarkUp';

class Header extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

    logOut = () => {
      localStorage.clear();
      this.props.clearUserStore();
      this.props.history.replace('/login');
    };

    startContests = () => {
      this.props.history.push('/startContest');
    };

    renderLoginButtons = () => <RenderButtons data={this.props.data}/>;

    render() {
      if (this.props.isFetching) {
        return null;
      }
      return (
        <RenderMarkap  CONSTANTS={CONSTANTS} renderLoginButtons={this.renderLoginButtons()} startContests={this.startContests} data={this.props.data} />      
      );
    }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
