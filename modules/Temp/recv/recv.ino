#include <DHT.h>

#define DHTPIN A2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

String input = "";
String cmd = "temp";
String response = "";

void setup() {
  Serial.begin(9600);
  dht.begin();
}
void loop() {
  if(Serial.available()) {
    input = Serial.readStringUntil("\n");
  }
  //Serial.println(input);
  if(Serial.available()==0 && input == cmd) {
    float h = dht.readHumidity();
    float t = dht.readTemperature();
    dht.read(DHTPIN);

    response = "{\"Humidity\":"+(String)h + ","+"\"Temperature\":"+(String)t +"}";
    response = (String)h +","+(String)t;
    Serial.println(response);
    input = "";
  }
}
