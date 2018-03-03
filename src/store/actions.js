const baseUrl = 'http://localhost:5000';

export default {
  fetchRiskTypes ({ commit }) {
    commit('requestRiskTypes');
    fetch(`${baseUrl}/risk_types`)
      .then(response => response.json())
      .then(({ riskTypes }) => commit('receiveRiskTypes', {
        riskTypes,
      }))
      .catch(error => console.log(error));
  },

  fetchRiskTypeDetails (context, { id }) {
    commit('requestRiskTypeDetails');
    fetch(`${baseUrl}/risk_types/${id}`)
      .then(response => response.json())
      .then(({ riskType }) => commit('setCurrentRiskType', {
        riskType,
      }))
      .catch(error => console.log(error));
  },
}
