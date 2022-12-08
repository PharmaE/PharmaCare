import Medication from "../Pages/Medication";
import Grid from "@mui/material/Grid";

function MedicationList(){

  const medicationList = [
    {
      id: 1,
      Medication: "Lisinopril 5mg",
      Directions: "Take 1 tablet by mouth once daily",
      Quantity: 30,
      Refills: 2,
      Prescriber: "Lim, Kenneth MD",
      Use: "Blood Pressure",
    },
    {
      id: 2,
      Medication: "Amlodipine 5mg",
      Directions: "Take 1 tablet by mouth once daily",
      Quantity: 90,
      Refills: 2,
      Prescriber: "Lim, Kenneth MD",
      Use: "Blood Pressure",
    },
    {
      id: 3,
      Medication: "Metformin 500mg",
      Directions: "Take 1 tablet by mouth twice daily",
      Quantity: 60,
      Refills: 0,
      Prescriber: "Lim, Kenneth MD",
      Use: "Blood Glucose",
    },
    {
      id: 4,
      Medication: "Fioricet 50mg",
      Directions: "Take 1 tablet by mouth at onset of migraine",
      Quantity: 20,
      Refills: 1,
      Prescriber: "Torres, Gary MD",
      Use: "Migraine/Headache",
    },
    {
      id: 5,
      Medication: "Novolin 70/30",
      Directions: "Inject 10 units subcutaneously after every meal",
      Quantity: 20,
      Refills: 0,
      Prescriber: "Lim, Kenneth MD",
      Use: "Blood Glucose",
    },
  ];

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 14 }}>


          {medicationList.map((medicationObj) => {
            return (
              <Grid item xs={2} sm={3} md={3} key={medicationObj}>
              <Medication
                Medication ={medicationObj.Medication}
                Direction ={medicationObj.Directions}
                Quantity ={medicationObj.Quantity}
                Refills ={medicationObj.Refills}
                Prescriber ={medicationObj.Prescriber}
                Use ={medicationObj.Use}
              />
              </Grid>
            );
          })}
        </Grid>
    </div>
  );
}

export default MedicationList;

