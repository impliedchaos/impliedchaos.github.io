var icol = [ "red", "blue", "pink", "green", "purple", "orange", "paleblue", "brown", "darkgreen", "yellow" ];

var markers = [
{lat:36.845474,lng:-76.305799,zoom:16,sv:{lat:36.842698,lng:-76.305692,sv:{yaw:20.993199759975653,pitch:-6.17498272080214,zoom:0}},year:1978,loc:"Portsmouth, VA",title:"Naval Hospital",desc:"The Portsmouth Naval Hospital.<br/>Where I was born.",reg:1},
{lat:36.92317,lng:-76.258518,zoom:17,sv:{lat:0},year:1978,loc:"Norfolk, VA",title:"Somewhere in Norfolk",desc:"We lived in a house in Norfolk when I was born.",reg:1},
{lat:33.916367,lng:-117.937363,zoom:19,sv:{lat:33.916496,lng:-117.937347,pov:{yaw:257.5101983405791,pitch:-3.390428472769418,zoom:0}},year:1980,loc:"La Habra, CA",title:"Townhouse in La Habra",desc:"We lived in one of these townhomes in La Habra,<br>or so I'm told, I don't remember a thing.",reg:9},
{lat:41.436751,lng:-72.107102,zoom:18,sv:{lat:0},year:1981,loc:"Uncasville, CT",title:"Apartment in Connecticut",desc:"Our apartment in Uncasville. I don't really have<br/> many memories of this place, except Xmas.",reg:0},
{lat:36.796528,lng:-76.100739,zoom:18,sv:{lat:36.796799,lng:-76.100807,pov:{yaw:161.31465376481924,pitch:0.6369771941599002,zoom:0}},year:1982,loc:"Virginia Beach, VA",title:"Rosemont Townhouse",desc:"Our townhome near Rosemont.  My friend,<br/>Mikey, lived across the street.",reg:1},
{lat:36.807178,lng:-76.106237,zoom:17,sv:{lat:0},year:1984,loc:"Virginia Beach, VA",title:"Somewhere on Campion",desc:"I don't know &mdash; we lived somewhere on Campion Ave.<br/>My friend, DJ, lived around here.",reg:1},
{lat:36.79761,lng:-76.091008,zoom:18,sv:{lat:36.797393,lng:-76.090953,pov:{yaw:348.5890172770336,pitch:-1.0411085003939817,zoom:0}},year:1984,loc:"Virginia Beach, VA",title:"House in Green Run",desc:"Our house in Green Run.  My friend, Charles C.,<br/>lived a few streets outward from us.",reg:1},
{lat:43.232525,lng:-75.877392,zoom:18,sv:{lat:0},year:1985,loc:"Cleveland, NY",title:"Oneida Lake House",desc:"Our lake-front house in Cleveland, NY. My friend,<br/>Eric, lived a little bit down the road.",reg:2},
{lat:35.247442,lng:-106.691666,zoom:17,sv:{lat:0},year:1987,loc:"Rio Rancho, NM",title:"Somewhere in Rio Rancho",desc:"I don't know &mdash; we lived somewhere in Rio Rancho.",reg:3},
{lat:35.204144,lng:-106.709044,zoom:18,sv:{lat:35.203872,lng:-106.709105,pov:{yaw:8.908230031925768,pitch:1.1404029025260678,zoom:0}},year:1987,loc:"Albuquerque, NM",title:"House in Paradise Hills",desc:"Our ranch house in Paradise Hills. My friend, John,<br/>lived across the street.",reg:3},
{lat:37.957767,lng:-121.291165,zoom:16,sv:{lat:0},year:1988,loc:"Stockton, CA",title:"Somewhere in Stockton",desc:"I don't know &mdash; we lived somewhere in Stockton.",reg:9},
{lat:43.28725,lng:-76.145854,zoom:17,sv:{lat:0},year:1988,loc:"Central Square, NY",title:"Somewhere in Central Square",desc:"I don't know &mdash; we lived somewhere in Central Square.<br/>All the kids on the street were friends.",reg:2},
{lat:43.177476,lng:-76.225204,zoom:18,sv:{lat:0},year:1989,loc:"Liverpool, NY",title:"Townhouse in Liverpool",desc:"Our townhome in Liverpool. My friend, Tommy,<br/>lived in the subdivision across Soule Road.",reg:2},
{lat:30.036726,lng:-90.235729,zoom:18,sv:{lat:30.036013,lng:-90.235624,pov:{yaw:328.53176107003344,pitch:3.203470826786602,zoom:0}},year:1991,loc:"Kenner, LA",title:"Apartment in Kenner",desc:"Our apartment in Kenner near the Pontchartrain Center.",reg:4},
{lat:30.015359,lng:-90.277218,zoom:19,sv:{lat:30.015369,lng:-90.277449,pov:{yaw:88.77073324190071,pitch:0.9725943330706788,zoom:0}},year:1991,loc:"Kenner, LA",title:"House in Kenner",desc:"Our house in West Kenner.  My nearest friends,<br/> Cuong and Austin, were both miles away in <br/>the Chateau neighborhood.",reg:4},
{lat:39.162378,lng:-77.185982,zoom:19,sv:{lat:0},year:1993,loc:"Gaithersburg, MD",title:"Metro D.C. Townhouse",desc:"Our townhome in Gaithersburg. My friend,<br/>Jason Z., lived miles away.",reg:0},
{lat:29.969411,lng:-95.537278,zoom:18,sv:{lat:0},year:1995,loc:"Houston,TX",title:"Apartment in Champions",desc:"Our apartment in North West Houston.",reg:5},
{lat:29.694064,lng:-95.652849,zoom:19,sv:{lat:29.694151,lng:-95.653182,pov:{yaw:116.12353006312924,pitch:2.315062888713789,zoom:0}},year:1995,loc:"Houston, TX",title:"House in Mission Bend",desc:"Our house in West Houston. My nearest<br/>friend, Jonathan, lived miles away.",reg:5},
{lat:36.80392,lng:-76.089501,zoom:18,sv:{lat:36.803966,lng:-76.089329,pov:{yaw:244.37989564523696,pitch:0.4691686247045161,zoom:0}},year:1996,loc:"Virginia Beach, VA",title:"My Sister's Apartment",desc:"My sister's first apartment in VA Beach.",reg:1},
{lat:32.528633,lng:-92.653477,zoom:17,sv:{lat:0},year:1996,loc:"Ruston, LA",title:"LA Tech Dormitory Room",desc:"My first dorm room at Louisian Tech.<br/>My friend, Thomas, was in the dorms to the south.",reg:0},
{lat:29.736494,lng:-95.509987,zoom:19,sv:{lat:29.737441,lng:-95.509343,pov:{yaw:201.97357518238096,pitch:4.087910114510342,zoom:0}},year:1998,loc:"Houston, TX",title:"Phil &amp; Dani's Apartment",desc:"Phil and Danielle's apartment at 7979 Westheimer.",reg:5},
{lat:29.718377,lng:-95.547093,zoom:18,sv:{lat:29.717515,lng:-95.545694,pov:{yaw:315.8369385022273,pitch:0.5516895144364065,zoom:0}},year:1998,loc:"Houston, TX",title:"My First Apartment",desc:"My apartment in west Houston.",reg:5},
{lat:30.19604,lng:-92.015412,zoom:18,sv:{lat:0},year:1998,loc:"Lafayette,LA",title:"Lafayette Hilton",desc:"I lived in the Lafayette Hilton<br/>hotel for a few months.",reg:8},
{lat:30.248331,lng:-91.998133,zoom:18,sv:{lat:0},year:1998,loc:"Lafayette, LA",title:"Room in Lafayette",desc:"I rented a room from a crazy old bat<br/>in east Lafayette.",reg:8},
//{lat:30.216415,lng:-92.014645,zoom:18,sv:{lat:0},year:1998,loc:"Lafayette, LA",title:"Bernie &amp; Jong's Apartment",desc:"Bernie and Jong's apartment by the Strip.",reg:8},
{lat:29.629729,lng:-95.506256,zoom:19,sv:{lat:29.62981,lng:-95.507347,pov:{yaw:97.25591143918672,pitch:-3.6010208574970837,zoom:2}},year:1999,loc:"Houston,TX",title:"Richard's Ghetto Duplex",desc:"Richard's duplex in the hood.<br/>Big Worm lived next door.",reg:5},
{lat:33.351269,lng:-111.852847,zoom:18,sv:{lat:0},year:1999,loc:"Chandler, AZ",title:"Somewhere in Chandler",desc:"I don't know &mdash; we lived somewhere in Chandler.<br/>Everything in Phoenix looks the same.",reg:9},
{lat:34.072649,lng:-84.221757,zoom:19,sv:{lat:0},year:1999,loc:"Alpharetta, GA",title:"House in Windward",desc:"Our house in Alpharetta.",reg:6},
{lat:34.037791,lng:-84.324446,zoom:19,sv:{lat:34.040509,lng:-84.326515,pov:{yaw:176.32971006835396,pitch:-1.8801513476709253,zoom:0}},year:2000,loc:"Roswell, GA",title:"Roswell Apartment",desc:"Our apartment in Roswell.",reg:6},
{lat:34.249581,lng:-84.48555,zoom:17,sv:{lat:0},year:2001,loc:"Canton, GA",title:"Somewhere in Canton",desc:"Joey's house, somewhere in Canton.",reg:6},
{lat:34.06936,lng:-84.253829,zoom:19,sv:{lat:34.069831,lng:-84.259045,pov:{yaw:105.2059730485289,pitch:-5.236322736778699,zoom:1}},year:2001,loc:"Alpharetta, GA",title:"My Mom's Apartment",desc:"My mom's apartment in Alpharetta.",reg:6},
{lat:33.961775,lng:-83.964327,zoom:19,sv:{lat:33.961552,lng:-83.964681,pov:{yaw:51.51231000392772,pitch:0.39173828093637775,zoom:1}},year:2002,loc:"Lawrenceville, GA",title:"My Mom's House",desc:"My mom's house way out in Lawrenceville.",reg:6},
{lat:33.971623,lng:-84.205187,zoom:19,sv:{lat:33.969673,lng:-84.208045,pov:{yaw:48.226045155180486,pitch:-2.5513856254924803,zoom:0}},year:2002,loc:"Norcross, GA",title:"Kathy's Apartment",desc:"Kathy's (and mine) apartment in Technology Park in Norcross.",reg:6},
{lat:34.210196,lng:-82.19106,zoom:17,sv:{lat:0},year:2004,loc:"Greenwood, SC",title:"Greenwood Apartment",desc:"Our apartment in Greenwood, SC.",reg:7},
{lat:34.143866,lng:-82.183056,zoom:17,sv:{lat:0},year:2005,loc:"Greenwood, SC",title:"Greenwood House",desc:"Our first house, in Greenwood.",reg:7} ];

