import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateContest, changeEditContest, clearUpdateContestStore } from '../../actions/actionCreator';
import ContestForm from '../ContestForm/ContestForm';
import styles from './Brief.module.css';
import ContestInfo from '../Contest/ContestInfo/ContestInfo';
import Error from '../Error/Error';
import ContestData from './ContestData';

const Brief = (props) => {
  const [getContestObjInfo , setGetContestObjInfo] = useState()
  const [NewContestData , setNewContestData] = useState()
  
  const getData = (value) => {
    setGetContestObjInfo(value.getContestObjInfo)
    setNewContestData(value.NewContestData)
  } 
<ContestData getData={getData} />
  const {
    isEditContest, contestData, changeEditContest, role, goChat, clearUpdateContestStore,
  } = props;
  const { error } = props.updateContestStore;
  const { id } = props.userStore.data;
  if (!isEditContest) {
    return (
      <ContestInfo
        userId={id}
        contestData={contestData}
        changeEditContest={changeEditContest}
        role={role}
        goChat={goChat}
      />
    );
  }
  return (
    <div className={styles.contestForm}>
      {error && <Error data={error.data} status={error.status} clearError={clearUpdateContestStore} />}
      <ContestForm
        contestType={contestData.contestType}
        defaultData={getContestObjInfo}
        handleSubmit={NewContestData}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isEditContest } = state.contestByIdStore;
  const { updateContestStore, userStore } = state;
  return { updateContestStore, userStore, isEditContest };
};

const mapDispatchToProps = (dispatch) => ({
  update: (data) => dispatch(updateContest(data)),
  changeEditContest: (data) => dispatch(changeEditContest(data)),
  clearUpdateContestStore: () => dispatch(clearUpdateContestStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Brief));
