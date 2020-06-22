import pymysql 


conn = pymysql.connect( host= "ec2-3-112-243-194.ap-northeast-1.compute.amazonaws.com", 
                        user= "user1",
                        password= "tkdlek12",
                        db= "pri1",
                        port= 3306, 
                        charset= 'utf8')
curs = conn.cursor(pymysql.cursors.DictCursor)

sql = "SELECT imgurl FROM scanvasdb order by id desc limit 1"
curs.execute(sql)
rows = curs.fetchall()

conn.close()

re_rows = str(rows)
re2_rows = re_rows.replace("'imgurl':","")
re_rows = re2_rows.replace("[","")
re2_rows = re_rows.replace("]","")
re_rows = re2_rows.replace("{","")
re2_rows = re_rows.replace("}","")
re_rows = re2_rows.replace(" ","")
rows = re_rows.replace("'","")

print(rows)
