int ledLeft = 10;
int ledRight = 9;
int brightnessCurrent = 10;
int brightnessMin = 10;
int brightnessMax = 40;
int fadeAmount = 1;
int framerate = 1000 / 20;

void setup() {
  pinMode(ledLeft, OUTPUT);
  pinMode(ledRight, OUTPUT);
}

void loop() {
  analogWrite(ledLeft, brightnessCurrent);
  analogWrite(ledRight, brightnessCurrent);
  brightnessCurrent = brightnessCurrent + fadeAmount;
  if (brightnessCurrent == brightnessMin || brightnessCurrent == brightnessMax) {
    fadeAmount = -fadeAmount ;
  }
  delay(framerate);
}

