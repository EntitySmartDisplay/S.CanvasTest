"""
import serial

ser = serial.Serial()
ser.baudrate = 9600
ser.port = 'COM1'
ser.open()
exp.ser = serial.Serial('COM1', baudrate=9600, timeout = None)
print(exp.ser)


"""
import pymysql
import serial
import re

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
        #print(content)


        re_content = str(content)
        re_content2 = re_content.replace("b","")
        re_content = re_content2.replace("'","")
        re_content2 = re_content.replace("r","")
        re_content = re_content2.replace("n","")
        content = re_content.replace("\\","")
        print(content)
        arr_content = content.split(',')
        #print(arr_content[0])
        #print(arr_content[1])

        conn = pymysql.connect( host = "ec2-3-112-243-194.ap-northeast-1.compute.amazonaws.com",
                        user = "user1",
                        db= "pri1",
                        password = "tkdlek12",
                        port = 3306)
        curs = conn.cursor(pymysql.cursors.DictCursor)

        temp = arr_content[1]
        hum = arr_content[0]
        sql = "INSERT INTO scanvastemp(temp,hum)VALUES(%s,%s)"
        curs.execute(sql,(temp,hum))
        conn.commit()

        conn.close()
        a = 0
        

        








