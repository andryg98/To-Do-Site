//Check off specific todo by clicking
//using this allows the click event to work also with future "li"
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})

//Remove the todo if the X is pressed
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();	//Stops propagation to parents
})


$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
		//Empty input text
		$(this).val("");
	}
});