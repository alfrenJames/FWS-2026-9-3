function displayShoeDetails() {
      const dropdown = document.getElementById("shoeSelect");
      const selectedOption = dropdown.options[dropdown.selectedIndex];
      
      const shoeName = selectedOption.value;
      let price = parseFloat(selectedOption.getAttribute("data-price"));
      const isMember = document.getElementById("memberCheck").checked;

      const outputBox = document.getElementById("outputBox");

      // Hide the display box if the default "-- Select a shoe --" option is picked
      if (shoeName === "") {
        outputBox.style.display = "none";
        return;
      }

      // Apply 10% discount if member box is checked
      let discountNote = "";
      if (isMember) {
        price = price * 0.90;
        discountNote = " (10% Member Discount Applied)";
      }

      // Format price with commas and 2 decimal places
      const formattedPrice = price.toLocaleString("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });

      // Update the HTML text and show the box
      document.getElementById("displayName").textContent = shoeName;
      document.getElementById("displayPrice").textContent = formattedPrice + discountNote;
      outputBox.style.display = "block";
    }