var regions= [
{lat:0},
{lat:36.8702828439848,lng:-76.1956787109375,zoom:11,desc:"Tidewater Area"},
{lat:43.16211758327644,lng:-76.04324340820312,zoom:10,desc:"Syracuse Area"},
{lat:35.206355445199605,lng:-106.65458679199219,zoom:11,desc:"Albuquerque Area"},
{lat:29.98408146807157,lng:-90.17578125,zoom:11,desc:"New Orleans Area"},
{lat:29.8239655668307,lng:-95.47943115234375,zoom:10,desc:"Houston Area"},
{lat:33.96386430820156,lng:-84.21295166015625,zoom:9,desc:"Atlanta Area"},
{lat:34.18454183141725,lng:-82.15198516845703,zoom:12,desc:"Greenwood Area"},
{lat:30.224958377428475,lng:-92.02320098876953,zoom:12,desc:"Lafayette Area"},
{lat:36.63316209558658,lng:-118.6962890625,zoom:5,desc:"West Coast"}
];

var navhtml = '<p class="tit"><a class="h" href="javascript:init();">Overview</a></p>';

var map;
var sv;

function bigBoy() {
  sv.setLocationAndPOV(new GLatLng(41.41414,-81.633152),{yaw:162.03620454246902,pitch:3.8343554932153885,zoom:1});
}

