const baseUrl = 'http://localhost:5000';

export default {
  fetchRiskTypes ({ commit }) {
    commit('requestRiskTypes');
    fetch(`${baseUrl}/risk_types`)
      .then(response => response.json())
      .then(data => {
        commit('receiveRiskTypes', {
          riskTypes: data.risk_types,
        });
      })
      .catch(error => console.log(error));
  },
  fetchRiskTypeDetails ({ commit }, { id }) {
    commit('requestRiskTypeDetails');
    fetch(`${baseUrl}/risk_types/${id}`)
      .then(response => response.json())
      .then(data => commit('setCurrentRiskType', {
        riskType: data.risk_type,
      }))
      .catch(error => console.log(error));
  },
}
