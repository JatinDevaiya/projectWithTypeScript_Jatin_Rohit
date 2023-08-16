import { Button, Grid, Paper } from "@mui/material";
import { useGetAllUsersQuery } from "../services/Users";

interface product {
  name: string;
  email: string;
  phone: string;
  website: string;
  id: number;
}
const UsersPage = () => {
  console.log("aaa", useGetAllUsersQuery());
  const { data, isError, isLoading } = useGetAllUsersQuery();
  if (isLoading) {
    return <p>isLoading...</p>;
  }
  if (isError) {
    return <p>Something Went Wrong...</p>;
  }

  return (
    <Grid spacing={0} container>
      {data.map((user: product) => (
        <Grid sm={3}>
          <Paper sx={{ padding: 2 }}>
            <h4>Name: {user.name}</h4>
            <h4> Email:{user.email}</h4>
            <h4> Phone:{user.phone}</h4>
            <h4> Website:{user.website}</h4>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersPage;
