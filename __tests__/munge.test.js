const { locationMunger, weatherMunger, reviewMunger } = require('../lib/munge-utils.js');

require('dotenv').config();


describe('munge functions', () => {

  test('takes in location data and turns it into a user friendly object', () => {
    
    const expectation = {
      'formatted_query': 'Midland County, Texas, USA',
      'latitude': '31.83688',
      'longitude': '-102.0103767'
    };

    const input = [
      {
        'place_id': '236357690',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '2528880',
        'boundingbox': [
          '31.6513243',
          '32.0869893',
          '-102.2874424',
          '-101.775658'
        ],
        'lat': '31.83688',
        'lon': '-102.0103767',
        'display_name': 'Midland County, Texas, USA',
        'class': 'boundary',
        'type': 'administrative',
        'importance': 0.655130539651654,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'
      },
      {
        'place_id': '236534490',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '2374903',
        'boundingbox': [
          '31.9184063',
          '32.1293873',
          '-102.2697973',
          '-102.0176654'
        ],
        'lat': '31.9973662',
        'lon': '-102.0779482',
        'display_name': 'Midland, Midland County, Texas, USA',
        'class': 'place',
        'type': 'city',
        'importance': 0.64756277102863,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
      },
      {
        'place_id': '236306893',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '1907324',
        'boundingbox': [
          '43.4659459',
          '43.8284773',
          '-84.6079594',
          '-84.1553835'
        ],
        'lat': '43.634525',
        'lon': '-84.3840821',
        'display_name': 'Midland County, Michigan, USA',
        'class': 'boundary',
        'type': 'administrative',
        'importance': 0.609352541297336,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'
      },
      {
        'place_id': '231531179',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '134897',
        'boundingbox': [
          '43.565277',
          '43.6836896',
          '-84.318483',
          '-84.1553835'
        ],
        'lat': '43.6155825',
        'lon': '-84.2472117',
        'display_name': 'Midland, Midland County, Michigan, USA',
        'class': 'place',
        'type': 'city',
        'importance': 0.600399665370745,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
      },
      {
        'place_id': '235504089',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '180111',
        'boundingbox': [
          '35.191015',
          '35.314952',
          '-80.586308',
          '-80.4630984'
        ],
        'lat': '35.2476245',
        'lon': '-80.5226561121873',
        'display_name': 'Midland, Cabarrus County, North Carolina, USA',
        'class': 'boundary',
        'type': 'administrative',
        'importance': 0.551871185099403,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'
      },
      {
        'place_id': '236627453',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '7476934',
        'boundingbox': [
          '44.7014879',
          '44.8029651',
          '-79.9505238',
          '-79.8111247'
        ],
        'lat': '44.750147',
        'lon': '-79.885712',
        'display_name': 'Midland, Simcoe County, Central Ontario, Ontario, Canada',
        'class': 'boundary',
        'type': 'administrative',
        'importance': 0.494155316906564,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'
      },
      {
        'place_id': '62992605',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'node',
        'osm_id': '5318406202',
        'boundingbox': [
          '43.7654537',
          '43.7754537',
          '-79.276982',
          '-79.266982'
        ],
        'lat': '43.7704537',
        'lon': '-79.271982',
        'display_name': 'Midland, 2085, Midland Avenue, Kennedy, Scarborough Centre, Scarborough, Toronto, Golden Horseshoe, Ontario, M1P 3E3, Canada',
        'class': 'railway',
        'type': 'station',
        'importance': 0.47707300990936097,
        'icon': 'https://locationiq.org/static/images/mapicons/transport_train_station2.p.20.png'
      },
      {
        'place_id': '230958623',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'relation',
        'osm_id': '237508',
        'boundingbox': [
          '47.158115',
          '47.1918',
          '-122.435689',
          '-122.396216'
        ],
        'lat': '47.174938',
        'lon': '-122.409039627905',
        'display_name': 'Midland, Pierce County, Washington, USA',
        'class': 'boundary',
        'type': 'administrative',
        'importance': 0.466591667934692,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'
      },
      {
        'place_id': '341947',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'node',
        'osm_id': '150965148',
        'boundingbox': [
          '47.1469331',
          '47.1869331',
          '-122.424782',
          '-122.384782'
        ],
        'lat': '47.1669331',
        'lon': '-122.404782',
        'display_name': 'Midland, Midland, Pierce County, Washington, 98445, USA',
        'class': 'place',
        'type': 'hamlet',
        'importance': 0.466591667934692,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_place_village.p.20.png'
      },
      {
        'place_id': '338406',
        'licence': 'https://locationiq.com/attribution',
        'osm_type': 'node',
        'osm_id': '150961279',
        'boundingbox': [
          '33.8411293',
          '33.8811293',
          '-114.8221881',
          '-114.7821881'
        ],
        'lat': '33.8611293',
        'lon': '-114.8021881',
        'display_name': 'Midland, California, USA',
        'class': 'place',
        'type': 'hamlet',
        'importance': 0.443425222676179,
        'icon': 'https://locationiq.org/static/images/mapicons/poi_place_village.p.20.png'
      }
    ];

    const actual = locationMunger(input);

    expect(actual).toEqual(expectation); 
  });

  test('takes in weather data and turns it into a user-friendly object', () => {
    const expectation = [
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
      { 'forecast': expect.any(String),
        'time': expect.any(String) },
    ];

    const input = {
      'data': [
        {
          'moonrise_ts': 1624578679,
          'wind_cdir': 'SE',
          'rh': 65,
          'pres': 1007.93,
          'high_temp': 25.6,
          'sunset_ts': 1624581647,
          'ozone': 334.048,
          'moon_phase': 0.992944,
          'wind_gust_spd': 3.09961,
          'snow_depth': 0,
          'clouds': 9,
          'ts': 1624507260,
          'sunrise_ts': 1624528335,
          'app_min_temp': 12.4,
          'wind_spd': 1.18706,
          'pop': 0,
          'wind_cdir_full': 'southeast',
          'slp': 1025.34,
          'moon_phase_lunation': 0.49,
          'valid_date': '2021-06-24',
          'app_max_temp': 25.4,
          'vis': 24.096,
          'dewpt': 12.7,
          'snow': 0,
          'uv': 4.43587,
          'weather': {
            'icon': 'c02d',
            'code': 801,
            'description': 'Few clouds'
          },
          'wind_dir': 139,
          'max_dhi': null,
          'clouds_hi': 5,
          'precip': 0,
          'low_temp': 14.5,
          'max_temp': 25.6,
          'moonset_ts': 1624530540,
          'datetime': '2021-06-24',
          'temp': 20.1,
          'min_temp': 12.4,
          'clouds_mid': 1,
          'clouds_low': 5
        },
        {
          'moonrise_ts': 1624669308,
          'wind_cdir': 'SSE',
          'rh': 66,
          'pres': 1006.19,
          'high_temp': 26.7,
          'sunset_ts': 1624668052,
          'ozone': 310.396,
          'moon_phase': 0.957668,
          'wind_gust_spd': 8,
          'snow_depth': 0,
          'clouds': 23,
          'ts': 1624593660,
          'sunrise_ts': 1624614754,
          'app_min_temp': 14.5,
          'wind_spd': 1.70557,
          'pop': 0,
          'wind_cdir_full': 'south-southeast',
          'slp': 1023.54,
          'moon_phase_lunation': 0.53,
          'valid_date': '2021-06-25',
          'app_max_temp': 27,
          'vis': 24.096,
          'dewpt': 14.4,
          'snow': 0,
          'uv': 10.5662,
          'weather': {
            'icon': 'c02d',
            'code': 802,
            'description': 'Scattered clouds'
          },
          'wind_dir': 157,
          'max_dhi': null,
          'clouds_hi': 15,
          'precip': 0,
          'low_temp': 15.3,
          'max_temp': 26.8,
          'moonset_ts': 1624621052,
          'datetime': '2021-06-25',
          'temp': 21.5,
          'min_temp': 14.5,
          'clouds_mid': 0,
          'clouds_low': 14
        },
        {
          'moonrise_ts': 1624759382,
          'wind_cdir': 'S',
          'rh': 75,
          'pres': 1003.86,
          'high_temp': 29.7,
          'sunset_ts': 1624754456,
          'ozone': 297.698,
          'moon_phase': 0.896272,
          'wind_gust_spd': 10.0938,
          'snow_depth': 0,
          'clouds': 43,
          'ts': 1624680060,
          'sunrise_ts': 1624701174,
          'app_min_temp': 22.2,
          'wind_spd': 3.11507,
          'pop': 20,
          'wind_cdir_full': 'south',
          'slp': 1021.19,
          'moon_phase_lunation': 0.56,
          'valid_date': '2021-06-26',
          'app_max_temp': 30.3,
          'vis': 24.096,
          'dewpt': 19.5,
          'snow': 0,
          'uv': 9.71574,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 174,
          'max_dhi': null,
          'clouds_hi': 17,
          'precip': 0.125,
          'low_temp': 21.7,
          'max_temp': 29.7,
          'moonset_ts': 1624711706,
          'datetime': '2021-06-26',
          'temp': 25,
          'min_temp': 21.4,
          'clouds_mid': 0,
          'clouds_low': 38
        },
        {
          'moonrise_ts': 1624848815,
          'wind_cdir': 'S',
          'rh': 73,
          'pres': 999.917,
          'high_temp': 33.3,
          'sunset_ts': 1624840858,
          'ozone': 293.99,
          'moon_phase': 0.815055,
          'wind_gust_spd': 7.61719,
          'snow_depth': 0,
          'clouds': 74,
          'ts': 1624766460,
          'sunrise_ts': 1624787596,
          'app_min_temp': 19.6,
          'wind_spd': 2.34238,
          'pop': 20,
          'wind_cdir_full': 'south',
          'slp': 1020.17,
          'moon_phase_lunation': 0.59,
          'valid_date': '2021-06-27',
          'app_max_temp': 34.2,
          'vis': 24.128,
          'dewpt': 19.3,
          'snow': 0,
          'uv': 4.21347,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 188,
          'max_dhi': null,
          'clouds_hi': 68,
          'precip': 0.0625,
          'low_temp': 19.6,
          'max_temp': 33.3,
          'moonset_ts': 1624802283,
          'datetime': '2021-06-27',
          'temp': 25.2,
          'min_temp': 19,
          'clouds_mid': 25,
          'clouds_low': 21
        },
        {
          'moonrise_ts': 1624937676,
          'wind_cdir': 'S',
          'rh': 69,
          'pres': 1001.15,
          'high_temp': 34.7,
          'sunset_ts': 1624927257,
          'ozone': 296.948,
          'moon_phase': 0.720776,
          'wind_gust_spd': 5.11328,
          'snow_depth': 0,
          'clouds': 50,
          'ts': 1624852860,
          'sunrise_ts': 1624874019,
          'app_min_temp': 20.2,
          'wind_spd': 2.00437,
          'pop': 0,
          'wind_cdir_full': 'south',
          'slp': 1021.5,
          'moon_phase_lunation': 0.63,
          'valid_date': '2021-06-28',
          'app_max_temp': 35,
          'vis': 24.128,
          'dewpt': 19.4,
          'snow': 0,
          'uv': 9.27093,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 188,
          'max_dhi': null,
          'clouds_hi': 15,
          'precip': 0,
          'low_temp': 19.3,
          'max_temp': 33.9,
          'moonset_ts': 1624892670,
          'datetime': '2021-06-28',
          'temp': 26.3,
          'min_temp': 19.6,
          'clouds_mid': 8,
          'clouds_low': 28
        },
        {
          'moonrise_ts': 1624939700,
          'wind_cdir': 'S',
          'rh': 62,
          'pres': 1001.55,
          'high_temp': 35.3,
          'sunset_ts': 1625013656,
          'ozone': 317.5,
          'moon_phase': 0.619573,
          'wind_gust_spd': 10.7031,
          'snow_depth': 0,
          'clouds': 20,
          'ts': 1624939260,
          'sunrise_ts': 1624960444,
          'app_min_temp': 19.7,
          'wind_spd': 2.46323,
          'pop': 0,
          'wind_cdir_full': 'south',
          'slp': 1021.8,
          'moon_phase_lunation': 0.66,
          'valid_date': '2021-06-29',
          'app_max_temp': 34.8,
          'vis': 24.128,
          'dewpt': 17.1,
          'snow': 0,
          'uv': 10.232,
          'weather': {
            'icon': 'c02d',
            'code': 801,
            'description': 'Few clouds'
          },
          'wind_dir': 190,
          'max_dhi': null,
          'clouds_hi': 20,
          'precip': 0,
          'low_temp': 20,
          'max_temp': 35.8,
          'moonset_ts': 1624982854,
          'datetime': '2021-06-29',
          'temp': 26.1,
          'min_temp': 18.8,
          'clouds_mid': 0,
          'clouds_low': 3
        },
        {
          'moonrise_ts': 1625027826,
          'wind_cdir': 'S',
          'rh': 68,
          'pres': 997.812,
          'high_temp': 30.1,
          'sunset_ts': 1625100052,
          'ozone': 319.906,
          'moon_phase': 0.516483,
          'wind_gust_spd': 8.90625,
          'snow_depth': 0,
          'clouds': 42,
          'ts': 1625025660,
          'sunrise_ts': 1625046870,
          'app_min_temp': 20.4,
          'wind_spd': 2.35062,
          'pop': 0,
          'wind_cdir_full': 'south',
          'slp': 1018.06,
          'moon_phase_lunation': 0.69,
          'valid_date': '2021-06-30',
          'app_max_temp': 34.8,
          'vis': 24.128,
          'dewpt': 18.8,
          'snow': 0,
          'uv': 7.34374,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 190,
          'max_dhi': null,
          'clouds_hi': 21,
          'precip': 0,
          'low_temp': 19.9,
          'max_temp': 34.4,
          'moonset_ts': 1625072878,
          'datetime': '2021-06-30',
          'temp': 25.9,
          'min_temp': 19.9,
          'clouds_mid': 0,
          'clouds_low': 22
        },
        {
          'moonrise_ts': 1625115768,
          'wind_cdir': 'S',
          'rh': 77,
          'pres': 995.812,
          'high_temp': 30.4,
          'sunset_ts': 1625186447,
          'ozone': 308.781,
          'moon_phase': 0.415457,
          'wind_gust_spd': 9.79688,
          'snow_depth': 0,
          'clouds': 56,
          'ts': 1625112060,
          'sunrise_ts': 1625133298,
          'app_min_temp': 20.4,
          'wind_spd': 3.00625,
          'pop': 35,
          'wind_cdir_full': 'south',
          'slp': 1016.06,
          'moon_phase_lunation': 0.73,
          'valid_date': '2021-07-01',
          'app_max_temp': 31.5,
          'vis': 24.108,
          'dewpt': 19.7,
          'snow': 0,
          'uv': 6.57431,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 185,
          'max_dhi': null,
          'clouds_hi': 50,
          'precip': 1.625,
          'low_temp': 20.2,
          'max_temp': 33,
          'moonset_ts': 1625162801,
          'datetime': '2021-07-01',
          'temp': 24.5,
          'min_temp': 19.5,
          'clouds_mid': 16,
          'clouds_low': 10
        },
        {
          'moonrise_ts': 1625203618,
          'wind_cdir': 'S',
          'rh': 82,
          'pres': 996.688,
          'high_temp': 34.9,
          'sunset_ts': 1625272839,
          'ozone': 303.281,
          'moon_phase': 0.319634,
          'wind_gust_spd': 10.1953,
          'snow_depth': 0,
          'clouds': 69,
          'ts': 1625198460,
          'sunrise_ts': 1625219727,
          'app_min_temp': 20.8,
          'wind_spd': 2.80111,
          'pop': 10,
          'wind_cdir_full': 'south',
          'slp': 1016.94,
          'moon_phase_lunation': 0.76,
          'valid_date': '2021-07-02',
          'app_max_temp': 32.4,
          'vis': 24.128,
          'dewpt': 20.8,
          'snow': 0,
          'uv': 7.34432,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 191,
          'max_dhi': null,
          'clouds_hi': 36,
          'precip': 0.3125,
          'low_temp': 20.7,
          'max_temp': 31.3,
          'moonset_ts': 1625252686,
          'datetime': '2021-07-02',
          'temp': 24.5,
          'min_temp': 20,
          'clouds_mid': 5,
          'clouds_low': 53
        },
        {
          'moonrise_ts': 1625291456,
          'wind_cdir': 'SSW',
          'rh': 70,
          'pres': 995,
          'high_temp': 35.1,
          'sunset_ts': 1625359230,
          'ozone': 303.781,
          'moon_phase': 0.231713,
          'wind_gust_spd': 4.30078,
          'snow_depth': 0,
          'clouds': 63,
          'ts': 1625284860,
          'sunrise_ts': 1625306157,
          'app_min_temp': 21.4,
          'wind_spd': 2.00771,
          'pop': 10,
          'wind_cdir_full': 'south-southwest',
          'slp': 1015.06,
          'moon_phase_lunation': 0.8,
          'valid_date': '2021-07-03',
          'app_max_temp': 36.6,
          'vis': 24.094,
          'dewpt': 20.3,
          'snow': 0,
          'uv': 9.68218,
          'weather': {
            'icon': 'c03d',
            'code': 803,
            'description': 'Broken clouds'
          },
          'wind_dir': 210,
          'max_dhi': null,
          'clouds_hi': 58,
          'precip': 0.375,
          'low_temp': 20.9,
          'max_temp': 36.2,
          'moonset_ts': 1625342581,
          'datetime': '2021-07-03',
          'temp': 27.1,
          'min_temp': 20.5,
          'clouds_mid': 6,
          'clouds_low': 17
        },
        {
          'moonrise_ts': 1625379354,
          'wind_cdir': 'WSW',
          'rh': 65,
          'pres': 994.75,
          'high_temp': 25.5,
          'sunset_ts': 1625445619,
          'ozone': 299.25,
          'moon_phase': 0.154269,
          'wind_gust_spd': 3.39844,
          'snow_depth': 0,
          'clouds': 92,
          'ts': 1625371260,
          'sunrise_ts': 1625392588,
          'app_min_temp': 23,
          'wind_spd': 1.35291,
          'pop': 40,
          'wind_cdir_full': 'west-southwest',
          'slp': 1014.75,
          'moon_phase_lunation': 0.83,
          'valid_date': '2021-07-04',
          'app_max_temp': 36.1,
          'vis': 24.128,
          'dewpt': 19.5,
          'snow': 0,
          'uv': 3.18066,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 239,
          'max_dhi': null,
          'clouds_hi': 92,
          'precip': 1.8125,
          'low_temp': 20.5,
          'max_temp': 35.1,
          'moonset_ts': 1625432508,
          'datetime': '2021-07-04',
          'temp': 28.7,
          'min_temp': 21,
          'clouds_mid': 2,
          'clouds_low': 48
        },
        {
          'moonrise_ts': 1625467385,
          'wind_cdir': 'W',
          'rh': 66,
          'pres': 993.25,
          'high_temp': 30.4,
          'sunset_ts': 1625532006,
          'ozone': 299.75,
          'moon_phase': 0.0899223,
          'wind_gust_spd': 6.70703,
          'snow_depth': 0,
          'clouds': 100,
          'ts': 1625457660,
          'sunrise_ts': 1625479021,
          'app_min_temp': 21.6,
          'wind_spd': 2.92336,
          'pop': 30,
          'wind_cdir_full': 'west',
          'slp': 1013.5,
          'moon_phase_lunation': 0.86,
          'valid_date': '2021-07-05',
          'app_max_temp': 36.7,
          'vis': 24.048,
          'dewpt': 19.3,
          'snow': 0,
          'uv': 3.18663,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 261,
          'max_dhi': null,
          'clouds_hi': 52,
          'precip': 1.1875,
          'low_temp': 20.7,
          'max_temp': 35.2,
          'moonset_ts': 1625522453,
          'datetime': '2021-07-05',
          'temp': 28,
          'min_temp': 20.9,
          'clouds_mid': 51,
          'clouds_low': 50
        },
        {
          'moonrise_ts': 1625555629,
          'wind_cdir': 'SSW',
          'rh': 65,
          'pres': 993.75,
          'high_temp': 32.5,
          'sunset_ts': 1625618391,
          'ozone': 299.125,
          'moon_phase': 0.0413218,
          'wind_gust_spd': 6.31641,
          'snow_depth': 0,
          'clouds': 94,
          'ts': 1625544060,
          'sunrise_ts': 1625565455,
          'app_min_temp': 23.1,
          'wind_spd': 2.85198,
          'pop': 10,
          'wind_cdir_full': 'south-southwest',
          'slp': 1013.75,
          'moon_phase_lunation': 0.9,
          'valid_date': '2021-07-06',
          'app_max_temp': 36.2,
          'vis': 24.128,
          'dewpt': 19.9,
          'snow': 0,
          'uv': 3.17516,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 201,
          'max_dhi': null,
          'clouds_hi': 44,
          'precip': 0.375,
          'low_temp': 24.6,
          'max_temp': 35.7,
          'moonset_ts': 1625612355,
          'datetime': '2021-07-06',
          'temp': 28.5,
          'min_temp': 22.5,
          'clouds_mid': 5,
          'clouds_low': 51
        },
        {
          'moonrise_ts': 1625644168,
          'wind_cdir': 'NW',
          'rh': 88,
          'pres': 996.25,
          'high_temp': 27.1,
          'sunset_ts': 1625704775,
          'ozone': 303.625,
          'moon_phase': 0.0109337,
          'wind_gust_spd': 0.913574,
          'snow_depth': 0,
          'clouds': 100,
          'ts': 1625630460,
          'sunrise_ts': 1625651890,
          'app_min_temp': 23.5,
          'wind_spd': 0.878217,
          'pop': 65,
          'wind_cdir_full': 'northwest',
          'slp': 1016.5,
          'moon_phase_lunation': 0.93,
          'valid_date': '2021-07-07',
          'app_max_temp': 26.3,
          'vis': 16.544,
          'dewpt': 22,
          'snow': 0,
          'uv': 3.16761,
          'weather': {
            'icon': 'r01d',
            'code': 500,
            'description': 'Light rain'
          },
          'wind_dir': 307,
          'max_dhi': null,
          'clouds_hi': 100,
          'precip': 5.0625,
          'low_temp': 20.5,
          'max_temp': 27.1,
          'moonset_ts': 1625702112,
          'datetime': '2021-07-07',
          'temp': 24.1,
          'min_temp': 20.5,
          'clouds_mid': 49,
          'clouds_low': 17
        },
        {
          'moonrise_ts': 1625733075,
          'wind_cdir': 'E',
          'rh': 73,
          'pres': 998.75,
          'high_temp': 30.9,
          'sunset_ts': 1625791157,
          'ozone': 316.125,
          'moon_phase': 0.000723169,
          'wind_gust_spd': 2.00391,
          'snow_depth': 0,
          'clouds': 100,
          'ts': 1625716860,
          'sunrise_ts': 1625738326,
          'app_min_temp': 21.2,
          'wind_spd': 1.02584,
          'pop': 30,
          'wind_cdir_full': 'east',
          'slp': 1019,
          'moon_phase_lunation': 0.96,
          'valid_date': '2021-07-08',
          'app_max_temp': 31.5,
          'vis': 24.128,
          'dewpt': 19.4,
          'snow': 0,
          'uv': 3.15457,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 91,
          'max_dhi': null,
          'clouds_hi': 99,
          'precip': 1.4375,
          'low_temp': 20.7,
          'max_temp': 30.9,
          'moonset_ts': 1625791614,
          'datetime': '2021-07-08',
          'temp': 25.5,
          'min_temp': 20.5,
          'clouds_mid': 52,
          'clouds_low': 55
        },
        {
          'moonrise_ts': 1625822394,
          'wind_cdir': 'NW',
          'rh': 70,
          'pres': 1000,
          'high_temp': 32.5,
          'sunset_ts': 1625877536,
          'ozone': 314.25,
          'moon_phase': 0.000723169,
          'wind_gust_spd': 1.01367,
          'snow_depth': 0,
          'clouds': 100,
          'ts': 1625803260,
          'sunrise_ts': 1625824763,
          'app_min_temp': 21.3,
          'wind_spd': 0.822074,
          'pop': 60,
          'wind_cdir_full': 'northwest',
          'slp': 1020.25,
          'moon_phase_lunation': 1,
          'valid_date': '2021-07-09',
          'app_max_temp': 34.3,
          'vis': 24.128,
          'dewpt': 19.6,
          'snow': 0,
          'uv': 3.15371,
          'weather': {
            'icon': 'c04d',
            'code': 804,
            'description': 'Overcast clouds'
          },
          'wind_dir': 310,
          'max_dhi': null,
          'clouds_hi': 100,
          'precip': 4.4375,
          'low_temp': 22.6,
          'max_temp': 32.5,
          'moonset_ts': 1625878014,
          'datetime': '2021-07-09',
          'temp': 26.6,
          'min_temp': 20.7,
          'clouds_mid': 60,
          'clouds_low': 32
        }
      ],
      'city_name': 'Free Union',
      'lon': -78.54,
      'timezone': 'America/New_York',
      'lat': 38.12,
      'country_code': 'US',
      'state_code': 'VA'
    };

    const actual = weatherMunger(input);

    expect(actual).toEqual(expectation);
  });

  test('takes in review data and turns it into a user friendly object', () => {
    const expectation = [
      {
        name: expect.any(String),
        image_url: expect.any(String),
        rating: expect.any(Number),
        url: expect.any(String)
      }
    ];

    const input = {
      'businesses': [
        {
          'id': 'XeVsGODZ48qzRL3nH61UZw',
          'alias': 'down-south-seafood-midland',
          'name': 'Down South Seafood',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/DhIUuCeQxUGGUxrgpQSrxQ/o.jpg',
          'is_closed': false,
          'url': 'https://www.yelp.com/biz/down-south-seafood-midland?adjust_creative=KXWggMsjK6LLZhYXzc_W3Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=KXWggMsjK6LLZhYXzc_W3Q',
          'review_count': 5,
          'categories': [
            {
              'alias': 'foodtrucks',
              'title': 'Food Trucks'
            },
            {
              'alias': 'seafood',
              'title': 'Seafood'
            },
            {
              'alias': 'cajun',
              'title': 'Cajun/Creole'
            }
          ],
          'rating': 4.0,
          'coordinates': {
            'latitude': 32.0555791,
            'longitude': -102.2319048
          },
          'transactions': [],
          'location': {
            'address1': '',
            'address2': '',
            'address3': '',
            'city': 'Midland',
            'zip_code': '79707',
            'country': 'US',
            'state': 'TX',
            'display_address': [
              'Midland, TX 79707'
            ]
          },
          'phone': '',
          'display_phone': '',
          'distance': 32066.619084251306
        }
      ],
      'total': 1,
      'region': {
        'center': {
          'longitude': -102.0103767,
          'latitude': 31.83688
        }
      }
    };
    
    const actual = reviewMunger(input);

    expect(actual).toEqual(expectation);
  });

});