
function resultStore() {

  const store = [
    {
      "id": 139,
      "name": "Chelmsford",
      "seqNo": 11,
      "partyResults": [
        {
          "party": "CON",
          "votes": 1866,
          "share": 39.50
        },
        {
          "party": "LD",
          "votes": 14328,
          "share": 30.30
        },
        {
          "party": "LAB",
          "votes": 18686,
          "share": 26.90
        },
        {
          "party": "UKIP",
          "votes": 1590,
          "share": 3.40
        },
        {
          "party": "OTH",
          "votes": 0,
          "share": 0.00
        }
      ]
    }
    ];

    function getResult(idToGet) {
        return store.find(({ id }) => id === idToGet);
    }

    function newResult(result) {
        store.push(result);
    }

    function getAll() {
        return store;
    }

    function reset() {
        store.splice(0);
    }

    return {
        getResult,
        newResult,
        getAll,
        reset
    }
}

module.exports.default = resultStore;
