var OBDReader = require('serial-obd');
var options = {};
options.baudrate = 9600;
var serialOBDReader = new OBDReader('/dev/tty.wchusbserial1410', options);
var dataReceivedMarker = {};

serialOBDReader.on('dataReceived', function (data) {
  console.log(data);
  dataReceivedMarker = data;
});

serialOBDReader.on('connected', function (data) {
  console.log('Serial OBD connected')
  serialOBDReader.serial.write('ATZ\r')
  // this.addPoller("vss");
  // this.addPoller("rpm");
  // this.addPoller("temp");
  // this.addPoller("load_pct");
  // this.addPoller("map");
  // this.addPoller("frp");

  this.startPolling(2000); //Polls all added pollers each 2000 ms.
});

serialOBDReader.connect();
