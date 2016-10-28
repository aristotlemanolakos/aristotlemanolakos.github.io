var neighborhoods = [
  {lat: 32.96179, lng: -96.829169},
{lat: 34.15334, lng: -118.761676},
{lat: 59.480277, lng: 18.310783},
{lat: 41.081445, lng: -81.519005},
{lat: 42.652579, lng: -73.756232},
{lat: 35.085334, lng: -106.605553},
{lat: 38.804836, lng: -77.046921},
{lat: 42.16558, lng: -88.294249},
{lat: 33.103174, lng: -96.67055},
{lat: 42.353904, lng: -71.133711},
{lat: 34.075376, lng: -84.29409},
{lat: 29.423847, lng: -95.244101},
{lat: 35.221997, lng: -101.831297},
{lat: 31.945367, lng: 35.928372},
{lat: 33.835293, lng: -117.914504},
{lat: 61.218056, lng: -149.900278},
{lat: 51.211198, lng: -1.491923},
{lat: 29.16941, lng: -95.431885},
{lat: 39.933364, lng: 32.859742},
{lat: 42.280826, lng: -83.743038},
{lat: 41.278454, lng: -101.814404},
{lat: 38.004921, lng: -121.805789},
{lat: 34.139729, lng: -118.035345},
{lat: 40.866517, lng: -124.08284},
{lat: 33.121232, lng: -97.183347},
{lat: 38.87997, lng: -77.10677},
{lat: 42.08836, lng: -87.980627},
{lat: 35.118587, lng: -120.590725},
{lat: 39.802764, lng: -105.087484},
{lat: 39.043757, lng: -77.487442},
{lat: 35.595058, lng: -82.551487},
{lat: 46.187884, lng: -123.831253},
{lat: 33.951935, lng: -83.357567},
{lat: 33.748995, lng: -84.387982},
{lat: 33.473498, lng: -82.010515},
{lat: 39.729432, lng: -104.83192},
{lat: 33.812606, lng: -84.634378},
{lat: 30.267153, lng: -97.743061},
{lat: 33.435598, lng: -112.349602},
{lat: 40.013142, lng: -75.230404},
{lat: 39.290385, lng: -76.612189},
{lat: 41.385064, lng: 2.173403},
{lat: 51.588497, lng: 0.080808},
{lat: 30.110495, lng: -97.31527},
{lat: 30.458283, lng: -91.14032},
{lat: 30.308808, lng: -89.330046},
{lat: 40.725099, lng: -73.245395},
{lat: 43.492949, lng: -1.474841},
{lat: 29.735505, lng: -94.977427},
{lat: 30.080174, lng: -94.126556},
{lat: 32.844017, lng: -97.143067},
{lat: 31.134411, lng: -97.524724},
{lat: 36.920425, lng: -104.394007},
{lat: 29.705786, lng: -95.45883},
{lat: 38.52005, lng: -89.983993},
{lat: 47.610377, lng: -122.200679},
{lat: 33.881682, lng: -118.117012},
{lat: 48.74908, lng: -122.478147},
{lat: 17.251011, lng: -88.75902},
{lat: 32.445975, lng: -95.703852},
{lat: 36.372854, lng: -94.208817},
{lat: 37.871593, lng: -122.272747},
{lat: 52.520007, lng: 13.404954},
{lat: 40.625932, lng: -75.370458},
{lat: 34.07362, lng: -118.400356},
{lat: 30.396032, lng: -88.885308},
{lat: 33.520661, lng: -86.80249},
{lat: 44.294683, lng: -90.851531},
{lat: 37.229573, lng: -80.413939},
{lat: 44.840798, lng: -93.29828},
{lat: 39.016951, lng: -94.281615},
{lat: 29.794664, lng: -98.73197},
{lat: 41.698642, lng: -88.068396},
{lat: 36.216795, lng: -81.674552},
{lat: 39.008975, lng: -123.367155},
{lat: 42.360083, lng: -71.05888},
{lat: 47.76232, lng: -122.205403},
{lat: 40.014986, lng: -105.270546},
{lat: 36.968522, lng: -86.480804},
{lat: 27.937801, lng: -82.285925},
{lat: 41.279903, lng: -72.814118},
{lat: 30.273532, lng: -91.899284},
{lat: 30.166883, lng: -96.397744},
{lat: 36.033116, lng: -86.782777},
{lat: 30.020768, lng: -93.845726},
{lat: 50.82253, lng: -0.137163},
{lat: 50.82253, lng: -0.137163},
{lat: 42.083434, lng: -71.018379},
{lat: 36.060949, lng: -95.797453},
{lat: 42.331764, lng: -71.121163},
{lat: 40.678178, lng: -73.944158},
{lat: 29.786064, lng: -95.951066},
{lat: 39.967933, lng: -75.347048},
{lat: 39.920541, lng: -105.08665},
{lat: 25.901747, lng: -97.497484},
{lat: 31.149953, lng: -81.491489},
{lat: 30.674364, lng: -96.369963},
{lat: 33.37032, lng: -112.583777},
{lat: 30.081723, lng: -97.842893},
{lat: 33.867514, lng: -117.998118},
{lat: 28.393619, lng: -81.538684},
{lat: -34.603684, lng: -58.381559},
{lat: 42.886447, lng: -78.878369},
{lat: 34.180839, lng: -118.308966},
{lat: 32.542082, lng: -97.320849},
{lat: 37.57787, lng: -122.34809},
{lat: 44.475883, lng: -73.212072},
{lat: 44.767742, lng: -93.277723},
{lat: 34.136721, lng: -118.661481},
{lat: 51.048615, lng: -114.070846},
{lat: 34.003904, lng: -117.061976},
{lat: 42.373616, lng: -71.109733},
{lat: 34.208254, lng: -118.605861},
{lat: 39.978371, lng: -86.118043},
{lat: 41.912529, lng: -88.134793},
{lat: 32.975642, lng: -96.889964},
{lat: 32.975642, lng: -96.889964},
{lat: 35.79154, lng: -78.781117},
{lat: 32.879502, lng: -111.757352},
{lat: 37.694097, lng: -122.086352},
{lat: 33.965709, lng: -81.073983},
{lat: 38.868314, lng: -80.836445},
{lat: 42.534899, lng: -92.445316},
{lat: 30.505198, lng: -97.820289},
{lat: 41.97788, lng: -91.665623},
{lat: 41.890655, lng: -71.392278},
{lat: 33.858348, lng: -118.064787},
{lat: 39.871777, lng: -75.591318},
{lat: 40.11642, lng: -88.243383},
{lat: 33.30616, lng: -111.84125},
{lat: 29.77606, lng: -95.114653},
{lat: 38.894279, lng: -77.431099},
{lat: 35.9132, lng: -79.055845},
{lat: 32.776475, lng: -79.931051},
{lat: 35.227087, lng: -80.843127},
{lat: 35.04563, lng: -85.30968},
{lat: 39.926813, lng: -75.024631},
{lat: 38.663108, lng: -90.577067},
{lat: 42.33038, lng: -71.166187},
{lat: 41.878114, lng: -87.629798},
{lat: 42.148704, lng: -72.607867},
{lat: 34.012235, lng: -117.688944},
{lat: 32.640054, lng: -117.084196},
{lat: 29.561618, lng: -98.226955},
{lat: 39.103118, lng: -84.51202},
{lat: 33.809549, lng: -84.239643},
{lat: 27.965853, lng: -82.800103},
{lat: 41.49932, lng: -81.694361},
{lat: 40.858433, lng: -74.163755},
{lat: 36.825228, lng: -119.702919},
{lat: 39.10073, lng: -120.953276},
{lat: 38.989697, lng: -76.93776},
{lat: 30.627977, lng: -96.334407},
{lat: 32.88096, lng: -97.155012},
{lat: 35.042036, lng: -89.664527},
{lat: 38.833882, lng: -104.821363},
{lat: 34.073902, lng: -117.313655},
{lat: 34.00071, lng: -81.034814},
{lat: 39.961176, lng: -82.998794},
{lat: 39.80832, lng: -104.933868},
{lat: 33.895849, lng: -118.220071},
{lat: -36.820135, lng: -73.04439},
{lat: 37.977978, lng: -122.031073},
{lat: 30.311877, lng: -95.456051},
{lat: 29.518008, lng: -98.316124},
{lat: 33.66761, lng: -84.01769},
{lat: -33.919, lng: 151.2555},
{lat: 55.676097, lng: 12.568337},
{lat: 32.954569, lng: -97.015008},
{lat: 25.72149, lng: -80.268384},
{lat: 40.518401, lng: -80.166725},
{lat: 37.888175, lng: -4.779383},
{lat: 27.800583, lng: -97.396381},
{lat: 35.23782, lng: -106.606693},
{lat: 33.641132, lng: -117.918669},
{lat: 41.779823, lng: -71.43728},
{lat: 29.911889, lng: -95.062151},
{lat: 18.92421, lng: -99.221566},
{lat: 34.021122, lng: -118.396466},
{lat: 29.971691, lng: -95.693786},
{lat: 34.526147, lng: -83.984395},
{lat: 32.776664, lng: -96.796988},
{lat: 34.769802, lng: -84.970223},
{lat: 37.687924, lng: -122.470208},
{lat: 37.821593, lng: -121.999961},
{lat: 41.077191, lng: -73.468686},
{lat: 39.758948, lng: -84.191607},
{lat: 39.758948, lng: -84.191607},
{lat: 42.598726, lng: -5.567096},
{lat: 52.075796, lng: 5.031982},
{lat: 29.028318, lng: -81.303118},
{lat: 33.774828, lng: -84.296312},
{lat: 43.303306, lng: -91.785709},
{lat: 29.454665, lng: -98.662308},
{lat: 25.656484, lng: -100.36944},
{lat: 26.461463, lng: -80.07282},
{lat: 30.486856, lng: -90.956212},
{lat: 33.214841, lng: -97.133068},
{lat: 39.739236, lng: -104.990251},
{lat: 42.903948, lng: -78.692251},
{lat: 41.600545, lng: -93.609106},
{lat: 42.331427, lng: -83.045754},
{lat: 29.139963, lng: -98.905306},
{lat: 29.460788, lng: -95.051317},
{lat: 41.014542, lng: -73.872635},
{lat: 40.894006, lng: -73.912023},
{lat: 41.808919, lng: -88.011175},
{lat: 40.310106, lng: -75.129894},
{lat: 30.123275, lng: -98.031589},
{lat: 30.190207, lng: -98.086678},
{lat: 40.099229, lng: -83.114077},
{lat: 46.786672, lng: -92.100485},
{lat: 34.502303, lng: -97.957813},
{lat: 32.6518, lng: -96.908337},
{lat: 44.429409, lng: -93.201883},
{lat: 24.02772, lng: -104.653176},
{lat: 35.994033, lng: -78.898619},
{lat: 40.773751, lng: -73.87131},
{lat: 35.280117, lng: -82.422063},
{lat: 41.763422, lng: -72.612834},
{lat: 42.736979, lng: -84.483865},
{lat: 40.71399, lng: -73.559016},
{lat: 26.301737, lng: -98.163343},
{lat: 35.652832, lng: -97.478095},
{lat: 53.544389, lng: -113.490927},
{lat: 41.795604, lng: -86.080838},
{lat: 45.046381, lng: -87.29705},
{lat: 31.761878, lng: -106.485022},
{lat: 33.91918, lng: -118.416465},
{lat: 41.89225, lng: -88.472301},
{lat: 41.658086, lng: -90.584582},
{lat: 35.411994, lng: -99.404259},
{lat: 42.003918, lng: -87.970346},
{lat: 39.197879, lng: -76.762507},
{lat: 41.899474, lng: -87.940342},
{lat: 44.966971, lng: -63.506419},
{lat: -37.887, lng: 145.006},
{lat: 39.647765, lng: -104.98776},
{lat: 39.878115, lng: -83.936876},
{lat: 31.891272, lng: -85.145488},
{lat: 44.052069, lng: -123.086754},
{lat: 32.837073, lng: -97.081954},
{lat: 32.30709, lng: -96.006635},
{lat: 42.045072, lng: -87.687697},
{lat: 37.971559, lng: -87.57109},
{lat: 47.978985, lng: -122.202079},
{lat: 39.633321, lng: -105.317215},
{lat: 38.644626, lng: -121.272172},
{lat: 38.846224, lng: -77.306373},
{lat: 38.249358, lng: -122.039966},
{lat: 36.728058, lng: -108.218686},
{lat: 35.052664, lng: -78.878358},
{lat: 47.322322, lng: -122.312622},
{lat: 35.198284, lng: -111.651302},
{lat: 43.012527, lng: -83.687456},
{lat: 43.76956, lng: 11.255814},
{lat: 33.014567, lng: -97.096955},
{lat: 40.767499, lng: -73.833079},
{lat: 30.406587, lng: -87.683597},
{lat: 34.092234, lng: -117.435048},
{lat: 26.122439, lng: -80.137317},
{lat: 35.00737, lng: -80.945076},
{lat: 26.640628, lng: -81.872308},
{lat: 41.079273, lng: -85.139351},
{lat: 32.755488, lng: -97.330766},
{lat: 44.227173, lng: -71.747907},
{lat: 38.200906, lng: -84.873284},
{lat: 50.110922, lng: 8.682127},
{lat: 35.925064, lng: -86.86889},
{lat: 37.54827, lng: -121.988572},
{lat: 36.746842, lng: -119.772587},
{lat: 29.5294, lng: -95.201045},
{lat: 33.150674, lng: -96.823612},
{lat: 29.651634, lng: -82.324826},
{lat: 39.143441, lng: -77.20137},
{lat: 29.301348, lng: -94.797696},
{lat: 33.773905, lng: -117.941448},
{lat: 38.810841, lng: -94.927187},
{lat: 32.912624, lng: -96.638883},
{lat: 25.664585, lng: -100.40096},
{lat: 30.633262, lng: -97.677984},
{lat: 39.173162, lng: -77.27165},
{lat: 39.830929, lng: -77.231095},
{lat: 33.352826, lng: -111.789027},
{lat: 41.153947, lng: -80.701466},
{lat: 53.470496, lng: -2.496619},
{lat: 32.234587, lng: -97.755306},
{lat: 34.142508, lng: -118.255075},
{lat: 41.910307, lng: -88.071735},
{lat: 51.864245, lng: -2.238156},
{lat: 39.755543, lng: -105.2211},
{lat: 32.745965, lng: -96.997785},
{lat: 42.96336, lng: -85.668086},
{lat: 42.439007, lng: -123.328392},
{lat: 32.934292, lng: -97.078065},
{lat: 40.423314, lng: -104.709132},
{lat: 34.852618, lng: -82.39401},
{lat: 41.026242, lng: -73.628196},
{lat: 45.500136, lng: -122.430201},
{lat: 41.743409, lng: -92.723246},
{lat: 39.853206, lng: -82.888276},
{lat: 33.450416, lng: -82.198176},
{lat: 20.659699, lng: -103.349609},
{lat: 14.634915, lng: -90.506882},
{lat: 53.156314, lng: -1.575022},
{lat: 39.641763, lng: -77.719993},
{lat: 40.935654, lng: -74.186256},
{lat: 44.648863, lng: -63.57532},
{lat: 32.799574, lng: -97.269182},
{lat: 41.383878, lng: -72.902606},
{lat: 41.583369, lng: -87.500041},
{lat: 37.029869, lng: -76.345222},
{lat: 38.449569, lng: -78.868916},
{lat: 43.105008, lng: -88.34204},
{lat: 44.744329, lng: -92.851371},
{lat: 42.776202, lng: -71.07728},
{lat: 37.668821, lng: -122.080796},
{lat: 38.610466, lng: -122.869161},
{lat: 46.588371, lng: -112.024505},
{lat: 36.039525, lng: -114.981721},
{lat: 10.473523, lng: -84.016742},
{lat: 29.072967, lng: -110.955919},
{lat: 38.969555, lng: -77.386098},
{lat: 25.857596, lng: -80.278106},
{lat: 41.725588, lng: -87.825055},
{lat: 40.033396, lng: -83.158245},
{lat: 45.522894, lng: -122.989827},
{lat: 45.522894, lng: -122.989827},
{lat: 38.280915, lng: -82.920167},
{lat: 26.011201, lng: -80.14949},
{lat: 33.667062, lng: -93.591566},
{lat: 41.583982, lng: -73.808744},
{lat: 34.531322, lng: -93.063741},
{lat: 29.59577, lng: -90.719535},
{lat: 29.760427, lng: -95.369803},
{lat: 29.998831, lng: -95.262155},
{lat: 34.730369, lng: -86.586104},
{lat: 32.823462, lng: -97.170568},
{lat: 41.76676, lng: -73.901525},
{lat: 39.091116, lng: -94.415507},
{lat: 39.768403, lng: -86.158068},
{lat: 42.294205, lng: -83.30993},
{lat: 41.661128, lng: -91.530168},
{lat: 33.683947, lng: -117.794694},
{lat: 32.814018, lng: -96.948894},
{lat: 47.530101, lng: -122.032619},
{lat: 41.008238, lng: 28.978359},
{lat: 41.975029, lng: -88.007291},
{lat: 42.443961, lng: -76.501881},
{lat: 32.298757, lng: -90.18481},
{lat: 30.332184, lng: -81.655651},
{lat: 42.682789, lng: -89.018722},
{lat: 43.089927, lng: -88.710896},
{lat: 40.728157, lng: -74.077642},
{lat: 41.82052, lng: -71.512617},
{lat: 34.134728, lng: -116.313066},
{lat: 42.291707, lng: -85.587229},
{lat: 39.099727, lng: -94.578567},
{lat: 29.785785, lng: -95.824396},
{lat: 40.768434, lng: -74.145421},
{lat: 32.934189, lng: -97.229298},
{lat: 47.75732, lng: -122.244015},
{lat: 46.211246, lng: -119.137234},
{lat: 47.380934, lng: -122.234843},
{lat: 30.047433, lng: -99.140319},
{lat: 31.117119, lng: -97.727796},
{lat: 30.057536, lng: -95.190299},
{lat: 28.291956, lng: -81.407571},
{lat: 35.960638, lng: -83.920739},
{lat: 29.989105, lng: -97.877227},
{lat: 29.665784, lng: -95.019373},
{lat: 34.020011, lng: -117.949508},
{lat: 34.100843, lng: -117.767835},
{lat: 30.22409, lng: -92.019843},
{lat: 30.22409, lng: -92.019843},
{lat: 20.878333, lng: -156.6825},
{lat: 30.226595, lng: -93.217376},
{lat: 29.033858, lng: -95.434386},
{lat: 42.784475, lng: -83.239661},
{lat: 48.015098, lng: -122.063742},
{lat: 42.196969, lng: -88.093411},
{lat: 28.039465, lng: -81.949804},
{lat: 34.142544, lng: -109.960384},
{lat: 44.649687, lng: -93.24272},
{lat: 39.70471, lng: -105.081373},
{lat: 39.70471, lng: -105.081373}
];

