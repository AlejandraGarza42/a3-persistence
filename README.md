## Movie Tracker!

your glitch link e.g. https://a3-alejandra-garza.glitch.me/

## Current Users: 
Username: charlie   
Passowrd: charliee

Username: bill      
Password: bill

### Project Summary
This website allows users to keep track of the movies they have watched and their ratings for each film. It is an excellent tool for both film enthusiast that want to keep track of their rating for films and casual movie goers that want to keep track of their films. 

![alt text](https://github.com/AlejandraGarza42/a3-persistence/blob/master/screenshots/login.PNG)

Users can add as many movies as they please, and can later edit their entries whichever way they want (they can change the title, genre, and/or rating) as seen below. They are also of course allowed to delete their entries. 

![alt text](https://github.com/AlejandraGarza42/a3-persistence/blob/master/screenshots/table.PNG)

The biggest challenge I faced while completing this project was the fact that I had to start from scratch: my previous project was not functioning correctly and the idea was not very appealing to me. I had to learn both authentication and everything we were meant to learn last project.
While passport was confusing, I would say the hardest feature to implement was the ability to edit/delete entries. I chose to assign an ID to each entry (which is automatically displayed in the table) and had the user identify which film they wanted to delete/edit based on the ID (as seen below). This proved to be very challenging to implement, but I was able to complete it!

![alt text](https://github.com/AlejandraGarza42/a3-persistence/blob/master/screenshots/editing%20entry.PNG)

![alt text](https://github.com/AlejandraGarza42/a3-persistence/blob/master/screenshots/deleting%20entry.PNG)

I chose the authentication strategy showed in the lecture notes (were there other strategies?) because it was very straight forward and easy to implement.

I had a hard time finding a CSS Framework since I tend to be very colorful and extreme when I design websites, but I ended up choosng turretcss (below) because I liked the way it formatted my website the most. I tried changing the input texboxes width since I dislike them going across the screen, but for some reason it did not work. I wanted to change the color and some of the settings, but I was unsure of how much we were allowed to modify it. 

![alt text](https://github.com/AlejandraGarza42/a3-persistence/blob/master/screenshots/turretcss.PNG)

These were my middleware packages: 
 - **passport**:        aided with user authentication 
 - **morgan**:          displays a well-organized summary of the requests being done on the console.
 - **express-session**: stores session ID on cookie and stores session data on the server-side.
 - **helmet**:          helpes secure Express apps
 - **body-parser**:     parses incoming request bodies 

## Technical Achievements
- **Improved 'Edit Entry' Feature**: Originally, my edit entry feature required users to edit the entire entry (all fields: title, genre, rating) if not it would leave the empty ones blank. Instead of just writing instuction specifying this to the user, I changedthe feature to allow users to change as little fields as they want without losing the original information.
- **Finishing Project**: I know this doesn't count as an achievement, but after my experience with the last project, finishing this application was a huge deal in my book.

### Design/Evaluation Achievements
Since I was not sure how much we were allowed to edit our css frameworks, I did not do much for this field. I did try to change the input textbox size but was unsuccessful.
