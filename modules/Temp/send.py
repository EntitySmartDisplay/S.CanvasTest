"""
import serial

ser = serial.Serial()
ser.baudrate = 9600
ser.port = 'COM1'
ser.open()
exp.ser = serial.Serial('COM1', baudrate=9600, timeout = None)
print(exp.ser)


"""
import serial

port = 'COM5'
brate = 9600 #boudrate
cmd = 'temp'

seri = serial.Serial(port, baudrate = brate, timeout = None)
#print(seri.name)

seri.write(cmd.encode())

a = 1

while a:
    if seri.in_waiting != 0 :
        content = seri.readline()
        print(content[:-2].decode())
        a = 0
        

