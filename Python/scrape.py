import csv
import requests
import bs4 as BeautifulSoup


with open("C:/Users/anand/OneDrive/Desktop/abccz.csv", mode="r") as file:
   
    csvFile = csv.reader(file)

    
    for lines in csvFile:
        t=lines[0]
        # url=f"https://www.acnc.gov.au/charity/charities?search=41936390525"
        
        # res=requests.get(url)
        # if(res.status_code==200):
        #     html_content=res.content
        #     soup=BeautifulSoup(html_content,"html.parser")
        #     print(soup)
        #     break
        # else:
        #     print(f"Failed to retrieve data for ABN {t}. Status code: {res.status_code}")
		
        print(t)
