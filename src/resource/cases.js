export const case_scripts = {
    state_education:
`{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 550,
    "height": 300,
    "background": "#F3F8FB",
    "data": {
        "values": "state_education",
        "format": {
            "property": "features"
        }
    },
    "mark": "geoshape",
    "projection": {
        "type": "equalEarth"
    },
    "encoding": {
        "stroke": {
            "value": "black"
        },
        "color": {
            "field": "properties.higher_education_rate",
            "type": "quantitative",
            "scale": {
                "range": ["#edf8e9","#edfce9"],
                "type": "threshold",
                "domain": [0.2]
            },
            "legend": {
                "title": null
            }
        }         
    },
    "usermeta": {
        "embedOptions": {
            "actions": false
        }
    }
}`,
county_unemployment:
`{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 550,
    "height": 300,
    "background": "#F3F8FB",
    "data": {
        "values": "county_unemployment",
        "format": {
        "type": "topojson",
        "feature": "counties"
        }
    },
    "transform": [{
        "lookup": "id",
        "from": {
            "data": {
                "values": "data/unemployment.tsv"
            },
            "key": "id",
            "fields": ["rate"]
        }
    }],
    "projection": {
        "type": "albersUsa"
    },
    "mark": "geoshape",
    "encoding": {
        "color": {
        "field": "rate",
        "type": "quantitative"
        }
    },
    "usermeta": {
        "embedOptions": {
            "actions": false
        }
    }
}`,
georgia_pctBach:
`{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 550,
    "height": 300,
    "background": "#F3F8FB",
    "data": {
        "values": "pct",
        "format": {
            "property": "georgia_pctBach"
        }
    },
    "mark": "geoshape",
    "projection": {
        "type": "albersUsa"
    },
    "encoding": {
        "stroke": {
            "value": "black"
        },
        "color": {
            "field": "properties.PctBach",
            "type": "quantitative",
            "scale": {
                "range": ["#ffffff","#000000"],
                "type": "threshold",
                "domain": [0.05]
            },
            "legend": {
                "title": null
            }
        }         
    },
    "usermeta": {
        "embedOptions": {
            "actions": false
        }
    }
}`,

};