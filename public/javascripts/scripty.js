 $(document).ready(function () {
	 $("form").submit(function (event) {
                event.preventDefault();
                var notes = $("#notes").val().toLowerCase();

                if (notes.includes("vegan")) {
                    alert("Warning! Cheesecake contains dairy!!");
                } else {
                    // remove form section
                    $("form").remove();

                    // display order confirmation
                    var confirmationText = "Thank you! Your order has been placed\n";
                    confirmationText += "Notes: " + notes;

                    $("body").append("<p>" + confirmationText + "</p>");
                    alert("Selected Quantity: " + selectedQuantity + "\nSelected Toppings: " + selectedToppings);

                }
            });

            // Add event listener for the order button
            $("input[type='submit']").on("click", function () {
                updateSelectedItems();
            });
        });

        function updateSelectedItems() {
            var notes = $("#notes").val().toLowerCase();
        if(!notes.includes("vegan")){
            var selectedQuantity = $("#quantity").val();
            var selectedToppings = $("input[name='topping']:checked").map(function () {
                return this.value;
            }).get().join(", ");
            alert("Selected Quantity: " + selectedQuantity + "\nSelected Toppings: " + selectedToppings);

        }
}

evenHandler = function( event ) {
	/* dp=o stuff */
}

$(function() {
	$(".foo").click(eventHandler);
});
