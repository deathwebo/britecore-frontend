// export const RECEIVE_RISK_TYPES = 'RECEIVE_RISK_TYPES';
// export const SET_CURRENT_RISK_TYPE = 'SET_CURRENT_RISK_TYPE';
// export const REQUEST_RISK_TYPES = 'REQUEST_RISK_TYPES';
// export const REQUEST_RISK_TYPE_DETAILS = 'REQUEST_RISK_TYPE_DETAILS';

export default {
  receiveRiskTypes (state, payload) {
    state.availableRiskTypes = payload.riskTypes;
    state.isFetching = false;
  },
  setCurrentRiskType (state, payload) {
    state.currentRiskType = payload.riskType;
    state.isFetching = false;
  },
  requestRiskTypes (state) {
    state.isFetching = true;
  },
  requestRiskTypeDetails (state) {
    state.isFetching = true;
  },
}