var markers = [];
var map;

function initMap() {
    // Styles a map in night mode.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 29.761993,
            lng: -95.366302
        },
        zoom: 2,
        mapTypeControl: false,
        streetViewControl: false,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        scaleControl: false,
        styles: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }, {
                "color": "#ff0000"
            }]
        }, {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 20
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ff0000"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "off"
            }, {
                "saturation": "-60"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }, {
                "color": "#ffffff"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }, {
                "color": "#fffafa"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [{
                "color": "#00ffff"
            }, {
                "visibility": "on"
            }, {
                "lightness": "-52"
            }]
        }, {
            "featureType": "landscape.natural.landcover",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }, {
                "color": "#000000"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#15191b"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }]
    });
drop();
  }

  function drop() {
  clearMarkers();
  for (var i = 0; i < neighborhoods.length; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 50);
  }
}

function addMarkerWithTimeout(position, timeout) {
      var image = {
        url: 'dot.png',
        scaledSize: new google.maps.Size(2, 2),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP,
     // icon: image
    }));
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}


/*
    var infowindow = new google.maps.InfoWindow();
    var i;

    for (i = 0; i < locations.length; i++) {
      setTimeout(function() {
        var loc = locations[i];
        var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: new{lat: loc[1], lng: loc[2]},
            icon: image,
            map: map
        });
      }, i * 200);
    }

*/


