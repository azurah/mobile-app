export default {
  getCandidatos: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            ok: true,
            data: require('../Fixtures/getCandidatos.json')
          }),
        500
      )
    ),
  getCandidateProfile: () =>
    new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            ok: true,
            data: require('../Fixtures/getCandidateProfile.json')
          }),
        500
      )
    )
}
