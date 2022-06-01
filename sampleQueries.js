var sampleQueries = {
	"example.1" :
  {
    "distinct": true,
    "variables": [
        "?disease",
        "?symptom"
    ],
    "defaultLang": "en",
    "order": null,
    "branches": [
        {
            "line": {
                "s": "?disease",
                "p": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#has_symptom",
                "o": "?symptom",
                "sType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Disease",
                "oType": "http://www.semanticweb.org/lubianat/ontologies/2022/4/sparnanatural_wisecube#Symptom",
                "values": [
                    {
                        "label": "abdominal cramps",
                        "uri": "http://www.wikidata.org/entity/Q3002092"
                    }
                ]
            },
            "children": []
        }
    ]
}
};