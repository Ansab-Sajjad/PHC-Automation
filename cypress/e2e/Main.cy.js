import Add_New_Crews from "./Add_New_Crews.cy";
import Add_new_trip from "./Add_new_trip.cy";
import Add_New_Users from "./Add_New_Users.cy";
import Add_Patient from "./Add_Patient.cy";
import Add_Payers from "./Add_Payers.cy";
import Add_Vehicles from "./Add_Vehicles.cy";
import Edit_Vehicles from "./Edit_Vehicle.cy";
import Add_Facilities from "./Facilities.cy";
import PHC_Login from "./Login.cy";
import Visit_URL from "./PHC_URLs.cy";

describe("Lets Automate the PHC.", () => {
    
Visit_URL()
PHC_Login()
// Add_Payers()
// Add_new_trip()
// Add_Vehicles()
// Edit_Vehicles()

// Add_New_Crews()
// Add_New_Users()
// Add_Facilities()
Add_Patient()


});