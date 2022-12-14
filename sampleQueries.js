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
      "?Organ_1"
    ],
    "defaultLang": "en",
    "order": null,
    "branches": [
      {
        "line": {
          "s": "?this",
          "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#part_of",
          "o": "?Organ_1",
          "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Cell_Type",
          "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Organ",
          "values": [
            {
              "label": "camera-type eye",
              "uri": "http://purl.obolibrary.org/obo/UBERON_0000019"
            }
          ]
        },
        "children": []
      }
    ]
  }
};