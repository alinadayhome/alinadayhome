
$("#literacy-center").click(function(e) {
	e.preventDefault();
   var activitymodal = $("#activity-modal");
   activitymodal.find('.modal-title').text('Literacy Center');
   activitymodal.find('#image').attr('src', '../assets/img/activities/literacy-2.jpg');
  // activitymodal.find('.modal-body').append("<img class='img-fluid' src='../assets/img/activities/outdoor.jpg'>");

   activitymodal.find('.modal-body').text('We provide an atmosphere that is fun, verbally and visually stimulating,' + 
   ' thus encourages children to talk and listen more.  The reading corner is designed with eye-catching age-appropriate ' + 
   ' books and soft furnishings, encourages reading. The children see reading as fun rather than as punishment. ');
   $("#modal-header").css("background-color", "#ffdc4a");
   $("#modal-footer").css("background-color", "#ffdc4a");
   activitymodal.modal('show');	
}); 

$("#science-discovery").click(function(e) {
	e.preventDefault();
   var activitymodal = $("#activity-modal");
   activitymodal.find('.modal-title').text('Science & Discovery');
   activitymodal.find('#image').attr('src', '../assets/img/activities/science.jpg');
   activitymodal.find('.modal-body').text('Exploring is what we do best, why is the sky blue, why are ' + 
   'rocks hard, these are some of the questions we hear and solve together. Using many different ' + 
   'materials we provide a great learning environment. ');
   $("#modal-header").css("background-color", "#a8d79e");
   $("#modal-footer").css("background-color", "#a8d79e");
   activitymodal.modal('show');	 
});

$("#fine-motor").click(function(e) {
	e.preventDefault();
   var activitymodal = $("#activity-modal");
   activitymodal.find('.modal-title').text('Fine Motor');
   activitymodal.find('#image').attr('src', '../assets/img/activities/finemotor.jpg');
   activitymodal.find('.modal-body').text('Using crayons, paints, play dough, and clay to make creative impressions, grasping toys, ' + 
   ' shape sorting game, pegging, small/ medium/large blocks, beading, threading to enhance their fine motor skills.');
   $("#modal-header").css("background-color", "#ff8454");
   $("#modal-footer").css("background-color", "#ff8454");
   activitymodal.modal('show');	 
});

$("#creative-art").click(function(e) {
	e.preventDefault();
   var activitymodal = $("#activity-modal");
   activitymodal.find('.modal-title').text('Creative Art');
   activitymodal.find('#image').attr('src', '../assets/img/activities/fineart.jpg');
   activitymodal.find('.modal-body').text("Free expression art is what it's all about, although younger " +
   "children have more guided crafts they still have the opportunity to express themselves with numerous " + 
   "materials and art supplies.");
   $("#modal-header").css("background-color", "#ffdc4a");
   $("#modal-footer").css("background-color", "#ffdc4a");
   activitymodal.modal('show');	 
});


$("#outdoor").click(function(e) {
	e.preventDefault();
   var activitymodal = $("#activity-modal");
   activitymodal.find('.modal-title').text('Outdoor');
    activitymodal.find('#image').attr('src', '../assets/img/activities/outdoor.jpg');
   activitymodal.find('.modal-body').text("Our program encourages play. We allow the children outdoors " + 
   " for a minimum of an hour a day, (depending on the weather),  to run and play to build up their gross " + 
   " motor skills while getting a good amount of fresh air. Our outdoor space provides free expression art, " + 
   " sandboxes, water tables, and so much more! ");
   $("#modal-header").css("background-color", "#ff8454");
   $("#modal-footer").css("background-color", "#ff8454");
   activitymodal.modal('show');	 
});

$("#based-play").click(function(e) {
	e.preventDefault();
   var activitymodal = $("#activity-modal");
   activitymodal.find('.modal-title').text('Center Based Play');
   activitymodal.find('#image').attr('src', '../assets/img/activities/center.jpg');
   activitymodal.find('.modal-body').text("This allows children to play at individual/specific " +
   "centers that have many toys and materials such as cooking, kitchen stuff for the theme of that center." +
   " This allows free expression with an organized feel.");
   $("#modal-header").css("background-color", "#a8d79e");
   $("#modal-footer").css("background-color", "#a8d79e");
   activitymodal.modal('show');	 
});

$("#dramatic-play").click(function(e) {
	e.preventDefault();
   var activitymodal = $("#activity-modal");
   activitymodal.find('.modal-title').text('Dramatic Play');
   activitymodal.find('#image').attr('src', '../assets/img/activities/drama-2.jpg');
   activitymodal.find('.modal-body').text("Let your inner actor out with a wide variety of " + 
   "dress up clothes and props!, building castle, professional actor, policeman, farmer, doctor.");
   $("#modal-header").css("background-color", "#ffdc4a");
   $("#modal-footer").css("background-color", "#ffdc4a");
   activitymodal.modal('show');	 
});

$("#learning-center").click(function(e) {
	e.preventDefault();
   var activitymodal = $("#activity-modal");
   activitymodal.find('.modal-title').text('Learning Center');
   activitymodal.find('#image').attr('src', '../assets/img/activities/learning-2.jpg');
   activitymodal.find('.modal-body').text("We encourage children's learning through play. " + 
   "The children interact among themselves and develop the skills required for their individual " + 
   "growth, such as Social skills, cognitive skills, language skills, emotional skills, and " + 
   "physical skills. Children learn ABC's, 123's, counting, puzzle, songs, facts about different cultures etc.");
   $("#modal-header").css("background-color", "#a8d79e");
   $("#modal-footer").css("background-color", "#a8d79e");
   activitymodal.modal('show');	 
});