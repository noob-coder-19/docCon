import { Grid, Typography } from "@material-ui/core";
import Specialty from "./SpecialtyCard";

// https://i.ibb.co/8B5TGGb/2ffe13c1-efa3-4361-9dde-afafb53d4553.png
// https://i.ibb.co/Vxqjr4b/34ae6abd-5a9d-40d1-98be-454ac94925c7.png
// https://i.ibb.co/hHrrsbg/ee249e8a-950a-489c-8a33-8846889831f5.png
// https://i.ibb.co/6HLbwZk/ic-bariatrics.webp
// https://i.ibb.co/C1JFW3C/ic-cardiology.webp
// https://i.ibb.co/zhzVQn0/ic-Dentist.webp
// https://i.ibb.co/rpMBRM1/ic-gastroenterology.webp
// https://i.ibb.co/mztSYQc/ic-paediatrics.webp

const SpecialityCards = () => {
  return (
    <div style={{ paddingLeft: 16, paddingRight: 16 }}>
      <Typography variant="h4">
        Choose from a wide range of specialities
      </Typography>
      <Grid
        container
        spacing={2}
        style={{ marginBottom: 24, marginTop: 4 }}
        justifyContent="center"
      >
        <Grid item xs={6} md={3}>
          <Specialty
            title="Paediatrics"
            img="https://i.ibb.co/mztSYQc/ic-paediatrics.webp"
            summary="Specialists for child care"
            details="Constipation, Puberty, Nutrition, Autism"
            url="/paediatrics"
          ></Specialty>
        </Grid>
        <Grid item xs={6} md={3}>
          <Specialty
            title="Covid Care"
            img="https://i.ibb.co/8B5TGGb/2ffe13c1-efa3-4361-9dde-afafb53d4553.png"
            summary="Treatment of COVID-19"
            details="Cough, Fever, Breadthlessness, Post COVID treatment, CHest Pain"
            url="/covid"
          ></Specialty>
        </Grid>
        <Grid item xs={6} md={3}>
          <Specialty
            title="Counseling"
            img="https://i.ibb.co/Vxqjr4b/34ae6abd-5a9d-40d1-98be-454ac94925c7.png"
            summary="Specialists for Mental health"
            details="Depression, Anxiety, Trauma"
            url="/counseling"
          ></Specialty>
        </Grid>
        <Grid item xs={6} md={3}>
          <Specialty
            title="Dermatology"
            img="https://i.ibb.co/hHrrsbg/ee249e8a-950a-489c-8a33-8846889831f5.png"
            summary="Specialtists for Skin and Hair"
            details="Hairfall, dandruff, Pimples, Rashes"
            url="/dermatology"
          ></Specialty>
        </Grid>
        <Grid item xs={6} md={3}>
          <Specialty
            title="Cardiology"
            img="https://i.ibb.co/C1JFW3C/ic-cardiology.webp"
            summary="Specialists for the heart"
            details="Cholestrol, Chest Pain"
            url="/cardiology"
          ></Specialty>
        </Grid>
        <Grid item xs={6} md={3}>
          <Specialty
            title="Gastroenterology"
            img="https://i.ibb.co/rpMBRM1/ic-gastroenterology.webp"
            summary="Specialists for digestive health"
            details="Acidity, Vomiting, Stomach ulcers"
            url="/gastroenterology"
          ></Specialty>
        </Grid>
        <Grid item xs={6} md={3}>
          <Specialty
            title="Dentist"
            img="https://i.ibb.co/zhzVQn0/ic-Dentist.webp"
            summary="Specialtists for dental issues"
            details="Cavity, Toothache, Crooked Teeth"
            url="/dentist"
          ></Specialty>
        </Grid>
      </Grid>
    </div>
  );
};

export default SpecialityCards;