function mMarker(point,info,index) {
  markers[index].icon = new GIcon(G_DEFAULT_ICON);
  markers[index].icon.image = "icons/"+icol[Math.floor(index / 26)]+"_Marker"+String.fromCharCode("A".charCodeAt(0) + (index % 26))+".png";
  var mOpts = { icon: markers[index].icon };
  var g = new GMarker(point, mOpts);
  GEvent.addListener(g, "click",
    function() {
      if (sv.isHidden()) {
        sv.show();
      }
      if (markers[index].sv.lat) {
        sv.setLocationAndPOV(new GLatLng(markers[index].sv.lat,markers[index].sv.lng),markers[index].sv.pov);
      } else {
        bigBoy();
      }
      map.setZoom(markers[index].zoom);
      map.panTo(point);
      this.openInfoWindowHtml(info);
    }
  );
  if (markers[index].sv.lat) {
    navhtml += '<p>';
  } else {
    navhtml += '<p class="nsv">';
  }
  navhtml += '<a class="h" href="javascript:vPnt('+index+')">'+markers[index].title+'</a><img alt="icon" src="'+markers[index].icon.image+'"/>Location: ';
  if (markers[index].reg) {
    navhtml += '<a href="javascript:vRgn('+markers[index].reg+')">';
  }
  navhtml += markers[index].loc;
  if (markers[index].reg) {
    navhtml += '</a>';
  }
  navhtml += '<br/>Year: '+markers[index].year+'</p>';
  markers[index].gobj=g;
  return g;
}

function vPnt(index) {
  GEvent.trigger(markers[index].gobj, "click");
}

function vRgn(index) {
  map.closeInfoWindow();
  map.setZoom(regions[index].zoom);
  map.panTo(new GLatLng(regions[index].lat,regions[index].lng));
  //bigBoy();
  document.getElementById("sv").innerHTML = "<br/><br/><br/><br/>"+regions[index].desc;
  sv.hide();
}

function init() {
  map.setCenter(new GLatLng(37.857507,-96.855469), 3);
  map.closeInfoWindow();
  document.getElementById("sv").innerHTML = "<br/><br/><br/><br/>Overview";
  sv.hide();
}

//Main Progam
if (GBrowserIsCompatible()) {
  // Setup the Map.
  map = new GMap2(document.getElementById("map"));
  map.setMapType(G_HYBRID_MAP);
  map.addControl(new GLargeMapControl());
  map.addControl(new GMapTypeControl());

  // Setup the Street View
  sv = new GStreetviewPanorama(document.getElementById("sv"));

  // Initialize Them
  init();

  // Setup the markers.
  for (var i = 0; i < markers.length; i++) {
    var p = new GLatLng(markers[i].lat,markers[i].lng);
    var h = '<p style="text-align:center;margin:0;font-size:larger;">'+markers[i].title+"</p>"+markers[i].desc;
    map.addOverlay(mMarker(p,h,i));
  }

  document.getElementById("nav").innerHTML = navhtml;
}
