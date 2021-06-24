const { locationMunger, weatherMunger } = require('../lib/munge-utils.js');

require('dotenv').config();


describe('munge functions', () => {

  test('takes in location data and turns it into a user friendly object', async() => {
    
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

});