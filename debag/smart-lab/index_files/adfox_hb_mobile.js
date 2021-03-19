(function()
{
	var adfoxBiddersMap = {
	    "criteo": "717767",
	    "myTarget": "763128",
	    "betweenDigital": "793538",
	    "rtbhouse": "851765",
	    "relap": "958503",
	    "otm": "1460822",
	    "getintent": "958501",
	    "buzzoola": "769160",
        "segmento": "1458193"
	};

	var adUnits = [
    {
        "code": "adfox_mob1",
        "sizes": [
            [
                300,
                250
            ]
        ],
        "bids": [
            {
                "bidder": "criteo",
                "params": {
                    "placementId": 1306109
                }
            },
            {
                "bidder": "myTarget",
                "params": {
                    "placementId": 252543
                }
            },
            {
                "bidder": "betweenDigital",
                "params": {
                    "placementId": 2629111
                }
            },
            {
                "bidder": "rtbhouse",
                "params": {
                    "placementId": "T2VlZ8P7eyumXci0FBbt"
                }
            },
            {
                "bidder": "relap",
                "params": {
                    "placementId": "I9wj8zPzkotx2Xt7"
                }
            },
            {
                "bidder": "otm",
                "params": {
                    "placementId": "969"
                }
            },
            {
                "bidder": "getintent",
                "params": {
                    "placementId": "134_smart-lab.ru_mobile_adfox_mob1_300x250"
                }
            },
            {
                "bidder": "buzzoola",
                "params": {
                    "placementId": 296836
                }
            },
            {
                "bidder": "segmento",
                "params": {
                    "placementId": 308
                }
            }
        ]
    },
    {
        "code": "adfox_mob2",
        "sizes": [
            [
                300,
                250
            ]
        ],
        "bids": [
            {
                "bidder": "criteo",
                "params": {
                    "placementId": 1306110
                }
            },
            {
                "bidder": "myTarget",
                "params": {
                    "placementId": 252546
                }
            },
            {
                "bidder": "betweenDigital",
                "params": {
                    "placementId": 2629109
                }
            },
            {
                "bidder": "rtbhouse",
                "params": {
                    "placementId": "mIApUCwh20JFZ5UJaday"
                }
            },
            {
                "bidder": "relap",
                "params": {
                    "placementId": "mTo6BCbnf4V_zMzM"
                }
            },
            {
                "bidder": "otm",
                "params": {
                    "placementId": "970"
                }
            },
            {
                "bidder": "getintent",
                "params": {
                    "placementId": "134_smart-lab.ru_mobile_adfox_mob2_300x250"
                }
            },
            {
                "bidder": "buzzoola",
                "params": {
                    "placementId": 296837
                }
            },
            {
                "bidder": "segmento",
                "params": {
                    "placementId": 309
                }
            }
        ]
    },
    {
        "code": "adfox_mob3",
        "sizes": [
            [
                300,
                250
            ]
        ],
        "bids": [
            {
                "bidder": "criteo",
                "params": {
                    "placementId": 1306111
                }
            },
            {
                "bidder": "myTarget",
                "params": {
                    "placementId": 252550
                }
            },
            {
                "bidder": "betweenDigital",
                "params": {
                    "placementId": 2629110
                }
            },
            {
                "bidder": "rtbhouse",
                "params": {
                    "placementId": "iHtUUltFgoY4C5RHisaP"
                }
            },
            {
                "bidder": "relap",
                "params": {
                    "placementId": "pFukaalpFA33Q-fn"
                }
            },
            {
                "bidder": "otm",
                "params": {
                    "placementId": "971"
                }
            },
            {
                "bidder": "getintent",
                "params": {
                    "placementId": "134_smart-lab.ru_mobile_adfox_mob3_300x250"
                }
            },
            {
                "bidder": "buzzoola",
                "params": {
                    "placementId": 296838
                }
            },
            {
                "bidder": "segmento",
                "params": {
                    "placementId": 310
                }
            }
        ]
    }
];

	var userTimeout = 1200;

	window.YaHeaderBiddingSettings = {
		biddersMap: adfoxBiddersMap,
		adUnits: adUnits,
		timeout: userTimeout,
        trustedOwners: [254948]
	};

})();