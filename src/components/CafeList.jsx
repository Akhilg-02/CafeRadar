import { Paper, List, ListItemButton, ListItemText, Typography, Box } from "@mui/material";


const CafeList = ({cafes, onSelectCafe}) => {
  return (
   <Paper
   elevation={0}
   sx={{
    width:320,
    height: "calc(100vh -120px)",
    alignSelf: "center",
    overflowY: "auto",
    p:2,
    mr:2,
   display: { xs: "none", sm: "block" }
   }}
   >
    <Box sx={{mb:1}}>
      <Typography variant="h6" sx={{fontWeight:600}}>
        Cafe NearBy
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Tap a cafe to fly the map
      </Typography>
    </Box>

    <List disablePadding>
      {cafes.map((cafe) => (
          <ListItemButton
            key={cafe.id}
            onClick={() => onSelectCafe(cafe)}
            sx={{
              borderRadius: 1,
              mb: 0.5,
            }}
          >
            <ListItemText primary={cafe.name} slotPropsPrimary={{ variant: "body1" }} />
          </ListItemButton>
        ))}
    </List>
   </Paper>
  )
}

export default CafeList
