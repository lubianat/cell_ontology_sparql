var sampleQueries = {
  "example.1":
  {
    "distinct": true,
    "variables": [
      "?this",
      "?Text_1"
    ],
    "defaultLang": "en",
    "order": null,
    "branches": [
      {
        "line": {
          "s": "?this",
          "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#label",
          "o": "?Text_1",
          "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Cell_Type",
          "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Text",
          "values": []
        },
        "children": []
      }
    ]
  },
  "example.2":
  {
    "distinct": true,
    "variables": [
      "?this",
      "?Disease_1"
    ],
    "defaultLang": "en",
    "order": null,
    "branches": [
      {
        "line": {
          "s": "?this",
          "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#may_prevent",
          "o": "?Disease_1",
          "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Treatment",
          "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Disease",
          "values": []
        },
        "children": []
      }
    ]
  }
};