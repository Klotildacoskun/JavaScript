var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);
console.log("\n");

// capitalize the first letter to show this ia a contructor
function Course(title,instructor,level,published, views){
  //scope is changed, this way it is made global
  this.title=title;
  this.instructor=instructor;
  this.published=published;
  this.level=level;
  this.views=views;
  //here a new variable (updateViews) to count the view number
  // is created and the funtion to perform this action
  // is inserted.
  this.updateViews = function() {
      return ++this.views;
    }
};
var courses=[
     new Course("Math","Tilda","1",true,0),
     new Course("Science","Fadime","1",true,1234)];
console.log(courses);
console.log(courses[1].updateViews());
console.log(courses[0].updateViews());

// "."is used to call for methods or variables
// if a variable has a complicated name for ex: WP:image
//use course.["WP:image"] to call that attribute.
