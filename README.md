# meet: A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

#### **The user stories and scenarios for this app are listed below:**

## User Story 1: as a user, I should be able to filter events by city so that I can see the events that take place in that city.

### **Scenario 1:** when user hasn't searched for a city, show upcoming events from all cities.
#### **Given:** user hasn't searched for any city.
#### **When:** the user opens the app.
#### **Then:** the user should see a list of all upcoming events.

### **Scenario 2:** user should see a list of suggestions when they search for a city.
#### **Given:** the main page is open.
#### **When:** user starts typing in the city text box.
#### **Then:** the user should see a list of cities (suggestions) that match what they've typed.

### **Scenario 3:** user can select the city from the suggested list.
#### **Given:** the user was typing "Berlin" in the city text box, and the list of suggested cities is showing.
#### **When:** the user selects a city (e.g., "Berlin, Germany") from the list.
#### **Then:** there city should be changed to that city (i.e., "Berlin, Germany"), and the user should receive a list of upcoming events in that city.

## User Story 2: as a user, I should be able to show/hide event details so that I can see more/less information about an event.

### **Scenario 1:** an event element is collapsed by default.
#### **Given:** user has open the application.
#### **When:** user selects a city.
#### **Then:** the city's list of events will open, with each event in collapsed form.

### **Scenario 2:** user can expand in events to see its details.
#### **Given:** the list of events has been loaded
#### **When:** user clicks on "Show details" button for an event
#### **Then:** the event element will be expanded to show the event details

## User Story 3: as a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

### **Scenario 1:** when user hasn't specified a number, 32 is the default number.
#### **Given:** user has selected a city.
#### **When:** user clicks on "Edit Number of Events" button.
#### **Then:** a form will open with which to submit the number of events to be shown for each city; The default value of 32 will be showing and will be highlighted.

### **Scenario 2:** user can change the number of events they want to see.
#### **Given:** user has opened the "Edit Number of Events" button.
#### **When:** user the number of events showing in the form and clicks the Submit button.
#### **Then:** the number of events being shown changes to the number which the user has entered.

## User Story 4: As a user, i should be able to use the app when off-line so that I can see the events I viewed the last time I was online.

### **Scenario 1:** Show cached data when there's no Internet connection.
#### **Given:** user has launched the application previously and has viewed one or more events.
#### **When:** user launches the application with no Internet connection available.
#### **Then:** the events that the user has viewed previously will be retrieved and shown from a cache.

### **Scenario 2:** Show error when user changes the settings (city, time range).
#### **Given:** user has launched the application with no Internet connection.
#### **When:** user attempts to change the settings (city, time range).
#### **Then:** an alert opens, notifying user that the settings cannot be changed without an open Internet connection.

## User Story 5:  As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized there.

### **Scenario 1:**   Show a chart with the number of upcoming events in each city.
#### **Given:** user has selected a city.
#### **When:** user clicks "Show Chart" button.
#### **Then:** a chart opens, showing the number of events of different event types for that city.
