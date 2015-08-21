# OBD II Scan Tool Setup

## OSX Drivers

Installation tips:
http://www.totalcardiagnostics.com/support/Knowledgebase/Article/View/19/0/how-to-install-elm327-usbbluetooth-on-mac-and-obd-software

CP210x driver:
https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx

PL2303 driver:
http://www.prolific.com.tw/US/ShowProduct.aspx?p_id=229&pcid=41

Chip detector:
https://www.mac-usb-serial.com/

CH-341 driver:
http://www.wch.cn/download/CH341SER_MAC_ZIP.html

CH-341 driver (alternative):
http://javacolors.blogspot.sg/2014/08/dccduino-usb-drivers-ch340-ch341-chipset.html

## OSX Command Line
```shell
# http://apple.stackexchange.com/questions/170105/list-usb-devices-on-osx-command-line
system_profiler SPUSBDataType
ioreg -p IOUSB
ls /dev/tty*
sudo nvram boot-args="kext-dev-mode=1"
```
