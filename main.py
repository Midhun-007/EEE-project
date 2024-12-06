import serial
from datetime import datetime

# Get the current date and time


# Extract time

arduino = serial.Serial(port='COM7', baudrate=9600, timeout=1)

while True:
    data = arduino.readline().decode('utf-8').strip()
    now = datetime.now()
    formatted_time = now.strftime("Time: %H:%M:%S, Date: %d-%m-%Y")
    if data:
        f=open("f1.txt","w")
        
        
        f.write(data+formatted_time)
        print(data+formatted_time)
        f.close()

