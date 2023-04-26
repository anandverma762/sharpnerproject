import csv
import requests
from bs4 import BeautifulSoup
from collections import defaultdict

# Function to scrape names of associated individuals from People tab
def scrape_people_tab(abn):
    url = f'https://www.acnc.gov.au/charity/{abn}/people'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    people = []
    try:
        # Find and extract names of associated individuals
        people_section = soup.find('div', {'id': 'view-people'})
        if people_section:
            people_list = people_section.find('ul', {'class': 'people-list'})
            if people_list:
                people_items = people_list.find_all('li')
                for item in people_items:
                    people.append(item.text.strip())
    except Exception as e:
        print(f'Error scraping People tab for ABN {abn}: {e}')
        with open('scrape.log', 'a') as log_file:
            log_file.write(f'Error scraping People tab for ABN {abn}: {e}\n')
    return people

# Read ABN numbers from CSV file
with open('C:/Users/anand/OneDrive/Desktop/abccz.csv', mode='r') as file:
    csv_reader = csv.reader(file)
    next(csv_reader) # Skip header row

    # Create dictionary to track associations for each person
    associations_dict = defaultdict(int)

    for row in csv_reader:
        abn = row[0]
        print(f'Scraping ABN {abn}...')
        people = scrape_people_tab(abn)
        for person in people:
            associations_dict[person] += 1

    # Find individual with the most charity associations
    max_associations = max(associations_dict.values())
    person_with_most_associations = [person for person, associations in associations_dict.items() if associations == max_associations]

    print(f'The individual with the most charity associations is:')
    print(person_with_most_associations[0]) # Fixed print statement to print first person in the list
    print(f'Number of associations: {max_associations}')
